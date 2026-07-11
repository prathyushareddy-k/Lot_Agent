import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';
import ImageSlot from './ImageSlot';

export default function MobileShortlistScreen({ v }: { v: AppView }) {
  return (
    <div
      data-screen-label="Mobile Shortlist"
      style={parseInlineStyle('min-height:calc(100vh - 46px);display:flex;flex-direction:column;align-items:center;padding:36px 20px;')}
    >
      <p style={parseInlineStyle('font-size:14px;color:#71717a;margin:0 0 22px;text-align:center;max-width:420px;')}>
        The Shortlist Dashboard responsive to mobile — the brief collapses into a top bar, cards stack full-width.
      </p>
      <div style={parseInlineStyle('width:390px;height:780px;background:#18181b;border-radius:42px;padding:11px;box-shadow:0 20px 50px rgba(0,0,0,.25);flex-shrink:0;')}>
        <div style={parseInlineStyle('width:100%;height:100%;background:#f4f4f5;border-radius:32px;overflow:hidden;display:flex;flex-direction:column;')}>
          <div style={parseInlineStyle('background:#fff;border-bottom:1px solid #e4e4e7;padding:14px 16px 12px;flex-shrink:0;')}>
            <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:center;')}>
              <span style={parseInlineStyle('font-weight:800;font-size:17px;')}>Your shortlist</span>
              <span style={parseInlineStyle('display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#1e8a5b;')}>
                <span style={parseInlineStyle('width:7px;height:7px;border-radius:50%;background:#1e8a5b;')}></span>
                Watching
              </span>
            </div>
            <div style={parseInlineStyle('font-size:11px;color:#71717a;margin-top:4px;')}>$450/mo · Commute · 60 mi · Last scan 6 min ago</div>
          </div>
          <div style={parseInlineStyle('flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px;')}>
            {v.cars.map(c => (
              <div key={c.id} style={parseInlineStyle('background:#fff;border:1px solid #e4e4e7;border-radius:13px;overflow:hidden;')}>
                <div style={parseInlineStyle('height:96px;overflow:hidden;position:relative;')}>
                  <ImageSlot src={c.slotSrc} alt={c.slotPlaceholder} />
                </div>
                <div style={parseInlineStyle('padding:13px;')}>
                  <div style={parseInlineStyle('display:flex;justify-content:space-between;align-items:flex-start;gap:8px;')}>
                    <div style={parseInlineStyle('font-size:15px;font-weight:700;line-height:1.2;')}>{c.name}</div>
                    <div style={parseInlineStyle(`width:34px;height:34px;border-radius:9px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;${c.fitBg}`)}>
                      {c.fit}
                    </div>
                  </div>
                  <div style={parseInlineStyle('display:flex;align-items:baseline;gap:7px;margin-top:9px;')}>
                    <span style={parseInlineStyle('font-size:17px;font-weight:800;color:#18181b;letter-spacing:-.3px;')}>{c.tco}</span>
                    <span style={parseInlineStyle('font-size:11px;color:#a1a1aa;font-weight:600;')}>all-in/mo</span>
                  </div>
                  <div style={parseInlineStyle('display:flex;align-items:center;gap:8px;margin-top:7px;')}>
                    <span style={parseInlineStyle(c.dealStyle)}>{c.dealLabel}</span>
                    <span style={parseInlineStyle('font-size:12px;color:#52525b;')}>{c.otd} OTD</span>
                  </div>
                  <div style={parseInlineStyle('margin-top:8px;font-size:11px;color:#71717a;')}>
                    {c.condition} · {c.fuelType} · {c.dealer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
