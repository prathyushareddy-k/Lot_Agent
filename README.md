# Lot Agent

An AI car-buying agent. The user answers a short, plain-language intake, then the agent continuously scans dealer, private-party, and CPO listings, ranks cars against the user's actual priorities, judges whether a deal is good against real comps, and produces a ready-to-use negotiation packet — instead of making the buyer research and compare cars themselves.

> **Status:** Interactive front-end prototype only. No backend, no live data, no persistence — all car/comp/scan data in the prototype is hardcoded for demonstration.

## What's in this repo

| File | Purpose |
|---|---|
| `Lot_Agent.html` | The clickable prototype (single bundled HTML file — open directly in a browser, no server needed) |
| `docs/01_assumption_map.md` | Riskiest assumptions and how to test them |
| `docs/02_personas.md` | Target user personas, derived from the intake options |
| `docs/03_product_brief.md` | One-page problem/solution/why-now summary |
| `docs/04_prd.md` | Full functional spec, screen by screen |
| `docs/05_project_note.md` | Current status + immediate next steps |

*(Adjust the paths above to match wherever you actually place the doc files in the repo — e.g. `/docs` vs repo root.)*

## Viewing the prototype

Open `Lot_Agent.html` directly in a browser. No install, build step, or server required — it's a self-contained bundle.

## Product flow covered in the prototype

Landing → Intake (multi-step) → Scanning → Shortlist → Compare → Listing Detail (Deal Judge) → Deal Packet, plus a proactive "Re-plan" notification pattern, a mobile layout, and a reusable-components reference screen.

Full screen-by-screen requirements are in `docs/04_prd.md`.

## Known open questions

- Real data source for listings, dealer inventory, and comp sales — coverage and refresh latency unconfirmed
- How "negotiation headroom" and out-the-door totals should actually be computed
- Auth/account model, and what happens after "Send to seller"

Full list in `docs/04_prd.md` (Section 6) and `docs/05_project_note.md`.

## Suggested reading order

1. `docs/03_product_brief.md` — the why, in five minutes
2. `docs/02_personas.md` — who this is for
3. `docs/01_assumption_map.md` — what we don't know yet
4. `docs/04_prd.md` — the detailed spec

## License / Ownership

_Add license and internal ownership/contact info here._