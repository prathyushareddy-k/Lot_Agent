#!/usr/bin/env node
// Minimal chromium-cli-style REPL for driving the Lot Agent Next.js dev server.
// chromium-cli isn't installed in this environment, so this fills the same role:
// pipe newline-separated commands to stdin, screenshots land in ./screenshots/.
//
// Usage:
//   node .claude/skills/run-lot-agent/driver.mjs <<'EOF'
//   nav http://localhost:3000
//   wait-for text=Get Started
//   screenshot landing
//   click text=Get Started
//   wait-for text=What will this car mostly do for you?
//   screenshot intake-step1
//   console --errors
//   quit
//   EOF
//
// Commands:
//   nav <url>                  Navigate to a URL
//   wait-for text=<substring>  Wait (up to 15s) for text to appear on the page
//   wait-for sel=<css>         Wait (up to 15s) for a selector to appear
//   click text=<substring>     Click the first element containing this text
//   click sel=<css>            Click a selector
//   fill sel=<css> <text>      Fill an input/textarea matched by selector
//   press <key>                Press a key (e.g. Enter) on the focused element
//   screenshot [name]          Save a full-page screenshot to ./screenshots/<name>.png
//   console --errors           Print any console.error / pageerror seen since launch
//   eval <js>                  Evaluate JS in the page, print the result
//   quit                       Close the browser and exit

import { chromium } from 'playwright';
import { createInterface } from 'node:readline';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const skillDir = dirname(fileURLToPath(import.meta.url));
const screenshotDir = join(skillDir, 'screenshots');
mkdirSync(screenshotDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const consoleLog = [];
page.on('console', msg => {
  if (msg.type() === 'error') consoleLog.push(`[console.error] ${msg.text()}`);
});
page.on('pageerror', err => consoleLog.push(`[pageerror] ${err.message}`));

let shotCount = 0;

async function run(line) {
  const [cmd, ...rest] = line.trim().split(/\s+/);
  const arg = rest.join(' ');
  try {
    switch (cmd) {
      case '': return;
      case 'nav':
        // 'networkidle', not 'domcontentloaded': this app server-renders its
        // initial HTML, so text is visible (and wait-for succeeds) before
        // React finishes hydrating. A click that lands before the onClick
        // handler is attached is a silent no-op. Waiting for the network
        // (and thus the JS bundle) to go idle closes most of that race.
        await page.goto(arg, { waitUntil: 'networkidle' });
        console.log(`ok: navigated to ${arg}`);
        return;
      case 'wait-for': {
        if (arg.startsWith('text=')) {
          await page.getByText(arg.slice(5), { exact: false }).first().waitFor({ timeout: 15000 });
        } else if (arg.startsWith('sel=')) {
          await page.locator(arg.slice(4)).first().waitFor({ timeout: 15000 });
        } else {
          throw new Error('wait-for needs text=... or sel=...');
        }
        console.log(`ok: found ${arg}`);
        return;
      }
      case 'click': {
        if (arg.startsWith('text=')) {
          await page.getByText(arg.slice(5), { exact: false }).first().click();
        } else if (arg.startsWith('sel=')) {
          await page.locator(arg.slice(4)).first().click();
        } else {
          throw new Error('click needs text=... or sel=...');
        }
        console.log(`ok: clicked ${arg}`);
        return;
      }
      case 'fill': {
        const [sel, ...textParts] = rest;
        const selector = sel.startsWith('sel=') ? sel.slice(4) : sel;
        await page.locator(selector).first().fill(textParts.join(' '));
        console.log(`ok: filled ${selector}`);
        return;
      }
      case 'press':
        await page.keyboard.press(arg);
        console.log(`ok: pressed ${arg}`);
        return;
      case 'screenshot': {
        const name = arg || `shot-${++shotCount}`;
        const path = join(screenshotDir, `${name}.png`);
        await page.screenshot({ path, fullPage: true });
        console.log(`ok: saved ${path}`);
        return;
      }
      case 'console':
        if (consoleLog.length === 0) console.log('ok: no console errors');
        else console.log(consoleLog.join('\n'));
        return;
      case 'eval': {
        const result = await page.evaluate(arg);
        console.log('ok:', JSON.stringify(result));
        return;
      }
      case 'quit':
        await browser.close();
        process.exit(0);
        return;
      default:
        console.log(`err: unknown command '${cmd}'`);
    }
  } catch (e) {
    console.log(`err: ${e.message}`);
  }
}

// Commands are queued and run one at a time — readline emits lines faster
// than an async `nav`/`click` resolves, so without this, later commands
// (e.g. a `screenshot` right after `nav`) would race the page load.
let queue = Promise.resolve();
const rl = createInterface({ input: process.stdin });
rl.on('line', line => {
  queue = queue.then(() => run(line));
});
rl.on('close', async () => {
  await queue;
  await browser.close();
  process.exit(0);
});
