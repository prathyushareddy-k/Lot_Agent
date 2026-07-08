# Project Note — Lot Agent

**Purpose of this note:** a short, shareable status/context doc — what this is, where it stands, and what's needed next. Meant to sit alongside the brief/PRD, not repeat them in full.

## What exists today
A clickable, front-end-only prototype (single bundled HTML/JS artifact) covering the full user journey end-to-end: Landing → Intake → Scanning → Shortlist → Compare → Listing Detail (Deal Judge) → Deal Packet, plus a Re-plan notification pattern, a components reference sheet, and a mobile layout. All data (cars, comps, scores) is hardcoded/simulated — there is no real backend, no live listing data, and no persistence.

## What this proves
- The end-to-end narrative holds together: a non-expert can plausibly go from "I need a car" to "here's what to say to the seller" without ever needing to know model names or specs up front.
- The visual/interaction language (Fit Score badge, deal-rating pill, "agent is watching" indicator, plain-English explanation cards) is consistent and reusable across screens.

## What this does NOT prove yet
- Whether real listing, dealer-inventory, and comp-sale data can be sourced with the freshness and coverage the UX promises.
- Whether real users trust the agent enough to act on its ranking and script rather than falling back to their own research.
- Whether the negotiation packet changes actual purchase outcomes (lower price paid).
- Cost/legal feasibility of continuous market scanning per user.

(Full breakdown in `01_assumption_map.md`.)

## Immediate next steps
1. **Validate the leap-of-faith assumptions** before building backend infrastructure — start with a small concierge test (manually assemble the shortlist + deal packet for ~10 real car shoppers) to test trust and outcome impact cheaply.
2. **Data spike:** confirm a real, legally usable source for dealer inventory, private-party listings, CPO stock, and comp sales in at least one test market; get real numbers on refresh latency and coverage.
3. **Resolve the open questions in the PRD** (Section 6) — especially how "negotiation headroom" is computed and what happens after "Send to seller."
4. **Decide production scope for v1** using the persona-to-feature map in `02_personas.md` — likely start with the Daniel (commuter) and Maya (first-timer) journeys since they're the most linear, and defer Compare/multi-select for a fast-follow.
5. **Legal/compliance review** for anything that looks like financial/negotiation advice, and for scraping or licensing third-party listing data.

## Suggested reading order for stakeholders
1. `03_product_brief.md` — the "why," in five minutes.
2. `02_personas.md` — who this is for.
3. `01_assumption_map.md` — what we don't actually know yet, and how to find out cheaply.
4. `04_prd.md` — the detailed functional spec, screen by screen.

## Open decisions needing an owner
- Data/vendor sourcing strategy (see above)
- Production scope of the persistent nav / dev "notes" toggle (prototype-only vs. kept)
- Business model (are we charging the buyer, the dealer, or taking a referral/affiliate fee — this materially affects whether "Deal Judge" incentives stay user-aligned)
