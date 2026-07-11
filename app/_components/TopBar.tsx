import { Fragment } from 'react';
import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';

export default function TopBar({ v }: { v: AppView }) {
  return (
    <div
      style={parseInlineStyle(
        'position:fixed;top:0;left:0;right:0;height:56px;background:#fff;border-bottom:1px solid #e4e4e7;display:flex;align-items:center;gap:14px;padding:0 22px;z-index:100;',
      )}
    >
      <button
        onClick={v.goShortlist}
        style={parseInlineStyle('display:flex;align-items:center;gap:9px;flex-shrink:0;background:none;border:none;cursor:pointer;font-family:inherit;padding:0;')}
      >
        <div style={parseInlineStyle('width:22px;height:22px;border-radius:6px;background:#1e3a8a;')}></div>
        <span style={parseInlineStyle('font-weight:800;font-size:16px;letter-spacing:-.3px;color:#18181b;')}>Lot Agent</span>
      </button>
      <div style={parseInlineStyle('flex:1;')}></div>
      {v.sShortlist && (
        <div style={parseInlineStyle('position:relative;flex-shrink:0;')}>
          <button onClick={v.toggleAlerts} aria-label="Alerts" style={parseInlineStyle(v.bellBtnStyle)}>
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
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 01-3.46 0"></path>
            </svg>
            {v.hasAlerts && (
              <span
                style={parseInlineStyle(
                  'position:absolute;top:1px;right:1px;min-width:17px;height:17px;padding:0 4px;border-radius:99px;background:#e21d15;color:#fff;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #fff;',
                )}
              >
                {v.alertCount}
              </span>
            )}
          </button>

          {v.alertsOpen && (
            <>
              <div onClick={v.closeAlerts} style={parseInlineStyle('position:fixed;inset:0;z-index:110;')}></div>
              <div
                style={parseInlineStyle(
                  'position:absolute;top:calc(100% + 12px);right:0;width:400px;max-width:calc(100vw - 44px);background:#fff;border:1px solid #e4e4e7;border-radius:16px;box-shadow:0 18px 50px rgba(0,0,0,.18);z-index:120;overflow:hidden;',
                )}
              >
                <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;padding:16px 18px;border-bottom:1px solid #f0f0f1;')}>
                  <div style={parseInlineStyle('display:flex;align-items:center;gap:9px;')}>
                    <span style={parseInlineStyle('font-size:15px;font-weight:800;letter-spacing:-.2px;')}>Notifications</span>
                    {v.hasAlerts && (
                      <span
                        style={parseInlineStyle(
                          'background:#1e3a8a;color:#fff;border-radius:99px;font-size:11px;font-weight:800;min-width:19px;height:19px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;',
                        )}
                      >
                        {v.alertCount}
                      </span>
                    )}
                  </div>
                  {v.hasAlerts && (
                    <button onClick={v.clearAllAlerts} style={parseInlineStyle('background:none;border:none;color:#1e3a8a;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;')}>
                      Clear all
                    </button>
                  )}
                </div>
                <div style={parseInlineStyle('max-height:calc(100vh - 130px);overflow-y:auto;')}>
                  {v.noAlerts && (
                    <div style={parseInlineStyle('padding:44px 24px;text-align:center;')}>
                      <div
                        style={parseInlineStyle(
                          'width:44px;height:44px;border-radius:12px;background:#f4f4f5;color:#a1a1aa;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;',
                        )}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                          <path d="M13.73 21a2 2 0 01-3.46 0"></path>
                        </svg>
                      </div>
                      <div style={parseInlineStyle('font-size:15px;font-weight:700;margin-bottom:4px;')}>You&apos;re all caught up</div>
                      <div style={parseInlineStyle('font-size:13px;color:#71717a;line-height:1.5;max-width:260px;margin:0 auto;')}>
                        Your agent keeps watching your saved cars — new price drops and matches will show up here.
                      </div>
                    </div>
                  )}
                  {v.alertList.map((a, i) => (
                    <Fragment key={i}>
                      <div style={parseInlineStyle('position:relative;padding:16px 18px;border-bottom:1px solid #f4f4f5;')}>
                        <button
                          onClick={a.onDismiss}
                          aria-label="Dismiss"
                          style={parseInlineStyle('position:absolute;top:13px;right:13px;background:none;border:none;color:#c4c4cc;font-size:17px;line-height:1;cursor:pointer;font-family:inherit;padding:2px;')}
                        >
                          ×
                        </button>
                        <div style={parseInlineStyle('display:flex;align-items:center;gap:9px;margin-bottom:9px;')}>
                          <span style={parseInlineStyle(a.tagStyle)}>{a.type}</span>
                          <span style={parseInlineStyle('width:4px;height:4px;border-radius:50%;background:#d4d4d8;')}></span>
                          <span style={parseInlineStyle('font-size:12px;color:#a1a1aa;font-weight:600;')}>{a.time}</span>
                        </div>
                        <div onClick={a.onOpen} style={parseInlineStyle(a.bodyStyle)}>
                          <div style={parseInlineStyle('font-size:15px;font-weight:700;letter-spacing:-.2px;margin-bottom:4px;padding-right:16px;')}>{a.title}</div>
                          <div style={parseInlineStyle('font-size:13px;line-height:1.55;color:#52525b;')}>{a.body}</div>
                          {a.hasCta && (
                            <div style={parseInlineStyle('font-size:12.5px;font-weight:700;color:#1e3a8a;margin-top:9px;')}>{a.cta} →</div>
                          )}
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
