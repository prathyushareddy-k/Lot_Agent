import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function IntakeScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Intake" style={parseInlineStyle('min-height:calc(100vh - 60px);background:#fff;display:flex;flex-direction:column;')}>
      {/* progress */}
      <div style={parseInlineStyle('max-width:640px;width:100%;margin:0 auto;padding:32px 32px 0;')}>
        {v.intakeInQuestions && (
          <>
            <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;')}>
              <span style={parseInlineStyle('font-size:13px;font-weight:500;color:#6B6459;')}>{v.stepLabel}</span>
              <button onClick={v.goLanding} style={parseInlineStyle('background:none;border:none;color:#9C9189;font-size:13px;cursor:pointer;font-family:inherit;font-weight:500;')}>
                Save &amp; exit
              </button>
            </div>
            <div style={parseInlineStyle('height:5px;background:#E7E2D9;border-radius:999px;overflow:hidden;margin-bottom:48px;')}>
              <div style={parseInlineStyle(`height:100%;background:#0F766E;border-radius:999px;width:${v.progressPct};transition:width .35s ease;`)}></div>
            </div>
          </>
        )}
      </div>

      <div style={parseInlineStyle('max-width:640px;width:100%;margin:0 auto;flex:1;padding:0 32px 32px;display:flex;flex-direction:column;justify-content:center;')}>
        {/* step 1 usage */}
        {v.st1 && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>What will this car mostly do for you?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 28px;')}>Pick all that apply — your agent weighs every use you choose.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.usageOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('display:flex;align-items:flex-start;gap:14px;')}>
                    <span style={parseInlineStyle(o.boxStyle || '')}>{o.checked && '✓'}</span>
                    <span>
                      <span style={parseInlineStyle('font:600 16px/1.3 var(--font-serif,serif);display:block;margin-bottom:3px;')}>{o.label}</span>
                      <span style={parseInlineStyle('font-size:13px;color:#6B6459;')}>{o.sub}</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* step 2 radius */}
        {v.st2 && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>How far will you go to pick it up?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 32px;')}>A wider radius usually means better deals.</p>
            <div style={parseInlineStyle('background:#FBF8F3;border:1.5px solid #E7E2D9;border-radius:12px;padding:28px;')}>
              <div style={parseInlineStyle('display:flex;align-items:baseline;gap:10px;margin-bottom:24px;')}>
                <span style={parseInlineStyle('font:700 48px/1 var(--font-mono,monospace);color:#0F766E;font-variant-numeric:tabular-nums;')}>{v.radius}</span>
                <span style={parseInlineStyle('font-size:18px;font-weight:600;color:#6B6459;')}>miles from {v.zip}</span>
              </div>
              <input type="range" min="10" max="200" step="5" value={v.radius} onChange={v.onRadius} style={parseInlineStyle('width:100%;')} />
              <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#9C9189;margin-top:10px;')}>
                <span>10 mi</span>
                <span>200 mi</span>
              </div>
            </div>
          </>
        )}

        {/* step 3 timeline */}
        {v.st3 && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>When do you want to be driving it?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 28px;')}>This sets how aggressively your agent acts.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.timelineOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('font:600 16px/1.3 var(--font-serif,serif);display:block;margin-bottom:3px;')}>{o.label}</span>
                  <span style={parseInlineStyle('font-size:13px;color:#6B6459;')}>{o.sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* step 4 budget (adaptive) */}
        {v.st4 && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>What&apos;s your budget?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 24px;')}>However you think about money is fine.</p>
            <div style={parseInlineStyle('display:flex;gap:6px;background:#F5F1EB;border-radius:12px;padding:4px;margin-bottom:24px;')}>
              <button onClick={v.setCash} style={parseInlineStyle(v.cashTabStyle)}>
                Cash total
              </button>
              <button onClick={v.setMonthly} style={parseInlineStyle(v.monthlyTabStyle)}>
                Monthly payment
              </button>
            </div>
            {v.isCash && (
              <div style={parseInlineStyle('background:#FBF8F3;border:1.5px solid #E7E2D9;border-radius:12px;padding:28px;')}>
                <div style={parseInlineStyle('display:flex;align-items:baseline;gap:8px;margin-bottom:22px;')}>
                  <span style={parseInlineStyle('font:700 48px/1 var(--font-mono,monospace);color:#0F766E;font-variant-numeric:tabular-nums;')}>{v.cashLabel}</span>
                  <span style={parseInlineStyle('font-size:16px;font-weight:600;color:#6B6459;')}>all-in, out the door</span>
                </div>
                <input type="range" min="8000" max="60000" step="500" value={v.cashTotal} onChange={v.onCash} style={parseInlineStyle('width:100%;')} />
                <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#9C9189;margin-top:10px;')}>
                  <span>$8k</span>
                  <span>$60k</span>
                </div>
              </div>
            )}
            {v.isMonthly && (
              <div style={parseInlineStyle('background:#FBF8F3;border:1.5px solid #E7E2D9;border-radius:12px;padding:28px;')}>
                <div style={parseInlineStyle('display:flex;align-items:baseline;gap:8px;margin-bottom:22px;')}>
                  <span style={parseInlineStyle('font:700 48px/1 var(--font-mono,monospace);color:#0F766E;font-variant-numeric:tabular-nums;')}>{v.monthlyLabel}</span>
                  <span style={parseInlineStyle('font-size:16px;font-weight:600;color:#6B6459;')}>/ month</span>
                </div>
                <input type="range" min="150" max="900" step="10" value={v.monthly} onChange={v.onMonthly} style={parseInlineStyle('width:100%;')} />
                <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#9C9189;margin-top:8px;margin-bottom:26px;')}>
                  <span>$150</span>
                  <span>$900</span>
                </div>
                {/* adaptive follow-up */}
                <div style={parseInlineStyle('border-top:1px dashed #E7E2D9;padding-top:24px;')}>
                  <div style={parseInlineStyle('font-size:13px;font-weight:600;color:#0F766E;margin-bottom:16px;')}>A couple more, since you&apos;re financing →</div>
                  <div style={parseInlineStyle('display:flex;gap:18px;flex-wrap:wrap;')}>
                    <label style={parseInlineStyle('flex:1;min-width:160px;')}>
                      <span style={parseInlineStyle('font-size:13px;font-weight:500;color:#6B6459;display:block;margin-bottom:10px;')}>Down payment: {v.downLabel}</span>
                      <input type="range" min="0" max="10000" step="250" value={v.down} onChange={v.onDown} style={parseInlineStyle('width:100%;')} />
                    </label>
                    <label style={parseInlineStyle('flex:1;min-width:160px;')}>
                      <span style={parseInlineStyle('font-size:13px;font-weight:500;color:#6B6459;display:block;margin-bottom:10px;')}>Loan term: {v.term} months</span>
                      <input type="range" min="24" max="84" step="12" value={v.term} onChange={v.onTerm} style={parseInlineStyle('width:100%;')} />
                    </label>
                  </div>
                </div>
              </div>
            )}
            {v.showNotes && (
              <div style={parseInlineStyle('margin-top:16px;background:#FFFBEB;border:1px solid #FCD34D;border-left:3px solid #B45309;border-radius:8px;padding:13px 16px;')}>
                <span style={parseInlineStyle('font-size:10px;font-weight:700;letter-spacing:.8px;color:#B45309;text-transform:uppercase;display:block;margin-bottom:4px;')}>Adaptive logic</span>
                <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#6B6459;')}>
                  Down payment and loan-term questions <strong>only appear</strong> when &quot;Monthly payment&quot; is selected.
                </span>
              </div>
            )}
          </>
        )}

        {/* step 5 priorities */}
        {v.st5 && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>What matters most to you?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 30px;')}>Drag to weight each one. The agent ranks every car by these.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:24px;')}>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:10px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;color:#1C1A17;')}>Reliability</span>
                  <span style={parseInlineStyle('font:700 13px/1 var(--font-mono,monospace);color:#0F766E;')}>{v.wRelLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wRel} onChange={v.onRel} style={parseInlineStyle('width:100%;')} />
              </div>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:10px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;color:#1C1A17;')}>Resale value</span>
                  <span style={parseInlineStyle('font:700 13px/1 var(--font-mono,monospace);color:#0F766E;')}>{v.wResaleLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wResale} onChange={v.onResale} style={parseInlineStyle('width:100%;')} />
              </div>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:10px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;color:#1C1A17;')}>Running cost</span>
                  <span style={parseInlineStyle('font:700 13px/1 var(--font-mono,monospace);color:#0F766E;')}>{v.wRunLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wRun} onChange={v.onRun} style={parseInlineStyle('width:100%;')} />
              </div>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:10px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;color:#1C1A17;')}>Performance &amp; fun</span>
                  <span style={parseInlineStyle('font:700 13px/1 var(--font-mono,monospace);color:#0F766E;')}>{v.wPerfLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wPerf} onChange={v.onPerf} style={parseInlineStyle('width:100%;')} />
              </div>
            </div>
          </>
        )}

        {/* step 6 condition */}
        {v.st6 && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>New, used, or open to both?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 28px;')}>Most first-time buyers save the most staying open.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.condOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('font:600 16px/1.3 var(--font-serif,serif);display:block;margin-bottom:3px;')}>{o.label}</span>
                  <span style={parseInlineStyle('font-size:13px;color:#6B6459;')}>{o.sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* step 7 fuel type */}
        {v.stFuel && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>How do you want it powered?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 28px;')}>No wrong answer — this shapes what the agent ranks.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.fuelOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('font:600 16px/1.3 var(--font-serif,serif);display:block;margin-bottom:3px;')}>{o.label}</span>
                  <span style={parseInlineStyle('font-size:13px;color:#6B6459;')}>{o.sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* step 8 fuel cost */}
        {v.stFuelCost && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>{v.fuelCostTitle}</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 32px;')}>The agent flags any car that would blow past this.</p>
            <div style={parseInlineStyle('background:#FBF8F3;border:1.5px solid #E7E2D9;border-radius:12px;padding:28px;')}>
              <div style={parseInlineStyle('display:flex;align-items:baseline;gap:8px;margin-bottom:22px;')}>
                <span style={parseInlineStyle('font:700 48px/1 var(--font-mono,monospace);color:#0F766E;font-variant-numeric:tabular-nums;')}>{v.fuelCostLabel}</span>
                <span style={parseInlineStyle('font-size:16px;font-weight:600;color:#6B6459;')}>/ month {v.fuelCostWord}</span>
              </div>
              <input type="range" min="0" max="400" step="10" value={v.fuelCost} onChange={v.onFuelCost} style={parseInlineStyle('width:100%;')} />
              <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#9C9189;margin-top:10px;')}>
                <span>$0</span>
                <span>$400</span>
              </div>
            </div>
            {v.fuelIsEv && (
              <div style={parseInlineStyle('margin-top:16px;background:#E6F5F2;border:1px solid #A7D9D3;border-radius:12px;padding:13px 16px;font-size:13px;line-height:1.5;color:#0F766E;')}>
                Most EV owners charging at home spend <strong>$30–60/mo</strong> — usually well under a gas budget.
              </div>
            )}
            {v.showNotes && (
              <div style={parseInlineStyle('margin-top:16px;background:#FFFBEB;border:1px solid #FCD34D;border-left:3px solid #B45309;border-radius:8px;padding:13px 16px;')}>
                <span style={parseInlineStyle('font-size:10px;font-weight:700;letter-spacing:.8px;color:#B45309;text-transform:uppercase;display:block;margin-bottom:4px;')}>Adaptive logic</span>
                <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#6B6459;')}>
                  This question reframes to &quot;energy&quot; when Electric is chosen.
                </span>
              </div>
            )}
          </>
        )}

        {/* step 9 must-haves */}
        {v.st7 && (
          <>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 8px;')}>Any non-negotiables?</h2>
            <p style={parseInlineStyle('font-size:16px;line-height:1.55;color:#6B6459;margin:0 0 28px;')}>Optional. Tap any that are true dealbreakers — I&apos;ll never show you a car without these.</p>
            <div style={parseInlineStyle('display:flex;flex-wrap:wrap;gap:10px;margin-bottom:22px;')}>
              {v.mustHaves.map((m, i) => (
                <button key={i} onClick={m.onClick} style={parseInlineStyle(m.style)}>
                  {m.label}
                </button>
              ))}
              {v.customChips.map((c, i) => (
                <button
                  key={i}
                  onClick={c.onRemove}
                  style={parseInlineStyle(
                    'border-radius:999px;padding:12px 18px 12px 20px;font-size:14px;font-weight:600;font-family:inherit;cursor:pointer;background:#0F766E;color:#fff;border:2px solid #0F766E;display:inline-flex;align-items:center;gap:8px;',
                  )}
                >
                  {c.label}
                  <span style={parseInlineStyle('font-size:16px;line-height:1;opacity:.7;')}>×</span>
                </button>
              ))}
            </div>
            <div>
              <label style={parseInlineStyle('font-size:13px;font-weight:500;color:#6B6459;display:block;margin-bottom:10px;')}>Something else? Add your own</label>
              <div style={parseInlineStyle('display:flex;gap:8px;')}>
                <input
                  type="text"
                  value={v.newMust}
                  onChange={v.onNewMust}
                  onKeyDown={v.onNewMustKey}
                  placeholder="e.g. Heated seats, tow hitch…"
                  style={parseInlineStyle(
                    'flex:1;border:1.5px solid #E7E2D9;border-radius:999px;padding:12px 20px;font-size:14px;font-family:inherit;color:#1C1A17;outline:none;',
                  )}
                />
                <button onClick={v.addCustomMust} style={parseInlineStyle(v.addBtnStyle)}>
                  Add
                </button>
              </div>
            </div>
          </>
        )}

        {/* review */}
        {v.stReview && (
          <>
            <div style={parseInlineStyle('display:inline-flex;align-items:center;gap:8px;margin-bottom:16px;')}>
              <div style={parseInlineStyle('width:28px;height:28px;border-radius:8px;background:#E6F5F2;display:flex;align-items:center;justify-content:center;')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span style={parseInlineStyle('font-size:12px;font-weight:700;color:#0F766E;letter-spacing:.4px;text-transform:uppercase;')}>Your brief</span>
            </div>
            <h2 style={parseInlineStyle('font:700 30px/1.15 var(--font-serif,serif);letter-spacing:-.6px;color:#1C1A17;margin:0 0 28px;')}>Here&apos;s what I heard.</h2>
            <div style={parseInlineStyle('background:#fff;border:1px solid #E7E2D9;border-radius:12px;overflow:hidden;')}>
              {v.summary.map((row, i) => (
                <Fragment key={i}>
                  <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px 22px;border-bottom:1px solid #F5F1EB;')}>
                    <div>
                      <div style={parseInlineStyle('font-size:11px;font-weight:500;color:#9C9189;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;')}>{row.k}</div>
                      <div style={parseInlineStyle('font-size:15px;font-weight:600;color:#1C1A17;')}>{row.v}</div>
                    </div>
                    <button onClick={row.onEdit} style={parseInlineStyle('background:none;border:none;color:#0F766E;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;flex-shrink:0;')}>
                      Edit
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
            {/* agent reassurance */}
            <div style={parseInlineStyle('margin-top:20px;background:#E8F0FE;border:1.5px solid #BBCFFC;border-radius:12px;padding:16px 18px;display:flex;gap:10px;align-items:flex-start;')}>
              <span style={parseInlineStyle('position:relative;flex-shrink:0;margin-top:3px;width:10px;height:10px;')}>
                <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#2563EB;animation:lapulse 2.2s ease-out infinite;')}></span>
                <span style={parseInlineStyle('position:absolute;inset:0;border-radius:50%;background:#2563EB;')}></span>
              </span>
              <div style={parseInlineStyle('font-size:14px;line-height:1.55;color:#1C1A17;')}>
                I&apos;ll keep these priorities in memory as your search evolves — and explain any term you&apos;re unsure about, right when it matters.
              </div>
            </div>
            <button
              onClick={v.findCars}
              style={parseInlineStyle(
                'margin-top:24px;width:100%;background:#0F766E;color:#fff;border:none;border-radius:12px;padding:18px;font:700 17px/1 var(--font-serif,serif);cursor:pointer;box-shadow:0 4px 12px rgba(28,26,23,0.10);',
              )}
            >
              Find my cars →
            </button>
          </>
        )}
      </div>

      {/* footer nav */}
      {v.intakeInQuestions && (
        <div style={parseInlineStyle('border-top:1px solid #E7E2D9;background:#fff;')}>
          <div style={parseInlineStyle('max-width:640px;margin:0 auto;padding:18px 32px;display:flex;justify-content:space-between;align-items:center;')}>
            <button onClick={v.back} style={parseInlineStyle('background:none;border:none;color:#6B6459;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:6px;')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
              Back
            </button>
            <button
              onClick={v.next}
              style={parseInlineStyle('background:#0F766E;color:#fff;border:none;border-radius:12px;padding:14px 32px;font:700 15px/1 var(--font-serif,serif);cursor:pointer;')}
            >
              {v.nextLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
