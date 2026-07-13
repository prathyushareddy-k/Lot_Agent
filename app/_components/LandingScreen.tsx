import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function LandingScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Landing" style={parseInlineStyle('min-height:calc(100vh - 60px);background:#fff;')}>
      {/* Hero */}
      <div style={parseInlineStyle('max-width:960px;margin:0 auto;padding:80px 32px 48px;text-align:center;')}>
        <div
          style={parseInlineStyle(
            'display:inline-flex;align-items:center;gap:8px;background:#E8F0FE;border:1px solid #BBCFFC;border-radius:999px;padding:6px 16px;margin-bottom:32px;',
          )}
        >
          <span style={parseInlineStyle('position:relative;display:flex;width:8px;height:8px;')}>
            <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#2563EB;animation:lapulse 2s ease-out infinite;')}></span>
            <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#2563EB;')}></span>
          </span>
          <span style={parseInlineStyle('font-size:13px;font-weight:600;color:#2563EB;')}>Your car-buying agent — works between visits</span>
        </div>
        <h1 style={parseInlineStyle('font:700 52px/1.06 var(--font-serif,serif);letter-spacing:-1.5px;margin:0 auto 24px;max-width:820px;color:#1C1A17;')}>
          The right car, at <span style={parseInlineStyle('color:#0F766E;')}>the right price</span> — watched until you sign.
        </h1>
        <p style={parseInlineStyle('font-size:19px;line-height:1.55;color:#6B6459;max-width:520px;margin:0 auto 36px;')}>
          Answer a few plain questions. Your agent scans 2,400+ listings, ranks them against your priorities, and judges every deal — day and night.
        </p>
        <div style={parseInlineStyle('display:flex;flex-direction:column;align-items:center;gap:10px;')}>
          <button
            onClick={v.startIntake}
            style={parseInlineStyle(
              'display:inline-flex;align-items:center;gap:10px;background:#0F766E;color:#fff;border:none;border-radius:12px;padding:18px 36px;font:700 17px/1 var(--font-serif,serif);cursor:pointer;box-shadow:0 4px 12px rgba(28,26,23,0.10);',
            )}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l1.2-3.6A2 2 0 018.1 8h7.8a2 2 0 011.9 1.4L19 13"></path>
              <path d="M5 13h14v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1z"></path>
              <circle cx="7.5" cy="16.5" r=".7"></circle>
              <circle cx="16.5" cy="16.5" r=".7"></circle>
            </svg>
            Get started — takes 2 minutes
          </button>
          <span style={parseInlineStyle('font-size:13px;color:#9C9189;')}>No car-model knowledge needed · Free</span>
        </div>
      </div>

      {/* Persona cards */}
      <div style={parseInlineStyle('max-width:960px;margin:0 auto;padding:0 32px 60px;')}>
        <div style={parseInlineStyle('font-size:11px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#9C9189;text-align:center;margin-bottom:20px;')}>
          Built for every kind of buyer
        </div>
        <div style={parseInlineStyle('display:grid;grid-template-columns:repeat(4,1fr);gap:14px;')}>
          <div style={parseInlineStyle('background:#FBF8F3;border:1px solid #E7E2D9;border-radius:12px;padding:20px;')}>
            <div style={parseInlineStyle('width:36px;height:36px;border-radius:8px;background:#E6F5F2;display:flex;align-items:center;justify-content:center;margin-bottom:12px;')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div style={parseInlineStyle('font:700 14px/1.3 var(--font-serif,serif);color:#1C1A17;margin-bottom:6px;')}>First-time buyer</div>
            <div style={parseInlineStyle('font-size:13px;line-height:1.5;color:#6B6459;')}>I&apos;ll explain every term. You&apos;ll never feel pressured or confused.</div>
          </div>
          <div style={parseInlineStyle('background:#FBF8F3;border:1px solid #E7E2D9;border-radius:12px;padding:20px;')}>
            <div style={parseInlineStyle('width:36px;height:36px;border-radius:8px;background:#E6F5F2;display:flex;align-items:center;justify-content:center;margin-bottom:12px;')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <path d="M2 10h20"></path>
              </svg>
            </div>
            <div style={parseInlineStyle('font:700 14px/1.3 var(--font-serif,serif);color:#1C1A17;margin-bottom:6px;')}>Budget-driven commuter</div>
            <div style={parseInlineStyle('font-size:13px;line-height:1.5;color:#6B6459;')}>I track total monthly cost — payment, fuel, insurance — not just the sticker.</div>
          </div>
          <div style={parseInlineStyle('background:#FBF8F3;border:1px solid #E7E2D9;border-radius:12px;padding:20px;')}>
            <div style={parseInlineStyle('width:36px;height:36px;border-radius:8px;background:#E6F5F2;display:flex;align-items:center;justify-content:center;margin-bottom:12px;')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                <path d="M16 3.13a4 4 0 010 7.75"></path>
              </svg>
            </div>
            <div style={parseInlineStyle('font:700 14px/1.3 var(--font-serif,serif);color:#1C1A17;margin-bottom:6px;')}>Family upgrader</div>
            <div style={parseInlineStyle('font-size:13px;line-height:1.5;color:#6B6459;')}>Set your must-haves once. I&apos;ll only show cars that meet every one.</div>
          </div>
          <div style={parseInlineStyle('background:#FBF8F3;border:1px solid #E7E2D9;border-radius:12px;padding:20px;')}>
            <div style={parseInlineStyle('width:36px;height:36px;border-radius:8px;background:#E6F5F2;display:flex;align-items:center;justify-content:center;margin-bottom:12px;')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div style={parseInlineStyle('font:700 14px/1.3 var(--font-serif,serif);color:#1C1A17;margin-bottom:6px;')}>Deal-skeptical negotiator</div>
            <div style={parseInlineStyle('font-size:13px;line-height:1.5;color:#6B6459;')}>Here are the comps. Here&apos;s your leverage. Here&apos;s the word-for-word script.</div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div style={parseInlineStyle('background:#FBF8F3;border-top:1px solid #E7E2D9;padding:60px 32px;')}>
        <div style={parseInlineStyle('max-width:960px;margin:0 auto;')}>
          <div style={parseInlineStyle('font-size:11px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#9C9189;text-align:center;margin-bottom:28px;')}>
            How it works
          </div>
          <div style={parseInlineStyle('display:grid;grid-template-columns:repeat(3,1fr);gap:20px;')}>
            <div style={parseInlineStyle('background:#fff;border:1px solid #E7E2D9;border-radius:12px;padding:28px;')}>
              <div
                style={parseInlineStyle(
                  'width:36px;height:36px;border-radius:8px;background:#0F766E;color:#fff;display:flex;align-items:center;justify-content:center;font:700 16px/1 var(--font-serif,serif);margin-bottom:18px;',
                )}
              >
                1
              </div>
              <div style={parseInlineStyle('font:700 17px/1.3 var(--font-serif,serif);color:#1C1A17;margin-bottom:8px;')}>Answer plain questions</div>
              <div style={parseInlineStyle('font-size:14px;line-height:1.5;color:#6B6459;')}>
                Tell me your budget, how you&apos;ll use it, and your must-haves. No jargon — I&apos;ll define anything that sounds unclear.
              </div>
            </div>
            <div style={parseInlineStyle('background:#fff;border:1px solid #E7E2D9;border-radius:12px;padding:28px;')}>
              <div
                style={parseInlineStyle(
                  'width:36px;height:36px;border-radius:8px;background:#0F766E;color:#fff;display:flex;align-items:center;justify-content:center;font:700 16px/1 var(--font-serif,serif);margin-bottom:18px;',
                )}
              >
                2
              </div>
              <div style={parseInlineStyle('font:700 17px/1.3 var(--font-serif,serif);color:#1C1A17;margin-bottom:8px;')}>Agent watches the market</div>
              <div style={parseInlineStyle('font-size:14px;line-height:1.5;color:#6B6459;')}>
                I rank the best models for you, scan listings continuously, and alert you the moment a deal improves or a better match appears.
              </div>
            </div>
            <div style={parseInlineStyle('background:#fff;border:1px solid #E7E2D9;border-radius:12px;padding:28px;')}>
              <div
                style={parseInlineStyle(
                  'width:36px;height:36px;border-radius:8px;background:#0F766E;color:#fff;display:flex;align-items:center;justify-content:center;font:700 16px/1 var(--font-serif,serif);margin-bottom:18px;',
                )}
              >
                3
              </div>
              <div style={parseInlineStyle('font:700 17px/1.3 var(--font-serif,serif);color:#1C1A17;margin-bottom:8px;')}>Walk in with a script</div>
              <div style={parseInlineStyle('font-size:14px;line-height:1.5;color:#6B6459;')}>
                When the deal is right, you get the out-the-door price, a negotiation script, and a message ready to send — before you set foot on the lot.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
