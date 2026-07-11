import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function ComponentsScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Components" style={parseInlineStyle('min-height:calc(100vh - 46px);')}>
      <div style={parseInlineStyle('max-width:900px;margin:0 auto;padding:36px 32px;')}>
        <h1 style={parseInlineStyle('font-size:26px;font-weight:800;letter-spacing:-.6px;margin:0 0 6px;')}>Reusable components</h1>
        <p style={parseInlineStyle('font-size:15px;color:#71717a;margin:0 0 30px;')}>Defined once, used across every screen. Grayscale base + one trust accent (deep blue).</p>
        <div style={parseInlineStyle('display:grid;grid-template-columns:1fr 1fr;gap:18px;')}>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>FIT SCORE BADGE</div>
            <div style={parseInlineStyle('display:flex;gap:12px;align-items:center;')}>
              <div style={parseInlineStyle('width:48px;height:48px;border-radius:12px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;')}>
                92
              </div>
              <div style={parseInlineStyle('width:48px;height:48px;border-radius:12px;background:#dbe4f5;color:#1e3a8a;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;')}>
                81
              </div>
              <div style={parseInlineStyle('width:48px;height:48px;border-radius:12px;background:#e4e4e7;color:#3f3f46;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;')}>
                68
              </div>
            </div>
          </div>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>DEAL RATING PILL</div>
            <div style={parseInlineStyle('display:flex;gap:10px;flex-wrap:wrap;')}>
              <span style={parseInlineStyle('background:#eaf6ef;color:#1e8a5b;border:1px solid #bfe3cf;border-radius:99px;padding:5px 12px;font-size:13px;font-weight:700;')}>Good deal</span>
              <span style={parseInlineStyle('background:#f4f4f5;color:#52525b;border:1px solid #e4e4e7;border-radius:99px;padding:5px 12px;font-size:13px;font-weight:700;')}>Fair price</span>
              <span style={parseInlineStyle('background:#fbedea;color:#b4533a;border:1px solid #f0c8bd;border-radius:99px;padding:5px 12px;font-size:13px;font-weight:700;')}>Overpriced</span>
            </div>
          </div>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>AGENT-STATUS INDICATOR</div>
            <div style={parseInlineStyle('display:flex;align-items:center;gap:8px;')}>
              <span style={parseInlineStyle('position:relative;width:9px;height:9px;')}>
                <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e8a5b;')}></span>
                <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e8a5b;animation:lapulse 2.2s ease-out infinite;')}></span>
              </span>
              <span style={parseInlineStyle('font-size:14px;font-weight:700;color:#1e8a5b;')}>Agent is watching</span>
            </div>
            <div style={parseInlineStyle('font-size:12px;color:#71717a;margin-top:6px;')}>Last scanned 6 min ago</div>
          </div>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>&quot;WHY THIS CAR?&quot; EXPANDABLE</div>
            <button
              onClick={v.toggleDemo}
              style={parseInlineStyle(
                'width:100%;text-align:left;background:#fafafa;border:1px solid #e4e4e7;border-radius:9px;padding:11px 14px;font-size:13px;font-weight:600;color:#1e3a8a;cursor:pointer;font-family:inherit;display:flex;justify-content:space-between;',
              )}
            >
              Why this car?<span style={parseInlineStyle('color:#a1a1aa;')}>{v.demoCaret}</span>
            </button>
            {v.demoOpen && (
              <div style={parseInlineStyle('font-size:13px;line-height:1.55;color:#3f3f46;margin-top:10px;')}>Written like a friend explaining — never a spec dump.</div>
            )}
          </div>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;grid-column:span 2;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>PLAIN-ENGLISH EXPLANATION CARD</div>
            <div style={parseInlineStyle('background:#eef3fb;border:1px solid #c9d6ef;border-radius:11px;padding:16px 18px;font-size:14px;line-height:1.6;color:#27272a;')}>
              Used prices on your shortlist rose about 8% this week, so a certified pre-owned car with maker financing now beats the deal we were targeting — here&apos;s the math.
            </div>
          </div>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>SAVE / WATCH TOGGLE</div>
            <div style={parseInlineStyle('display:flex;gap:14px;align-items:center;flex-wrap:wrap;')}>
              <span style={parseInlineStyle('font-size:26px;line-height:1;color:#a1a1aa;')}>♡</span>
              <span style={parseInlineStyle('color:#a1a1aa;')}>→</span>
              <span style={parseInlineStyle('font-size:26px;line-height:1;color:#1e3a8a;')}>♥</span>
              <span
                style={parseInlineStyle(
                  'display:inline-flex;align-items:center;gap:6px;background:#eef3fb;border:1px solid #d8e2f4;border-radius:99px;padding:3px 10px;font-size:11px;font-weight:700;color:#1e3a8a;',
                )}
              >
                <span style={parseInlineStyle('width:7px;height:7px;border-radius:50%;background:#1e3a8a;')}></span>
                Watching closely
              </span>
            </div>
            <div style={parseInlineStyle('font-size:12px;color:#71717a;margin-top:12px;line-height:1.45;')}>
              Outline heart saves &amp; watches a car; filled = saved. Saved cards get the &quot;Watching closely&quot; chip.
            </div>
          </div>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>COMPARE CHECKBOX</div>
            <div style={parseInlineStyle('display:flex;gap:16px;align-items:center;flex-wrap:wrap;')}>
              <span style={parseInlineStyle('display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#71717a;')}>
                <span style={parseInlineStyle('width:18px;height:18px;border-radius:5px;border:2px solid #c9d1da;background:#fff;')}></span>
                Compare
              </span>
              <span style={parseInlineStyle('display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#1e3a8a;')}>
                <span
                  style={parseInlineStyle(
                    'width:18px;height:18px;border-radius:5px;border:2px solid #1e3a8a;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;',
                  )}
                >
                  ✓
                </span>
                Compare
              </span>
            </div>
            <div style={parseInlineStyle('font-size:12px;color:#71717a;margin-top:12px;line-height:1.45;')}>Select up to 3 cars; a sticky bar appears with a Compare action.</div>
          </div>
          <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;grid-column:span 2;')}>
            <div style={parseInlineStyle('font-size:12px;font-weight:700;color:#a1a1aa;letter-spacing:.5px;margin-bottom:16px;')}>&quot;IF IT WERE ME&quot; RECOMMENDATION CARD</div>
            <div style={parseInlineStyle('background:#eef3fb;border:1px solid #c9d6ef;border-left:4px solid #1e3a8a;border-radius:11px;padding:16px 18px;')}>
              <div style={parseInlineStyle('font-size:11px;font-weight:800;letter-spacing:.6px;color:#1e3a8a;margin-bottom:6px;')}>IF IT WERE ME:</div>
              <div style={parseInlineStyle('font-size:14px;line-height:1.6;color:#27272a;')}>
                The CR-V — you weighted reliability highest, and it&apos;s the only one that stays under your walk-away number. Closes the compare screen with a single clear pick.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
