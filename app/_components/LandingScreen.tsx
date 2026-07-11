import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function LandingScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Landing" style={parseInlineStyle('min-height:calc(100vh - 46px);background:#fff;')}>
      <div style={parseInlineStyle('max-width:960px;margin:0 auto;padding:90px 32px 40px;text-align:center;')}>
        <div
          style={parseInlineStyle(
            'display:inline-flex;align-items:center;gap:8px;background:#eef3fb;border:1px solid #d8e2f4;border-radius:99px;padding:6px 14px;margin-bottom:34px;',
          )}
        >
          <span style={parseInlineStyle('position:relative;width:8px;height:8px;')}>
            <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e3a8a;')}></span>
          </span>
          <span style={parseInlineStyle('font-size:13px;font-weight:600;color:#1e3a8a;')}>Your car-buying agent — works between visits</span>
        </div>
        <h1 style={parseInlineStyle('font-size:50px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0 auto 26px;max-width:820px;')}>
          The right car, at <span style={parseInlineStyle('color:#1e3a8a;')}>the right price</span> — watched until you sign.
        </h1>
        <p style={parseInlineStyle('font-size:19px;line-height:1.5;color:#52525b;max-width:560px;margin:0 auto 36px;')}>
          You don&apos;t need to know a single car model. Answer a few plain questions and your agent handles the rest.
        </p>
        <div style={parseInlineStyle('display:flex;flex-direction:column;align-items:center;gap:12px;margin-bottom:14px;')}>
          <button
            onClick={v.startIntake}
            style={parseInlineStyle(
              'display:inline-flex;align-items:center;gap:10px;background:#1e3a8a;color:#fff;border:none;border-radius:10px;padding:17px 34px;font-size:17px;font-weight:700;font-family:inherit;cursor:pointer;box-shadow:0 2px 10px rgba(30,58,138,.25);',
            )}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={parseInlineStyle('display:block;')}
            >
              <path d="M5 13l1.2-3.6A2 2 0 018.1 8h7.8a2 2 0 011.9 1.4L19 13"></path>
              <path d="M5 13h14v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1z"></path>
              <circle cx="7.5" cy="15.5" r=".6"></circle>
              <circle cx="16.5" cy="15.5" r=".6"></circle>
              <circle cx="17" cy="6" r="3.4"></circle>
              <path d="M19.6 8.6L22 11"></path>
            </svg>
            Get Started
          </button>
          <span style={parseInlineStyle('font-size:13px;color:#71717a;')}>Takes about 2 minutes · No car-model knowledge needed · Free</span>
        </div>
      </div>

      <div style={parseInlineStyle('max-width:960px;margin:0 auto;padding:30px 32px 90px;')}>
        <div style={parseInlineStyle('text-align:center;font-size:12px;font-weight:700;letter-spacing:1.4px;color:#a1a1aa;margin-bottom:26px;')}>HOW IT WORKS</div>
        <div style={parseInlineStyle('display:grid;grid-template-columns:repeat(3,1fr);gap:18px;')}>
          <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;padding:26px;')}>
            <div
              style={parseInlineStyle(
                'width:34px;height:34px;border-radius:9px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;margin-bottom:16px;',
              )}
            >
              1
            </div>
            <div style={parseInlineStyle('font-size:17px;font-weight:700;margin-bottom:7px;')}>Answer questions</div>
            <div style={parseInlineStyle('font-size:14px;line-height:1.5;color:#52525b;')}>
              Tell us your budget, how you&apos;ll use it, and what matters. Plain language, no jargon.
            </div>
          </div>
          <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;padding:26px;')}>
            <div
              style={parseInlineStyle(
                'width:34px;height:34px;border-radius:9px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;margin-bottom:16px;',
              )}
            >
              2
            </div>
            <div style={parseInlineStyle('font-size:17px;font-weight:700;margin-bottom:7px;')}>Agent watches the market</div>
            <div style={parseInlineStyle('font-size:14px;line-height:1.5;color:#52525b;')}>
              It ranks the best models for you and keeps scanning listings and prices — day and night.
            </div>
          </div>
          <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;padding:26px;')}>
            <div
              style={parseInlineStyle(
                'width:34px;height:34px;border-radius:9px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;margin-bottom:16px;',
              )}
            >
              3
            </div>
            <div style={parseInlineStyle('font-size:17px;font-weight:700;margin-bottom:7px;')}>Get a negotiation packet</div>
            <div style={parseInlineStyle('font-size:14px;line-height:1.5;color:#52525b;')}>
              When the deal is right, you get an out-the-door price, a script, and a message ready to send.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
