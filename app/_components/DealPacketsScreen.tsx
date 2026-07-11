import type { AppView } from '../_lib/types';
import { parseInlineStyle } from '../_lib/parseInlineStyle';
import ImageSlot from './ImageSlot';

export default function DealPacketsScreen({ v }: { v: AppView }) {
  return (
    <div data-screen-label="Deal Packets" style={parseInlineStyle('min-height:calc(100vh - 46px);')}>
      <div style={parseInlineStyle('max-width:820px;margin:0 auto;padding:28px 32px 60px;')}>
        <button
          onClick={v.goShortlist}
          style={parseInlineStyle('background:none;border:none;color:#71717a;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;margin-bottom:14px;')}
        >
          ← Back to your Top picks
        </button>
        <h1 style={parseInlineStyle('font-size:26px;font-weight:800;letter-spacing:-.6px;margin:0;')}>Your deal packets</h1>
        <p style={parseInlineStyle('font-size:14px;color:#71717a;margin:5px 0 22px;')}>
          Every negotiation packet your agent has built. Open one to pick up right where you left off.
        </p>
        <div style={parseInlineStyle('display:flex;flex-direction:column;gap:12px;')}>
          {v.packetList.map((p, i) => (
            <button
              key={i}
              onClick={p.onOpen}
              style={parseInlineStyle('display:flex;align-items:center;gap:16px;text-align:left;width:100%;background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:14px;font-family:inherit;cursor:pointer;')}
            >
              <div style={parseInlineStyle('width:96px;height:66px;border-radius:10px;overflow:hidden;flex-shrink:0;position:relative;')}>
                <ImageSlot src={p.slotSrc} alt={p.slotPlaceholder} />
              </div>
              <div style={parseInlineStyle('flex:1;min-width:0;')}>
                <div style={parseInlineStyle('display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-bottom:4px;')}>
                  <span style={parseInlineStyle('font-size:16px;font-weight:700;letter-spacing:-.2px;color:#18181b;')}>{p.name}</span>
                  <span style={parseInlineStyle(p.statusStyle)}>{p.status}</span>
                </div>
                <div style={parseInlineStyle('font-size:12.5px;color:#71717a;')}>
                  {p.dealer} · Created {p.date}
                </div>
              </div>
              <div style={parseInlineStyle('text-align:right;flex-shrink:0;')}>
                <div style={parseInlineStyle('font-size:18px;font-weight:800;color:#18181b;letter-spacing:-.3px;')}>{p.monthly}</div>
                <div style={parseInlineStyle('font-size:12px;color:#a1a1aa;')}>{p.otd} OTD</div>
              </div>
              <span style={parseInlineStyle('color:#c4c4cc;font-size:20px;flex-shrink:0;line-height:1;')}>›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
