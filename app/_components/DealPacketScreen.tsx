import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function DealPacketScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Deal Packet" style={parseInlineStyle('min-height:calc(100vh - 46px);')}>
      <div style={parseInlineStyle('max-width:820px;margin:0 auto;padding:32px;')}>
        <button
          onClick={v.packetBack}
          style={parseInlineStyle('background:none;border:none;color:#71717a;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;margin-bottom:14px;')}
        >
          {v.packetBackLabel}
        </button>
        <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:10px;margin-bottom:6px;')}>
          <div>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;letter-spacing:.6px;color:#1e3a8a;margin-bottom:4px;')}>YOUR DEAL PACKET</div>
            <h1 style={parseInlineStyle('font-size:28px;font-weight:800;letter-spacing:-.7px;margin:0;')}>{v.packetName}</h1>
          </div>
          <div style={parseInlineStyle('font-size:13px;color:#71717a;')}>
            {v.packetDealer} · {v.packetGenerated}
          </div>
        </div>

        {/* 1 offer worksheet */}
        <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:24px;margin-top:22px;')}>
          <div style={parseInlineStyle('display:flex;align-items:center;gap:10px;margin-bottom:16px;')}>
            <div
              style={parseInlineStyle(
                'width:26px;height:26px;border-radius:7px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;',
              )}
            >
              1
            </div>
            <h3 style={parseInlineStyle('font-size:17px;font-weight:700;margin:0;')}>Offer worksheet</h3>
          </div>
          {v.worksheet.map((w, i) => (
            <Fragment key={i}>
              <div style={parseInlineStyle('display:flex;justify-content:space-between;padding:11px 0;border-bottom:1px solid #f0f0f1;')}>
                <span style={parseInlineStyle(`font-size:14px;color:${w.color};font-weight:${w.weight};`)}>{w.k}</span>
                <span style={parseInlineStyle(`font-size:14px;color:${w.color};font-weight:${w.weight};`)}>{w.v}</span>
              </div>
            </Fragment>
          ))}
          <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;margin-top:16px;background:#eef3fb;border-radius:10px;padding:16px 18px;')}>
            <span style={parseInlineStyle('font-size:15px;font-weight:700;color:#1e3a8a;')}>Out-the-door total</span>
            <span style={parseInlineStyle('font-size:24px;font-weight:800;color:#1e3a8a;letter-spacing:-.5px;')}>{v.packetOtdTotal}</span>
          </div>
        </div>

        {/* 2 negotiation script */}
        <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:24px;margin-top:16px;')}>
          <div style={parseInlineStyle('display:flex;align-items:center;gap:10px;margin-bottom:16px;')}>
            <div
              style={parseInlineStyle(
                'width:26px;height:26px;border-radius:7px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;',
              )}
            >
              2
            </div>
            <h3 style={parseInlineStyle('font-size:17px;font-weight:700;margin:0;')}>Negotiation script</h3>
          </div>
          <div style={parseInlineStyle('display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px;')}>
            <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:10px;padding:14px;text-align:center;')}>
              <div style={parseInlineStyle('font-size:11px;color:#a1a1aa;font-weight:600;letter-spacing:.4px;margin-bottom:4px;')}>OPEN AT</div>
              <div style={parseInlineStyle('font-size:20px;font-weight:800;')}>{v.packetOpen}</div>
            </div>
            <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:10px;padding:14px;text-align:center;')}>
              <div style={parseInlineStyle('font-size:11px;color:#a1a1aa;font-weight:600;letter-spacing:.4px;margin-bottom:4px;')}>SETTLE NEAR</div>
              <div style={parseInlineStyle('font-size:20px;font-weight:800;')}>{v.packetSettle}</div>
            </div>
            <div style={parseInlineStyle('background:#fbedea;border:1px solid #f0c8bd;border-radius:10px;padding:14px;text-align:center;position:relative;')}>
              <div style={parseInlineStyle('font-size:11px;color:#b4533a;font-weight:700;letter-spacing:.4px;margin-bottom:4px;')}>WALK AWAY ABOVE</div>
              <div style={parseInlineStyle('font-size:20px;font-weight:800;color:#b4533a;')}>{v.packetWalk}</div>
            </div>
          </div>
          {v.showNotes && (
            <div style={parseInlineStyle('background:#fffbeb;border:1px solid #f3e3a3;border-left:3px solid #d4a72c;border-radius:8px;padding:11px 14px;margin-bottom:16px;')}>
              <span style={parseInlineStyle('font-size:10px;font-weight:700;letter-spacing:.8px;color:#a8801a;display:block;margin-bottom:3px;')}>THE WALK-AWAY NUMBER</span>
              <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#52525b;')}>
                A pre-committed walk-away price is the single most valuable thing here — it removes in-the-moment pressure. First-time buyers who set it in advance overpay far less.
              </span>
            </div>
          )}
          <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:11px;padding:16px;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#71717a;margin-bottom:10px;')}>WORD-FOR-WORD</div>
            {v.scriptLines.map((l, i) => (
              <div key={i} style={parseInlineStyle('font-size:14px;line-height:1.6;color:#27272a;margin-bottom:10px;padding-left:12px;border-left:2px solid #d8e2f4;')}>
                &quot;{l}&quot;
              </div>
            ))}
          </div>
        </div>

        {/* 3 test-drive checklist */}
        <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:24px;margin-top:16px;')}>
          <div style={parseInlineStyle('display:flex;align-items:center;gap:10px;margin-bottom:16px;')}>
            <div
              style={parseInlineStyle(
                'width:26px;height:26px;border-radius:7px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;',
              )}
            >
              3
            </div>
            <h3 style={parseInlineStyle('font-size:17px;font-weight:700;margin:0;')}>
              Test-drive checklist <span style={parseInlineStyle('font-size:13px;font-weight:500;color:#a1a1aa;')}>· known issues for this model/year</span>
            </h3>
          </div>
          <div style={parseInlineStyle('display:grid;grid-template-columns:1fr 1fr;gap:10px;')}>
            {v.checklist.map((ch, i) => (
              <div key={i} style={parseInlineStyle('display:flex;gap:10px;align-items:flex-start;background:#fafafa;border:1px solid #e4e4e7;border-radius:10px;padding:12px 14px;')}>
                <span
                  style={parseInlineStyle(
                    'width:20px;height:20px;border-radius:50%;background:#eaf6ef;color:#1e8a5b;flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;',
                  )}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" style={parseInlineStyle('display:block;')}>
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span style={parseInlineStyle('font-size:13px;line-height:1.45;color:#3f3f46;')}>{ch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 outreach */}
        <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:24px;margin-top:16px;margin-bottom:40px;')}>
          <div style={parseInlineStyle('display:flex;align-items:center;gap:10px;margin-bottom:16px;')}>
            <div
              style={parseInlineStyle(
                'width:26px;height:26px;border-radius:7px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;',
              )}
            >
              4
            </div>
            <h3 style={parseInlineStyle('font-size:17px;font-weight:700;margin:0;')}>Message to the seller</h3>
          </div>
          <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:11px;padding:18px;font-size:14px;line-height:1.65;color:#27272a;white-space:pre-line;')}>
            {v.outreach}
          </div>
          <div style={parseInlineStyle('display:flex;gap:10px;margin-top:16px;')}>
            <button
              onClick={v.doCopy}
              style={parseInlineStyle('flex:1;background:#fff;border:1px solid #d8e2f4;color:#1e3a8a;border-radius:10px;padding:13px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;')}
            >
              {v.copyLabel}
            </button>
            <button style={parseInlineStyle('flex:1;background:#1e3a8a;color:#fff;border:none;border-radius:10px;padding:13px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;')}>
              Send to seller →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
