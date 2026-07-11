import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';
import ImageSlot from './ImageSlot';

export default function ShortlistScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Shortlist" style={parseInlineStyle('min-height:calc(100vh - 46px);')}>
      <div style={parseInlineStyle('max-width:1440px;margin:0 auto;padding:28px 24px;display:grid;grid-template-columns:248px 1fr;gap:24px;align-items:start;')}>
        {/* brief rail */}
        <aside style={parseInlineStyle('position:sticky;top:88px;background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:20px;')}>
          <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;')}>
            <span style={parseInlineStyle('font-size:12px;font-weight:700;letter-spacing:.6px;color:#a1a1aa;')}>YOUR BRIEF</span>
            <button onClick={v.goIntake} style={parseInlineStyle('background:none;border:none;color:#1e3a8a;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;')}>
              Edit
            </button>
          </div>
          {v.briefRows.map((b, i) => (
            <Fragment key={i}>
              <div style={parseInlineStyle('margin-bottom:14px;')}>
                <div style={parseInlineStyle('font-size:11px;color:#a1a1aa;font-weight:600;text-transform:uppercase;letter-spacing:.4px;margin-bottom:2px;')}>{b.k}</div>
                <div style={parseInlineStyle('font-size:14px;font-weight:600;color:#27272a;')}>{b.v}</div>
              </div>
            </Fragment>
          ))}
          <div style={parseInlineStyle('border-top:1px solid #f0f0f1;margin-top:6px;padding-top:16px;')}>
            <div style={parseInlineStyle('display:flex;align-items:center;gap:8px;margin-bottom:6px;')}>
              <span style={parseInlineStyle('position:relative;width:8px;height:8px;')}>
                <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e8a5b;')}></span>
                <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e8a5b;animation:lapulse 2.2s ease-out infinite;')}></span>
              </span>
              <span style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e8a5b;')}>Agent is watching</span>
            </div>
            <div style={parseInlineStyle('font-size:12px;color:#71717a;line-height:1.4;')}>Last scanned 6 min ago · 214 listings in range</div>
          </div>
        </aside>

        {/* main */}
        <div>
          <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:6px;flex-wrap:wrap;gap:10px;')}>
            <div>
              <h1 style={parseInlineStyle('font-size:26px;font-weight:800;letter-spacing:-.6px;margin:0;')}>Your top picks</h1>
              <p style={parseInlineStyle('font-size:14px;color:#71717a;margin:5px 0 0;')}>
                Here are your top picks — {v.allCount} cars matched to your brief and ranked by fit, so you don&apos;t have to sift.
              </p>
            </div>
            <div style={parseInlineStyle('display:flex;align-items:center;gap:10px;flex-shrink:0;')}>
              <button
                onClick={v.goPackets}
                style={parseInlineStyle(
                  'display:inline-flex;align-items:center;gap:7px;background:#fff;border:1px solid #e4e4e7;border-radius:9px;padding:9px 14px;font-size:13px;font-weight:600;font-family:inherit;color:#52525b;cursor:pointer;',
                )}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={parseInlineStyle('display:block;')}
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                  <path d="M8 13h8"></path>
                  <path d="M8 17h8"></path>
                </svg>
                Deal packets ({v.packetCount})
              </button>
              <label style={parseInlineStyle('position:relative;display:inline-flex;align-items:center;')}>
                <select value={v.sortBy} onChange={v.onSort} style={parseInlineStyle(v.sortSelectStyle)}>
                  {v.sortOpts.map((o, i) => (
                    <option key={i} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <span style={parseInlineStyle('position:absolute;right:11px;pointer-events:none;color:#a1a1aa;font-size:10px;')}>▾</span>
              </label>
            </div>
          </div>
          <div style={parseInlineStyle('display:flex;align-items:center;gap:12px;margin-top:14px;flex-wrap:wrap;')}>
            <div style={parseInlineStyle('display:inline-flex;background:#f0f0f1;border-radius:10px;padding:4px;')}>
              <button onClick={v.onFilterAll} style={parseInlineStyle(v.filterAllStyle)}>
                All ({v.allCount})
              </button>
              <button onClick={v.onFilterSaved} style={parseInlineStyle(v.filterSavedStyle)}>
                Saved ({v.savedCount})
              </button>
            </div>
            <div style={parseInlineStyle('display:flex;align-items:center;gap:8px;')}>
              <label style={parseInlineStyle('position:relative;display:inline-flex;align-items:center;')}>
                <select value={v.conditionFilter} onChange={v.onConditionFilter} style={parseInlineStyle(v.conditionSelectStyle)}>
                  {v.conditionOpts.map((o, i) => (
                    <option key={i} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <span style={parseInlineStyle('position:absolute;right:11px;pointer-events:none;color:#a1a1aa;font-size:10px;')}>▾</span>
              </label>
              <label style={parseInlineStyle('position:relative;display:inline-flex;align-items:center;')}>
                <select value={v.fuelFilter} onChange={v.onFuelFilter} style={parseInlineStyle(v.fuelSelectStyle)}>
                  {v.fuelFilterOpts.map((o, i) => (
                    <option key={i} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <span style={parseInlineStyle('position:absolute;right:11px;pointer-events:none;color:#a1a1aa;font-size:10px;')}>▾</span>
              </label>
              {v.filtersActive && (
                <button onClick={v.onClearFilters} style={parseInlineStyle('background:none;border:none;color:#1e3a8a;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;')}>
                  Clear
                </button>
              )}
            </div>
          </div>

          {v.showNotes && (
            <div style={parseInlineStyle('margin:16px 0;background:#fffbeb;border:1px solid #f3e3a3;border-left:3px solid #d4a72c;border-radius:8px;padding:13px 15px;')}>
              <span style={parseInlineStyle('font-size:10px;font-weight:700;letter-spacing:.8px;color:#a8801a;display:block;margin-bottom:3px;')}>CONTINUOUS MONITORING</span>
              <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#52525b;')}>
                The &quot;Agent is watching&quot; status and &quot;Last scanned&quot; timestamp are the core promise — the product keeps working between visits, not just when you&apos;re here.
              </span>
            </div>
          )}

          <div style={parseInlineStyle('display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:18px;align-items:stretch;grid-auto-rows:1fr;')}>
            {v.savedEmpty && (
              <div style={parseInlineStyle('grid-column:1 / -1;text-align:center;background:#fff;border:1px dashed #d4d4d8;border-radius:14px;padding:46px 28px;')}>
                <div style={parseInlineStyle('font-size:30px;line-height:1;margin-bottom:12px;color:#a1a1aa;')}>♡</div>
                <div style={parseInlineStyle('font-size:17px;font-weight:700;margin-bottom:6px;')}>Nothing saved yet.</div>
                <p style={parseInlineStyle('font-size:14px;color:#71717a;line-height:1.55;max-width:360px;margin:0 auto;')}>
                  Tap the heart on any car and I&apos;ll keep an eye on it for you between visits — and ping you the moment the price moves.
                </p>
              </div>
            )}
            {v.filterEmpty && (
              <div style={parseInlineStyle('grid-column:1 / -1;text-align:center;background:#fff;border:1px dashed #d4d4d8;border-radius:14px;padding:46px 28px;')}>
                <div style={parseInlineStyle('font-size:17px;font-weight:700;margin-bottom:6px;')}>No cars match these filters.</div>
                <p style={parseInlineStyle('font-size:14px;color:#71717a;line-height:1.55;max-width:360px;margin:0 auto 16px;')}>
                  Try widening the condition or fuel type — your agent keeps scanning for more as they appear.
                </p>
                <button
                  onClick={v.onClearFilters}
                  style={parseInlineStyle('background:#1e3a8a;color:#fff;border:none;border-radius:9px;padding:10px 18px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;')}
                >
                  Clear filters
                </button>
              </div>
            )}
            {v.shortlistCars.map(c => (
              <div key={c.id} style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:14px;overflow:hidden;display:flex;flex-direction:column;')}>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;padding:11px 16px 11px 18px;border-bottom:1px solid #f0f0f1;')}>
                  <button onClick={c.onCompare} style={parseInlineStyle(c.compareStyle)}>
                    <span style={parseInlineStyle(c.compareBoxStyle)}>{c.compareMark}</span>
                    Compare
                  </button>
                  <div style={parseInlineStyle('display:flex;align-items:center;gap:10px;')}>
                    {c.saved && (
                      <span
                        style={parseInlineStyle(
                          'display:inline-flex;align-items:center;gap:6px;background:#eef3fb;border:1px solid #d8e2f4;border-radius:99px;padding:3px 10px;font-size:11px;font-weight:700;color:#1e3a8a;',
                        )}
                      >
                        <span style={parseInlineStyle('position:relative;width:7px;height:7px;')}>
                          <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e3a8a;')}></span>
                          <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#1e3a8a;animation:lapulse 2.2s ease-out infinite;')}></span>
                        </span>
                        Watching closely
                      </span>
                    )}
                    <button onClick={c.onSave} style={parseInlineStyle(c.heartStyle)}>
                      {c.heartGlyph}
                    </button>
                  </div>
                </div>
                {c.showSavedConfirm && (
                  <div style={parseInlineStyle('background:#eef3fb;border-bottom:1px solid #d8e2f4;padding:9px 18px;font-size:12.5px;font-weight:600;color:#1e3a8a;')}>
                    Saved — I&apos;ll watch this one closely and ping you on price drops.
                  </div>
                )}
                <div onClick={v.goDetail} style={parseInlineStyle('display:flex;flex-direction:column;gap:16px;padding:18px;flex:1;cursor:pointer;')}>
                  <div style={parseInlineStyle('width:100%;height:150px;border-radius:10px;flex-shrink:0;overflow:hidden;position:relative;')}>
                    <ImageSlot src={c.slotSrc} alt={c.slotPlaceholder} />
                  </div>
                  <div style={parseInlineStyle('flex:1;min-width:0;')}>
                    <div style={parseInlineStyle('display:flex;justify-content:space-between;gap:12px;')}>
                      <div>
                        <div style={parseInlineStyle('font-size:18px;font-weight:700;')}>{c.name}</div>
                        <div style={parseInlineStyle('font-size:13px;color:#71717a;margin-top:1px;')}>
                          {c.miles} · {c.distance}
                        </div>
                      </div>
                      <div style={parseInlineStyle('text-align:center;flex-shrink:0;')}>
                        <div style={parseInlineStyle(c.fitStyle)}>{c.fit}</div>
                        <div style={parseInlineStyle('font-size:10px;color:#a1a1aa;font-weight:600;margin-top:3px;letter-spacing:.4px;')}>FIT SCORE</div>
                      </div>
                    </div>
                    <div style={parseInlineStyle('display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap;')}>
                      <span style={parseInlineStyle(c.dealStyle)}>{c.dealLabel}</span>
                      <span style={parseInlineStyle('font-size:20px;font-weight:800;color:#18181b;letter-spacing:-.3px;')}>{c.tco}</span>
                      <span style={parseInlineStyle('color:#a1a1aa;font-size:12px;font-weight:600;')}>est. all-in / mo</span>
                      <span style={parseInlineStyle('width:4px;height:4px;border-radius:50%;background:#d4d4d8;')}></span>
                      <span style={parseInlineStyle('font-size:13px;color:#52525b;')}>
                        <strong>{c.otd}</strong> <span style={parseInlineStyle('color:#a1a1aa;')}>out the door</span>
                      </span>
                    </div>
                    <div style={parseInlineStyle('display:flex;align-items:center;gap:8px;margin-top:10px;flex-wrap:wrap;')}>
                      <span
                        style={parseInlineStyle(
                          'background:#f4f4f5;border:1px solid #e4e4e7;border-radius:6px;padding:3px 9px 3px 8px;font-size:12px;font-weight:600;color:#52525b;display:inline-flex;align-items:center;gap:5px;',
                        )}
                      >
                        {c.conditionIcon}
                        {c.condition}
                      </span>
                      <span
                        style={parseInlineStyle(
                          'background:#f4f4f5;border:1px solid #e4e4e7;border-radius:6px;padding:3px 9px 3px 8px;font-size:12px;font-weight:600;color:#52525b;display:inline-flex;align-items:center;gap:5px;',
                        )}
                      >
                        {c.fuelIcon}
                        {c.fuelType}
                      </span>
                      <span style={parseInlineStyle('font-size:12px;color:#a1a1aa;')}>{c.dealer}</span>
                    </div>
                    <div style={parseInlineStyle('display:flex;gap:18px;margin-top:12px;flex-wrap:wrap;')}>
                      <div style={parseInlineStyle('flex:1;min-width:150px;')}>
                        {c.pros.map((p, i) => (
                          <div key={i} style={parseInlineStyle('font-size: 13px; color: #3F3F46; line-height: 1.5; display: flex; gap: 6px')}>
                            <span style={parseInlineStyle('color:#1e8a5b;font-weight:700;')}>+</span>
                            {p}
                          </div>
                        ))}
                      </div>
                      <div style={parseInlineStyle('flex:1;min-width:150px;')}>
                        {c.cons.map((n, i) => (
                          <div key={i} style={parseInlineStyle('font-size: 13px; color: #3F3F46; line-height: 1.5; display: flex; gap: 6px')}>
                            <span style={parseInlineStyle('color: #E21D15; font-weight: 700')}>–</span>
                            {n}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={c.onToggle}
                  style={parseInlineStyle(
                    'width:100%;text-align:left;background:#fafafa;border:none;border-top:1px solid #f0f0f1;padding:13px 18px;font-size:13px;font-weight:600;color:#1e3a8a;cursor:pointer;font-family:inherit;display:flex;justify-content:space-between;',
                  )}
                >
                  Why this car?<span style={parseInlineStyle('color:#a1a1aa;')}>{c.caret}</span>
                </button>
                {c.expanded && (
                  <div style={parseInlineStyle('padding:16px 18px;background:#fafafa;border-top:1px solid #f0f0f1;font-size:14px;line-height:1.6;color:#3f3f46;')}>{c.why}</div>
                )}
                <div style={parseInlineStyle('padding:0 18px 16px;background:#fafafa;')}>
                  <button
                    onClick={v.goDetail}
                    style={parseInlineStyle('background:#fff;border:1px solid #d8e2f4;color:#1e3a8a;border-radius:9px;padding:10px 16px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;')}
                  >
                    See full breakdown →
                  </button>
                </div>
              </div>
            ))}
          </div>
          {v.showCmpBar && <div style={parseInlineStyle('height:64px;')}></div>}
        </div>
      </div>
    </div>
  );
}
