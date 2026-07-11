import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function IntakeScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Intake" style={parseInlineStyle('min-height:calc(100vh - 46px);background:#fff;display:flex;flex-direction:column;')}>
      {/* progress */}
      <div style={parseInlineStyle('max-width:680px;width:100%;margin:0 auto;padding:30px 32px 0;')}>
        {v.intakeInQuestions && (
          <>
            <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;')}>
              <span style={parseInlineStyle('font-size:13px;font-weight:600;color:#71717a;')}>{v.stepLabel}</span>
              <button onClick={v.goLanding} style={parseInlineStyle('background:none;border:none;color:#a1a1aa;font-size:13px;cursor:pointer;font-family:inherit;')}>
                Save &amp; exit
              </button>
            </div>
            <div style={parseInlineStyle('height:5px;background:#f0f0f1;border-radius:99px;overflow:hidden;')}>
              <div style={parseInlineStyle(`height:100%;background:#1e3a8a;border-radius:99px;width:${v.progressPct};transition:width .3s ease;`)}></div>
            </div>
          </>
        )}
      </div>

      <div style={parseInlineStyle('max-width:680px;width:100%;margin:0 auto;flex:1;padding:48px 32px;display:flex;flex-direction:column;justify-content:center;')}>
        {/* step 1 usage */}
        {v.st1 && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>What will this car mostly do for you?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 30px;')}>Pick all that apply — your agent balances every use you choose.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.usageOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('display:flex;align-items:flex-start;gap:13px;')}>
                    <span style={parseInlineStyle(o.boxStyle || '')}>{o.checked && '✓'}</span>
                    <span>
                      <span style={parseInlineStyle('font-size:16px;font-weight:600;')}>{o.label}</span>
                      <span style={parseInlineStyle('font-size:13px;color:#71717a;display:block;margin-top:2px;')}>{o.sub}</span>
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
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>How far will you go to pick it up?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 34px;')}>A wider radius usually means better deals.</p>
            <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;padding:28px;')}>
              <div style={parseInlineStyle('display:flex;align-items:baseline;gap:10px;margin-bottom:22px;')}>
                <span style={parseInlineStyle('font-size:44px;font-weight:800;color:#1e3a8a;letter-spacing:-1px;')}>{v.radius}</span>
                <span style={parseInlineStyle('font-size:18px;color:#52525b;font-weight:600;')}>miles from {v.zip}</span>
              </div>
              <input type="range" min="10" max="200" step="5" value={v.radius} onChange={v.onRadius} style={parseInlineStyle('width:100%;')} />
              <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#a1a1aa;margin-top:8px;')}>
                <span>10 mi</span>
                <span>200 mi</span>
              </div>
            </div>
          </>
        )}

        {/* step 3 timeline */}
        {v.st3 && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>When do you want to be driving it?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 30px;')}>This sets how aggressively your agent acts.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.timelineOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('font-size:16px;font-weight:600;')}>{o.label}</span>
                  <span style={parseInlineStyle('font-size:13px;color:#71717a;display:block;margin-top:2px;')}>{o.sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* step 4 budget (adaptive) */}
        {v.st4 && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>What&apos;s your budget?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 26px;')}>However you think about money is fine.</p>
            <div style={parseInlineStyle('display:flex;gap:8px;background:#f0f0f1;border-radius:11px;padding:5px;margin-bottom:26px;')}>
              <button onClick={v.setCash} style={parseInlineStyle(v.cashTabStyle)}>
                Cash total
              </button>
              <button onClick={v.setMonthly} style={parseInlineStyle(v.monthlyTabStyle)}>
                Monthly payment
              </button>
            </div>
            {v.isCash && (
              <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;padding:28px;')}>
                <div style={parseInlineStyle('display:flex;align-items:baseline;gap:8px;margin-bottom:22px;')}>
                  <span style={parseInlineStyle('font-size:44px;font-weight:800;color:#1e3a8a;letter-spacing:-1px;')}>{v.cashLabel}</span>
                  <span style={parseInlineStyle('font-size:16px;color:#52525b;font-weight:600;')}>all-in, out the door</span>
                </div>
                <input type="range" min="8000" max="60000" step="500" value={v.cashTotal} onChange={v.onCash} style={parseInlineStyle('width:100%;')} />
                <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#a1a1aa;margin-top:8px;')}>
                  <span>$8k</span>
                  <span>$60k</span>
                </div>
              </div>
            )}
            {v.isMonthly && (
              <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;padding:28px;')}>
                <div style={parseInlineStyle('display:flex;align-items:baseline;gap:8px;margin-bottom:22px;')}>
                  <span style={parseInlineStyle('font-size:44px;font-weight:800;color:#1e3a8a;letter-spacing:-1px;')}>{v.monthlyLabel}</span>
                  <span style={parseInlineStyle('font-size:16px;color:#52525b;font-weight:600;')}>/ month</span>
                </div>
                <input type="range" min="150" max="900" step="10" value={v.monthly} onChange={v.onMonthly} style={parseInlineStyle('width:100%;')} />
                <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#a1a1aa;margin-top:8px;margin-bottom:24px;')}>
                  <span>$150</span>
                  <span>$900</span>
                </div>
                {/* adaptive follow-up */}
                <div style={parseInlineStyle('border-top:1px dashed #d4d4d8;padding-top:22px;')}>
                  <div style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e3a8a;margin-bottom:14px;')}>A couple more, since you&apos;re financing →</div>
                  <div style={parseInlineStyle('display:flex;gap:18px;flex-wrap:wrap;')}>
                    <label style={parseInlineStyle('flex:1;min-width:160px;')}>
                      <span style={parseInlineStyle('font-size:13px;font-weight:600;color:#52525b;display:block;margin-bottom:8px;')}>Down payment: {v.downLabel}</span>
                      <input type="range" min="0" max="10000" step="250" value={v.down} onChange={v.onDown} style={parseInlineStyle('width:100%;')} />
                    </label>
                    <label style={parseInlineStyle('flex:1;min-width:160px;')}>
                      <span style={parseInlineStyle('font-size:13px;font-weight:600;color:#52525b;display:block;margin-bottom:8px;')}>Loan term: {v.term} months</span>
                      <input type="range" min="24" max="84" step="12" value={v.term} onChange={v.onTerm} style={parseInlineStyle('width:100%;')} />
                    </label>
                  </div>
                </div>
              </div>
            )}
            {v.showNotes && (
              <div
                style={parseInlineStyle(
                  'margin-top:18px;background:#fffbeb;border:1px solid #f3e3a3;border-left:3px solid #d4a72c;border-radius:8px;padding:13px 15px;',
                )}
              >
                <span style={parseInlineStyle('font-size:10px;font-weight:700;letter-spacing:.8px;color:#a8801a;display:block;margin-bottom:3px;')}>ADAPTIVE LOGIC</span>
                <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#52525b;')}>
                  The down-payment and loan-term questions <strong>only appear</strong> when &quot;Monthly payment&quot; is selected. A cash buyer never sees them.
                </span>
              </div>
            )}
          </>
        )}

        {/* step 5 priorities */}
        {v.st5 && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>What matters most to you?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 30px;')}>Drag to weight each one. The agent ranks cars on these.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:24px;')}>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:8px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;')}>Reliability</span>
                  <span style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e3a8a;')}>{v.wRelLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wRel} onChange={v.onRel} style={parseInlineStyle('width:100%;')} />
              </div>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:8px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;')}>Resale value</span>
                  <span style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e3a8a;')}>{v.wResaleLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wResale} onChange={v.onResale} style={parseInlineStyle('width:100%;')} />
              </div>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:8px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;')}>Running cost</span>
                  <span style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e3a8a;')}>{v.wRunLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wRun} onChange={v.onRun} style={parseInlineStyle('width:100%;')} />
              </div>
              <div>
                <div style={parseInlineStyle('display:flex;justify-content:space-between;margin-bottom:8px;')}>
                  <span style={parseInlineStyle('font-size:15px;font-weight:600;')}>Performance &amp; fun</span>
                  <span style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e3a8a;')}>{v.wPerfLabel}</span>
                </div>
                <input type="range" min="0" max="100" value={v.wPerf} onChange={v.onPerf} style={parseInlineStyle('width:100%;')} />
              </div>
            </div>
          </>
        )}

        {/* step 6 condition */}
        {v.st6 && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>New, used, or open to both?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 30px;')}>Most first-time buyers save the most staying open.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.condOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('font-size:16px;font-weight:600;')}>{o.label}</span>
                  <span style={parseInlineStyle('font-size:13px;color:#71717a;display:block;margin-top:2px;')}>{o.sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* step 7 fuel type */}
        {v.stFuel && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>How do you want it powered?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 30px;')}>No wrong answer — this just shapes what the agent ranks.</p>
            <div style={parseInlineStyle('display:flex;flex-direction:column;gap:10px;')}>
              {v.fuelOpts.map((o, i) => (
                <button key={i} onClick={o.onClick} style={parseInlineStyle(o.style)}>
                  <span style={parseInlineStyle('font-size:16px;font-weight:600;')}>{o.label}</span>
                  <span style={parseInlineStyle('font-size:13px;color:#71717a;display:block;margin-top:2px;')}>{o.sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* step 8 fuel cost */}
        {v.stFuelCost && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>{v.fuelCostTitle}</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 34px;')}>The agent flags any car that would blow past this.</p>
            <div style={parseInlineStyle('background:#fafafa;border:1px solid #e4e4e7;border-radius:14px;padding:28px;')}>
              <div style={parseInlineStyle('display:flex;align-items:baseline;gap:8px;margin-bottom:22px;')}>
                <span style={parseInlineStyle('font-size:44px;font-weight:800;color:#1e3a8a;letter-spacing:-1px;')}>{v.fuelCostLabel}</span>
                <span style={parseInlineStyle('font-size:16px;color:#52525b;font-weight:600;')}>/ month {v.fuelCostWord}</span>
              </div>
              <input type="range" min="0" max="400" step="10" value={v.fuelCost} onChange={v.onFuelCost} style={parseInlineStyle('width:100%;')} />
              <div style={parseInlineStyle('display:flex;justify-content:space-between;font-size:12px;color:#a1a1aa;margin-top:8px;')}>
                <span>$0</span>
                <span>$400</span>
              </div>
            </div>
            {v.fuelIsEv && (
              <div style={parseInlineStyle('margin-top:16px;background:#eef3fb;border:1px solid #d8e2f4;border-radius:10px;padding:13px 15px;font-size:13px;line-height:1.5;color:#1e3a8a;')}>
                Most EV owners charging at home spend <strong>$30–60/mo</strong> — usually well under a gas budget.
              </div>
            )}
            {v.showNotes && (
              <div
                style={parseInlineStyle(
                  'margin-top:16px;background:#fffbeb;border:1px solid #f3e3a3;border-left:3px solid #d4a72c;border-radius:8px;padding:13px 15px;',
                )}
              >
                <span style={parseInlineStyle('font-size:10px;font-weight:700;letter-spacing:.8px;color:#a8801a;display:block;margin-bottom:3px;')}>ADAPTIVE LOGIC</span>
                <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#52525b;')}>
                  This question reframes to &quot;energy&quot; and shows a charging-cost hint when Electric is chosen — the label adapts to the earlier answer.
                </span>
              </div>
            )}
          </>
        )}

        {/* step 9 must-haves */}
        {v.st7 && (
          <>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 8px;')}>Any non-negotiables?</h2>
            <p style={parseInlineStyle('font-size:16px;color:#71717a;margin:0 0 30px;')}>Optional. Tap any that are true dealbreakers.</p>
            <div style={parseInlineStyle('display:flex;flex-wrap:wrap;gap:10px;')}>
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
                    'border-radius:99px;padding:11px 16px 11px 18px;font-size:14px;font-weight:600;font-family:inherit;cursor:pointer;background:#1e3a8a;color:#fff;border:2px solid #1e3a8a;display:inline-flex;align-items:center;gap:8px;',
                  )}
                >
                  {c.label}
                  <span style={parseInlineStyle('font-size:16px;line-height:1;opacity:.7;')}>×</span>
                </button>
              ))}
            </div>
            <div style={parseInlineStyle('margin-top:18px;')}>
              <label style={parseInlineStyle('font-size:13px;font-weight:600;color:#52525b;display:block;margin-bottom:8px;')}>Something else? Add your own</label>
              <div style={parseInlineStyle('display:flex;gap:8px;')}>
                <input
                  type="text"
                  value={v.newMust}
                  onChange={v.onNewMust}
                  onKeyDown={v.onNewMustKey}
                  placeholder="e.g. Heated seats, tow hitch, red…"
                  style={parseInlineStyle(
                    'flex:1;border:2px solid #e4e4e7;border-radius:99px;padding:11px 18px;font-size:14px;font-family:inherit;color:#18181b;outline:none;',
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
            <div style={parseInlineStyle('display:inline-flex;align-items:center;gap:8px;margin-bottom:14px;')}>
              <div
                style={parseInlineStyle(
                  'width:26px;height:26px;border-radius:7px;background:#eef3fb;display:flex;align-items:center;justify-content:center;color:#1e3a8a;font-weight:700;',
                )}
              >
                ✓
              </div>
              <span style={parseInlineStyle('font-size:13px;font-weight:700;color:#1e3a8a;letter-spacing:.3px;')}>YOUR BRIEF</span>
            </div>
            <h2 style={parseInlineStyle('font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0 0 28px;')}>Here&apos;s what I heard.</h2>
            <div style={parseInlineStyle('border:1px solid #e4e4e7;border-radius:14px;overflow:hidden;')}>
              {v.summary.map((row, i) => (
                <Fragment key={i}>
                  <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px 20px;border-bottom:1px solid #f0f0f1;')}>
                    <div>
                      <div style={parseInlineStyle('font-size:12px;color:#a1a1aa;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px;')}>{row.k}</div>
                      <div style={parseInlineStyle('font-size:16px;font-weight:600;')}>{row.v}</div>
                    </div>
                    <button onClick={row.onEdit} style={parseInlineStyle('background:none;border:none;color:#1e3a8a;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;flex-shrink:0;')}>
                      Edit
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
            <button
              onClick={v.findCars}
              style={parseInlineStyle(
                'margin-top:26px;width:100%;background:#1e3a8a;color:#fff;border:none;border-radius:11px;padding:18px;font-size:17px;font-weight:700;font-family:inherit;cursor:pointer;box-shadow:0 2px 10px rgba(30,58,138,.25);',
              )}
            >
              Find my cars →
            </button>
          </>
        )}
      </div>

      {/* footer nav */}
      {v.intakeInQuestions && (
        <div style={parseInlineStyle('border-top:1px solid #e4e4e7;background:#fff;')}>
          <div style={parseInlineStyle('max-width:680px;margin:0 auto;padding:18px 32px;display:flex;justify-content:space-between;align-items:center;')}>
            <button onClick={v.back} style={parseInlineStyle('background:none;border:none;color:#71717a;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;')}>
              ← Back
            </button>
            <button
              onClick={v.next}
              style={parseInlineStyle('background:#1e3a8a;color:#fff;border:none;border-radius:10px;padding:13px 30px;font-size:15px;font-weight:700;font-family:inherit;cursor:pointer;')}
            >
              {v.nextLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
