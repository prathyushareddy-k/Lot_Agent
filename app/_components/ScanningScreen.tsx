import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function ScanningScreen({ v }: { v: AppView }) {
  return (
    <div
      data-screen-label="Scanning"
      style={parseInlineStyle('min-height:calc(100vh - 60px);background:#fff;display:flex;align-items:center;justify-content:center;')}
    >
      <div style={parseInlineStyle('max-width:520px;width:100%;padding:40px 32px;text-align:center;')}>
        {/* Agent blue pulse */}
        <div style={parseInlineStyle('position:relative;width:80px;height:80px;margin:0 auto 32px;')}>
          <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#2563EB;opacity:.12;animation:lapulse 2s ease-out infinite;')}></span>
          <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#2563EB;opacity:.12;animation:lapulse 2s ease-out infinite .85s;')}></span>
          <span style={parseInlineStyle('position:absolute;inset:18px;border-radius:50%;background:#2563EB;display:flex;align-items:center;justify-content:center;')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <circle cx="12" cy="12" r="8" opacity=".4"></circle>
            </svg>
          </span>
        </div>
        <h2 style={parseInlineStyle('font:700 26px/1.2 var(--font-serif,serif);letter-spacing:-.5px;color:#1C1A17;margin:0 0 10px;')}>
          Your agent is scanning listings now…
        </h2>
        <p style={parseInlineStyle('font-size:15px;color:#6B6459;line-height:1.6;margin:0 0 28px;')}>
          Real work happening for you. We&apos;ll email you the moment your shortlist is ready — no need to wait around.
        </p>
        <div style={parseInlineStyle('position:relative;height:5px;background:#E7E2D9;border-radius:999px;overflow:hidden;margin-bottom:28px;')}>
          <span style={parseInlineStyle('position:absolute;top:0;width:40%;height:100%;background:#2563EB;border-radius:999px;animation:lascan 1.4s ease-in-out infinite;')}></span>
        </div>
        <div style={parseInlineStyle('text-align:left;background:#fff;border:1px solid #E7E2D9;border-radius:12px;overflow:hidden;')}>
          {v.scanItems.map((sItem, i) => (
            <Fragment key={i}>
              <div style={parseInlineStyle('display:flex;align-items:center;gap:12px;padding:14px 20px;border-bottom:1px solid #F5F1EB;')}>
                <span style={parseInlineStyle(sItem.dotStyle)}>{sItem.mark}</span>
                <span style={parseInlineStyle(sItem.textStyle)}>{sItem.label}</span>
                <span style={parseInlineStyle('margin-left:auto;font-size:12px;color:#9C9189;font-family:var(--font-mono,monospace);font-variant-numeric:tabular-nums;')}>{sItem.count}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <button onClick={v.goShortlist} style={parseInlineStyle('margin-top:20px;background:none;border:none;color:#0F766E;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;')}>
          Skip ahead to shortlist (demo) →
        </button>
      </div>
    </div>
  );
}
