import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function ScanningScreen({ v }: { v: AppView }) {
  return (
    <div
      data-screen-label="Scanning"
      style={parseInlineStyle('min-height:calc(100vh - 46px);background:#fff;display:flex;align-items:center;justify-content:center;')}
    >
      <div style={parseInlineStyle('max-width:520px;width:100%;padding:40px 32px;text-align:center;')}>
        <div style={parseInlineStyle('position:relative;width:74px;height:74px;margin:0 auto 30px;')}>
          <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e3a8a;opacity:.18;animation:lapulse 2s ease-out infinite;')}></span>
          <span
            style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e3a8a;opacity:.18;animation:lapulse 2s ease-out infinite .9s;')}
          ></span>
          <span style={parseInlineStyle('position:absolute;inset:22px;border-radius:50%;background:#1e3a8a;')}></span>
        </div>
        <h2 style={parseInlineStyle('font-size:28px;font-weight:800;letter-spacing:-.6px;margin:0 0 10px;')}>Your agent is scanning listings now…</h2>
        <p style={parseInlineStyle('font-size:16px;color:#71717a;line-height:1.5;margin:0 0 30px;')}>
          Hang tight — this is real work happening for you. No need to wait around; we&apos;ll email you the moment your shortlist is ready.
        </p>
        <div style={parseInlineStyle('position:relative;height:5px;background:#f0f0f1;border-radius:99px;overflow:hidden;margin-bottom:30px;')}>
          <span style={parseInlineStyle('position:absolute;top:0;width:40%;height:100%;background:#1e3a8a;border-radius:99px;animation:lascan 1.4s ease-in-out infinite;')}></span>
        </div>
        <div style={parseInlineStyle('text-align:left;border:1px solid #e4e4e7;border-radius:14px;overflow:hidden;')}>
          {v.scanItems.map((sItem, i) => (
            <Fragment key={i}>
              <div style={parseInlineStyle('display:flex;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid #f0f0f1;')}>
                <span style={parseInlineStyle(sItem.dotStyle)}>{sItem.mark}</span>
                <span style={parseInlineStyle(sItem.textStyle)}>{sItem.label}</span>
                <span style={parseInlineStyle('margin-left:auto;font-size:12px;color:#a1a1aa;')}>{sItem.count}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <button onClick={v.goShortlist} style={parseInlineStyle('margin-top:22px;background:none;border:none;color:#1e3a8a;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;')}>
          Skip ahead to shortlist (demo) →
        </button>
      </div>
    </div>
  );
}
