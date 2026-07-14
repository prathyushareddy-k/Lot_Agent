import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';
import ImageSlot from './ImageSlot';

export default function CompareScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Compare" style={parseInlineStyle('min-height:calc(100vh - 60px);')}>
      <div style={parseInlineStyle('max-width:1080px;margin:0 auto;padding:28px 32px 60px;')}>
        <button
          onClick={v.goShortlist}
          style={parseInlineStyle('background:none;border:none;color:#6B6459;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;margin-bottom:14px;')}
        >
          ← Back to your Top picks
        </button>
        {v.cmpEmpty && (
          <div style={parseInlineStyle('text-align:center;background:#fff;border:1px dashed #E7E2D9;border-radius:12px;padding:54px 28px;')}>
            <div style={parseInlineStyle('font:700 17px/1 var(--font-serif,serif);color:#1C1A17;margin-bottom:6px;')}>Nothing to compare yet.</div>
            <p style={parseInlineStyle('font-size:14px;color:#6B6459;line-height:1.55;max-width:360px;margin:0 auto;')}>
              Head back to your shortlist and tick &quot;Compare&quot; on two or three cars — I&apos;ll line them up side by side and tell you which I&apos;d pick.
            </p>
          </div>
        )}
        {v.cmpHasCars && (
          <>
            <h1 style={parseInlineStyle('font:800 26px/1.1 var(--font-serif,serif);letter-spacing:-.6px;margin:0 0 4px;color:#1C1A17;')}>Comparing {v.cmpCountLabel} cars</h1>
            <p style={parseInlineStyle('font-size:14px;color:#6B6459;margin:0 0 20px;')}>
              Decision-drivers first. I&apos;ve marked the winner on each row so you don&apos;t have to eyeball the numbers.
            </p>
            <div style={parseInlineStyle('border:1px solid #E7E2D9;border-radius:12px;background:#fff;overflow:hidden;')}>
              <div style={parseInlineStyle('width:100%;')}>
                <div style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                  <div style={parseInlineStyle('position:sticky;left:0;background:#fff;z-index:2;border-bottom:1px solid #F5F1EB;')}></div>
                  {v.compareCols.map((col, i) => (
                    <div key={i} style={parseInlineStyle('padding:16px;border-bottom:1px solid #F5F1EB;border-left:1px solid #F5F1EB;')}>
                      <div style={parseInlineStyle('height:74px;border-radius:9px;margin-bottom:10px;overflow:hidden;position:relative;')}>
                        {col.best && (
                          <span
                            style={parseInlineStyle(
                              'position:absolute;top:7px;left:7px;z-index:2;display:inline-flex;align-items:center;gap:4px;background:#0F766E;color:#fff;border-radius:99px;padding:3px 10px;font-size:10px;font-weight:700;letter-spacing:.3px;box-shadow:0 1px 4px rgba(0,0,0,.2);',
                            )}
                          >
                            ★ AGENT&apos;S PICK
                          </span>
                        )}
                        <ImageSlot src={col.slotSrc} alt={col.slotPlaceholder} />
                      </div>
                      <div style={parseInlineStyle('font:700 15px/1.2 var(--font-serif,serif);color:#1C1A17;')}>{col.name}</div>
                      <div style={parseInlineStyle('font-size:12px;color:#6B6459;margin-top:4px;')}>{col.sub}</div>
                    </div>
                  ))}
                </div>
                <div style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                  <div
                    style={parseInlineStyle(
                      'position:sticky;left:0;background:#fff;z-index:1;padding:16px;font-size:13px;font-weight:700;color:#6B6459;border-bottom:1px solid #F5F1EB;display:flex;align-items:center;',
                    )}
                  >
                    Fit Score
                  </div>
                  {v.fitCells.map((cell, i) => (
                    <div key={i} style={parseInlineStyle(cell.style)}>
                      <div style={parseInlineStyle(cell.badge || '')}>{cell.val}</div>
                      {cell.best && (
                        <span style={parseInlineStyle('background:#0F766E;color:#fff;border-radius:99px;padding:2px 9px;font-size:10px;font-weight:700;letter-spacing:.3px;')}>
                          BEST FIT
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                  <div
                    style={parseInlineStyle(
                      'position:sticky;left:0;background:#fff;z-index:1;padding:16px;font-size:13px;font-weight:700;color:#6B6459;border-bottom:1px solid #F5F1EB;display:flex;align-items:center;',
                    )}
                  >
                    Deal rating
                  </div>
                  {v.dealCells.map((cell, i) => (
                    <div key={i} style={parseInlineStyle(cell.style)}>
                      <span style={parseInlineStyle(cell.pill || '')}>{cell.label}</span>
                    </div>
                  ))}
                </div>
                <div style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                  <div
                    style={parseInlineStyle(
                      'position:sticky;left:0;background:#fff;z-index:1;padding:16px;font-size:13px;font-weight:700;color:#6B6459;border-bottom:1px solid #F5F1EB;display:flex;align-items:center;',
                    )}
                  >
                    All-in monthly
                  </div>
                  {v.costCells.map((cell, i) => (
                    <div key={i} style={parseInlineStyle(cell.style)}>
                      <span style={parseInlineStyle('font:800 23px/1 var(--font-mono,monospace);color:#1C1A17;letter-spacing:-.4px;font-variant-numeric:tabular-nums;')}>{cell.val}</span>
                      {cell.best && (
                        <span style={parseInlineStyle('background:#0F766E;color:#fff;border-radius:99px;padding:2px 9px;font-size:10px;font-weight:700;letter-spacing:.3px;')}>
                          LOWEST
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                  <div
                    style={parseInlineStyle(
                      'position:sticky;left:0;background:#fff;z-index:1;padding:16px;font-size:13px;font-weight:700;color:#6B6459;border-bottom:1px solid #F5F1EB;display:flex;align-items:center;',
                    )}
                  >
                    Out-the-door price
                  </div>
                  {v.otdCells.map((cell, i) => (
                    <div key={i} style={parseInlineStyle(cell.style)}>
                      <span style={parseInlineStyle('font:700 15px/1 var(--font-mono,monospace);color:#6B6459;font-variant-numeric:tabular-nums;')}>{cell.val}</span>
                      {cell.best && (
                        <span style={parseInlineStyle('background:#E6F5F2;color:#0F766E;border-radius:99px;padding:2px 9px;font-size:10px;font-weight:700;letter-spacing:.3px;')}>
                          LOWEST
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                  <div
                    style={parseInlineStyle(
                      'position:sticky;left:0;background:#fff;z-index:1;padding:16px;font-size:13px;font-weight:700;color:#6B6459;border-bottom:1px solid #F5F1EB;display:flex;align-items:center;',
                    )}
                  >
                    The one honest tradeoff
                  </div>
                  {v.tradeoffCells.map((cell, i) => (
                    <div key={i} style={parseInlineStyle(cell.style)}>
                      <span style={parseInlineStyle('font-size:13px;line-height:1.5;color:#6B6459;')}>{cell.text}</span>
                    </div>
                  ))}
                </div>
                <div style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                  <div
                    style={parseInlineStyle(
                      'position:sticky;left:0;background:#fff;z-index:1;padding:16px;font-size:13px;font-weight:700;color:#6B6459;border-bottom:1px solid #F5F1EB;display:flex;align-items:center;',
                    )}
                  >
                    Make it my finalist
                  </div>
                  {v.finalizeCells.map((fc, i) => (
                    <div key={i} style={parseInlineStyle(fc.style)}>
                      <div style={parseInlineStyle('display:flex;align-items:center;gap:8px;width:100%;')}>
                        <button onClick={fc.onClick} style={parseInlineStyle(fc.btnStyle)}>
                          Make this my finalist →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={v.toggleCompareSpecs}
                  style={parseInlineStyle(
                    'width:100%;text-align:left;background:#FBF8F3;border:none;border-top:1px solid #F5F1EB;padding:14px 16px;font-size:13px;font-weight:700;color:#0F766E;cursor:pointer;font-family:inherit;display:flex;justify-content:space-between;',
                  )}
                >
                  Specs &amp; safety<span style={parseInlineStyle('color:#9C9189;')}>{v.compareSpecsCaret}</span>
                </button>
                {v.compareSpecsOpen &&
                  v.specRows.map((r, ri) => (
                    <div key={ri} style={parseInlineStyle(`display:grid;grid-template-columns:${v.gridCols};`)}>
                      <div
                        style={parseInlineStyle(
                          'position:sticky;left:0;background:#fff;z-index:1;padding:14px 16px;font-size:12px;font-weight:600;color:#9C9189;text-transform:uppercase;letter-spacing:.4px;border-bottom:1px solid #F5F1EB;display:flex;align-items:center;',
                        )}
                      >
                        {r.label}
                      </div>
                      {r.cells.map((rc, rci) => (
                        <Fragment key={rci}>
                          <div style={parseInlineStyle('padding:14px 16px;border-bottom:1px solid #F5F1EB;border-left:1px solid #F5F1EB;font-size:13px;font-weight:600;color:#1C1A17;display:flex;align-items:center;')}>
                            {rc.v}
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
