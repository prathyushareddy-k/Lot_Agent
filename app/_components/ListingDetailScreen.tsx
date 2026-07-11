import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';
import ImageSlot from './ImageSlot';

export default function ListingDetailScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Listing Detail" style={parseInlineStyle('min-height:calc(100vh - 46px);')}>
      <div style={parseInlineStyle('max-width:980px;margin:0 auto;padding:28px 32px;')}>
        <button
          onClick={v.goShortlist}
          style={parseInlineStyle('background:none;border:none;color:#71717a;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;margin-bottom:16px;')}
        >
          ← Back to your Top pickst
        </button>
        <div style={parseInlineStyle('display:grid;grid-template-columns:1.3fr 1fr;gap:24px;align-items:start;')}>
          {/* left */}
          <div>
            <div style={parseInlineStyle('width:100%;height:300px;border-radius:14px;overflow:hidden;position:relative;margin-bottom:16px;')}>
              <ImageSlot src={v.detailSlotSrc} alt="Drop a 2021 Honda CR-V EX photo" />
            </div>
            <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:flex-start;gap:12px;')}>
              <div>
                <h1 style={parseInlineStyle('font-size:28px;font-weight:800;letter-spacing:-.7px;margin:0 0 4px;')}>2021 Honda CR-V EX</h1>
                <div style={parseInlineStyle('font-size:14px;color:#71717a;margin-bottom:16px;')}>38,400 mi · AWD · 14 mi away · CarPlay · 1 owner · Peninsula Honda</div>
              </div>
              <button onClick={v.onDetailSave} style={parseInlineStyle(v.detailHeartStyle)}>
                {v.detailHeartGlyph}
              </button>
            </div>
            {v.detailJustSaved && (
              <div style={parseInlineStyle('background:#eef3fb;border:1px solid #d8e2f4;border-radius:9px;padding:9px 13px;font-size:12.5px;font-weight:600;color:#1e3a8a;margin-bottom:18px;')}>
                Saved — I&apos;ll watch this one closely and ping you on price drops.
              </div>
            )}

            <h3 style={parseInlineStyle('font-size:15px;font-weight:700;margin:0 0 14px;')}>Fit Score breakdown</h3>
            <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:20px;')}>
              <div style={parseInlineStyle('display:flex;align-items:center;gap:14px;margin-bottom:18px;')}>
                <div
                  style={parseInlineStyle(
                    'width:56px;height:56px;border-radius:13px;background:#1e3a8a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;',
                  )}
                >
                  92
                </div>
                <div>
                  <div style={parseInlineStyle('font-size:15px;font-weight:700;')}>Strong match for your brief</div>
                  <div style={parseInlineStyle('font-size:13px;color:#71717a;')}>High on the things you weighted most.</div>
                </div>
              </div>
              {v.fitBreak.map((f, i) => (
                <Fragment key={i}>
                  <div style={parseInlineStyle('margin-bottom:14px;')}>
                    <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:5px;')}>
                      <span style={parseInlineStyle('font-size:13px;font-weight:600;')}>{f.label}</span>
                      <span style={parseInlineStyle('font-size:12px;color:#71717a;')}>{f.note}</span>
                    </div>
                    <div style={parseInlineStyle('height:7px;background:#f0f0f1;border-radius:99px;overflow:hidden;')}>
                      <div style={parseInlineStyle(`height:100%;border-radius:99px;width:${f.pct};background:${f.color};`)}></div>
                    </div>
                  </div>
                </Fragment>
              ))}
              <div style={parseInlineStyle('border-top:1px dashed #e4e4e7;margin-top:6px;padding-top:14px;font-size:13px;line-height:1.5;color:#52525b;')}>
                <strong style={parseInlineStyle('color:#27272a;')}>Honest tradeoff:</strong> rock-solid reliability and resale, but fuel will run about <strong>$200/mo</strong> — roughly
                $40 over your stated target. The agent kept it on top because you weighted reliability highest.
              </div>
            </div>

            <h3 style={parseInlineStyle('font-size:15px;font-weight:700;margin:26px 0 14px;')}>Specs, safety &amp; history</h3>
            <div style={parseInlineStyle('display:grid;grid-template-columns:1fr 1fr;gap:10px;')}>
              {v.specs.map((sItem, i) => (
                <Fragment key={i}>
                  <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:10px;padding:13px 15px;')}>
                    <div style={parseInlineStyle('font-size:11px;color:#a1a1aa;font-weight:600;text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px;')}>{sItem.k}</div>
                    <div style={parseInlineStyle('font-size:14px;font-weight:600;color:#27272a;')}>{sItem.v}</div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          {/* right: deal judge + cta */}
          <div style={parseInlineStyle('position:sticky;top:88px;')}>
            <div style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:22px;')}>
              <div
                style={parseInlineStyle(
                  'display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid #f0f0f1;',
                )}
              >
                <div>
                  <div style={parseInlineStyle('font-size:11px;font-weight:700;letter-spacing:.5px;color:#a1a1aa;margin-bottom:4px;')}>EST. ALL-IN MONTHLY</div>
                  <div style={parseInlineStyle('font-size:34px;font-weight:800;color:#18181b;letter-spacing:-1px;line-height:1;')}>
                    $430<span style={parseInlineStyle('font-size:16px;font-weight:600;color:#a1a1aa;letter-spacing:0;')}>/mo</span>
                  </div>
                  <div style={parseInlineStyle('font-size:12px;color:#a1a1aa;margin-top:5px;')}>$26,860 out the door · $23,900 asking + tax &amp; fees</div>
                </div>
              </div>
              <div style={parseInlineStyle('display:flex;align-items:center;gap:8px;margin-bottom:14px;')}>
                <span style={parseInlineStyle('font-size:12px;font-weight:700;letter-spacing:.6px;color:#a1a1aa;')}>DEAL JUDGE</span>
              </div>
              <div
                style={parseInlineStyle(
                  'display:inline-flex;align-items:center;gap:8px;background:#eaf6ef;border:1px solid #bfe3cf;border-radius:9px;padding:9px 13px;margin-bottom:16px;',
                )}
              >
                <span style={parseInlineStyle('font-size:15px;font-weight:800;color:#1e8a5b;')}>Good deal</span>
              </div>
              <div style={parseInlineStyle('font-size:14px;line-height:1.6;color:#3f3f46;margin-bottom:18px;')}>
                Asking <strong>$23,900</strong> sits <strong>$1,100 under</strong> the average of 12 comparable CR-V EX sales nearby in the last 30 days.
              </div>
              <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:11px;padding:16px;margin-bottom:16px;')}>
                <div style={parseInlineStyle('font-size:12px;color:#71717a;font-weight:600;margin-bottom:4px;')}>Estimated negotiation headroom</div>
                <div style={parseInlineStyle('font-size:30px;font-weight:800;color:#1e3a8a;letter-spacing:-.5px;')}>$700–$1,200</div>
                <div style={parseInlineStyle('font-size:12px;color:#a1a1aa;margin-top:2px;')}>below asking, based on days-on-lot &amp; comps</div>
              </div>
              <button
                onClick={v.goPacket}
                style={parseInlineStyle(
                  'width:100%;background:#1e3a8a;color:#fff;border:none;border-radius:11px;padding:16px;font-size:15px;font-weight:700;font-family:inherit;cursor:pointer;box-shadow:0 2px 10px rgba(30,58,138,.25);',
                )}
              >
                Make this my finalist → build deal packet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
