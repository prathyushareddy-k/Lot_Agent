import type { CSSProperties } from 'react';

export function parseInlineStyle(css: string): CSSProperties {
  const out: Record<string, string> = {};
  css.split(';').forEach(rule => {
    const i = rule.indexOf(':');
    if (i === -1) return;
    const prop = rule.slice(0, i).trim();
    const val = rule.slice(i + 1).trim();
    if (!prop || !val) return;
    out[prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
  });
  return out as CSSProperties;
}
