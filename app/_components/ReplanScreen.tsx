import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function ReplanScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Re-plan" style={parseInlineStyle('min-height:calc(100vh - 46px);')}>
      <div style={parseInlineStyle('max-width:720px;margin:0 auto;padding:40px 32px;')}>
        <div
          style={parseInlineStyle(
            'display:inline-flex;align-items:center;gap:8px;background:#eef3fb;border:1px solid #d8e2f4;border-radius:99px;padding:6px 14px;margin-bottom:22px;',
          )}
        >
          <span style={parseInlineStyle('width:8px;height:8px;border-radius:50%;background:#1e3a8a;')}></span>
          <span style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e3a8a;')}>Notification · 2 hours ago</span>
        </div>
        <h1 style={parseInlineStyle('font-size:34px;font-weight:800;letter-spacing:-.9px;margin:0 0 8px;')}>Your plan changed.</h1>
        <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 26px;')}>
          Your agent adjusted its strategy based on this week&apos;s market. Here&apos;s the plain version.
        </p>

        <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:26px;')}>
          <p style={parseInlineStyle('font-size:17px;line-height:1.65;color:#27272a;margin:0 0 18px;')}>
            Used prices on your shortlist <strong>rose about 8% this week</strong>. Because of that, a{' '}
            <span
              style={parseInlineStyle('border-bottom:1px dotted #1e3a8a;color:#1e3a8a;font-weight:600;cursor:help;')}
              title="Certified pre-owned: a used car inspected and warranty-backed by the manufacturer's dealer network."
            >
              certified pre-owned (CPO)
            </span>{' '}
            car with the manufacturer&apos;s own low-rate financing now actually beats the private-party deal we were targeting — even though the sticker looks higher.
          </p>
          {v.showNotes && (
            <div style={parseInlineStyle('background:#fffbeb;border:1px solid #f3e3a3;border-left:3px solid #d4a72c;border-radius:8px;padding:11px 14px;margin-bottom:18px;')}>
              <span style={parseInlineStyle('font-size:10px;font-weight:700;letter-spacing:.8px;color:#a8801a;display:block;margin-bottom:3px;')}>INLINE TERM</span>
              <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#52525b;')}>
                Any term that might be unfamiliar (like &quot;certified pre-owned&quot;) gets a dotted underline and a hover definition — no jargon left unexplained.
              </span>
            </div>
          )}

          <div style={parseInlineStyle('display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:6px;')}>
            <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:11px;padding:18px;')}>
              <div style={parseInlineStyle('font-size:11px;font-weight:700;letter-spacing:.5px;color:#a1a1aa;margin-bottom:10px;')}>BEFORE</div>
              <div style={parseInlineStyle('font-size:15px;font-weight:700;margin-bottom:4px;')}>Private-party used</div>
              <div style={parseInlineStyle('font-size:13px;color:#71717a;line-height:1.5;')}>Lower sticker, but you finance at ~9% through a bank and get no warranty.</div>
              <div style={parseInlineStyle('font-size:22px;font-weight:800;color:#a1a1aa;margin-top:12px;')}>~$455/mo</div>
            </div>
            <div style={parseInlineStyle('background:#eef3fb;border:1px solid #c9d6ef;border-radius:11px;padding:18px;')}>
              <div style={parseInlineStyle('font-size:11px;font-weight:700;letter-spacing:.5px;color:#1e3a8a;margin-bottom:10px;')}>NOW RECOMMENDED</div>
              <div style={parseInlineStyle('font-size:15px;font-weight:700;margin-bottom:4px;')}>Certified pre-owned</div>
              <div style={parseInlineStyle('font-size:13px;color:#52525b;line-height:1.5;')}>Higher sticker, but 3.9% maker financing + warranty wins on total cost.</div>
              <div style={parseInlineStyle('font-size:22px;font-weight:800;color:#1e3a8a;margin-top:12px;')}>~$431/mo</div>
            </div>
          </div>

          <button
            onClick={v.goShortlist}
            style={parseInlineStyle(
              'margin-top:22px;width:100%;background:#1e3a8a;color:#fff;border:none;border-radius:11px;padding:16px;font-size:16px;font-weight:700;font-family:inherit;cursor:pointer;',
            )}
          >
            See updated shortlist →
          </button>
        </div>
      </div>
    </div>
  );
}
