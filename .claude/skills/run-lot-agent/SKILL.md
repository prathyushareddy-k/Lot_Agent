---
name: run-lot-agent
description: Build, run, and drive the Lot Agent Next.js app. Use when asked to start lot-agent, run the dev server, take a screenshot of its UI, or click through a flow (Landing/Intake/Shortlist/Compare/etc).
---

Lot Agent is a Next.js (App Router) web app — a single client-side
component (`app/page.tsx`) that swaps between 11 in-memory "screens"
(no server routing between them). Drive it by starting the dev server,
then piping commands to `.claude/skills/run-lot-agent/driver.mjs`, a
small Playwright-based REPL (this environment has no `chromium-cli`
installed, so this driver fills that role with an equivalent command
set). All paths below are relative to the repo root.

The UI does **not** require Postgres to run — nothing is wired to the
database yet (see `README.md` § Database). Skip `db:up` entirely
unless you're specifically testing Prisma/seed changes.

## Prerequisites

Node 22+ and npm (already required by the project). No OS packages
needed beyond what Playwright's Chromium download brings on its own.

```bash
node -v   # v22.22.3 when this was verified
```

## Setup

```bash
npm install                      # installs playwright as a devDependency
npx playwright install chromium  # downloads the browser binary (one-time; cached in ~/Library/Caches/ms-playwright or ~/.cache/ms-playwright on Linux)
```

## Build

No separate build step for local dev. (`npm run build` exists for a
production build if a task specifically needs one — not required to
run/screenshot the app.)

## Run (agent path)

Start the dev server in the background, wait for it to actually serve,
then drive it:

```bash
lsof -ti:3000 | xargs -r kill   # free the port if a previous run is still up
npm run dev > /tmp/nextdev.log 2>&1 &
disown
until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done
echo "dev server ready"
```

Then pipe commands to the driver:

```bash
node .claude/skills/run-lot-agent/driver.mjs <<'EOF'
nav http://localhost:3000
wait-for text=Get Started
screenshot landing
click text=Get Started
wait-for text=What will this car mostly do for you?
screenshot intake-step1
console --errors
quit
EOF
```

Screenshots land in `.claude/skills/run-lot-agent/screenshots/<name>.png`.
Stop the server when done: `lsof -ti:3000 | xargs -r kill`.

Driver commands:

| command | what it does |
|---|---|
| `nav <url>` | navigate to a URL |
| `wait-for text=<substring>` | wait up to 15s for text to appear |
| `wait-for sel=<css>` | wait up to 15s for a selector to appear |
| `click text=<substring>` | click the first element containing this text |
| `click sel=<css>` | click a selector |
| `fill sel=<css> <text>` | fill an input/textarea |
| `press <key>` | press a key on the focused element (e.g. `Enter`) |
| `screenshot [name]` | full-page screenshot → `screenshots/<name>.png` |
| `console --errors` | print any `console.error`/`pageerror` seen so far |
| `eval <js>` | evaluate JS in the page, print the result |
| `quit` | close the browser, exit |

Commands are queued and run strictly one at a time (a line doesn't
start until the previous one's promise resolves), so `nav` immediately
followed by `screenshot` won't race the page load.

### Verified flow (ran in this environment)

Landing → click "Get Started" → Intake step 1 (pick "Daily commute") →
Continue → Intake step 2 (radius slider). Zero console errors. Full
command log:

```
nav http://localhost:3000            → ok: navigated
wait-for text=Get Started            → ok: found
screenshot landing                   → ok: saved
click text=Get Started               → ok: clicked
wait-for text=What will this car...  → ok: found
screenshot intake-step1              → ok: saved
click text=Daily commute             → ok: clicked
click text=Continue                  → ok: clicked
wait-for text=How far will you go    → ok: found
screenshot intake-step2              → ok: saved
console --errors                     → ok: no console errors
```

## Run (human path)

```bash
npm run dev   # → http://localhost:3000, Ctrl-C to stop
```

## Test

No test suite exists yet (`npm run lint` and `npm run build` are the
only checks in CI-equivalent use today).

```bash
npm run lint
npm run build
```

---

## Gotchas

- **Click-before-hydration race, seen and fixed.** This app
  server-renders its initial HTML, so `wait-for text=...` succeeds
  (the text is already in the DOM) before React finishes hydrating and
  attaching `onClick` handlers. A `click` that lands in that window is
  a silent no-op — no error, the page just doesn't navigate, and the
  next `wait-for` times out 15s later looking confused. Root-caused by
  re-running the same `nav` → `wait-for` → `click` sequence 3x against
  a *fresh* dev server restart each time: it failed intermittently with
  `waitUntil: 'domcontentloaded'` and passed reliably (3/3) after
  switching `nav` to `waitUntil: 'networkidle'`, which gives the JS
  bundle time to load and hydrate before the driver hands back control.
  The driver already does this — if you see a `click` silently not
  navigating, this is almost certainly why; don't paper over it with a
  raw `sleep`, check `nav`'s `waitUntil` first.
- **`timeout` isn't available in this shell** (macOS, no coreutils
  `gtimeout` alias) — the classic `timeout 30 bash -c '...'` polling
  idiom from other run-skill examples fails with `command not found`.
  Use a plain `until curl -sf ...; do sleep 1; done` loop instead (no
  hard timeout, but works everywhere).
- **The app is a single in-memory state machine, not real routes.**
  There's no `/intake` or `/shortlist` URL to `nav` directly to — every
  screen transition has to happen via `click`ing through the actual UI
  flow starting from `/`. Reloading the page always resets to Landing.
- **"Daily commute" starts pre-checked on Intake step 1** — that's not
  a rendering bug, it's `usage: ['commute']` in the app's real initial
  state (`app/_lib/useAppView.ts`), matching the original prototype's
  default. Don't "fix" it if a screenshot shows it checked before you
  clicked anything.
- **Playwright's browser cache is version-keyed and shared across
  projects** (`~/Library/Caches/ms-playwright/chromium-<build>`) — if
  a different local project already downloaded the same Playwright
  version's Chromium, `npx playwright install chromium` is a no-op and
  finishes in under a second instead of the ~180MB download.
