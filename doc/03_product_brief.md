# Product Brief — Lot Agent

## One-line summary
Lot Agent is an AI car-buying agent: the user answers a short plain-language intake, and the agent continuously scans dealer and private-party listings, ranks cars against the user's actual priorities, judges whether a deal is good, and hands the user a ready-to-use negotiation packet — rather than making them research and compare cars themselves.

## Problem
Sites like Edmunds, KBB, and Carvana are *reference* tools — they describe cars and show listings, but leave the hard parts to the buyer:
- Translating vague preferences ("reliable," "not too expensive") into a ranked shortlist
- Knowing whether a specific listing's asking price is actually good, given real comps
- Knowing what to say to a seller and where to stop negotiating
- Continuously monitoring the market between visits, since prices and inventory shift daily

Most buyers — especially first-timers and time-poor buyers — don't have the expertise or time to do this well, and end up either overpaying or overwhelmed.

## Solution
An agent-first flow with four moments of value:
1. **Intake** — plain-language questions (use case, budget style, timeline, search radius, condition, must-haves, weighted priorities) replace car-model literacy.
2. **Scanning** — a visible "agent is watching" state scans franchise dealers, private-party listings, CPO inventory, comp sales, and safety/recall data, day and night.
3. **Shortlist & Deal Judge** — cars ranked by a personalized Fit Score, each labeled Good deal / Fair price / Overpriced against real comps, with an honest tradeoff callout instead of a false "perfect match."
4. **Deal Packet** — once the user picks a finalist: an offer worksheet, an open/settle/walk-away negotiation script, a model-specific test-drive checklist, and a ready-to-send outreach message to the seller.
A **Re-plan** notification pattern keeps the agent proactive: when market conditions shift enough to change the recommendation, the user is told in plain language, with the reasoning shown.

## Target users
See `02_personas.md`. In short: first-time buyers who need confidence, budget-driven commuters who need total-cost clarity, family buyers with hard requirements who need passive monitoring, and experienced negotiators who need leverage and transparent comps.

## Why now
- Conversational/agentic AI makes "answer a few questions, let an agent work" viable UX for a decision people used to feel they had to research themselves.
- Real-time listing and comp-sale data is more accessible via aggregators/APIs than it used to be.
- Buyer trust in dealerships is historically low (surveys consistently show negotiation anxiety as a top pain point in auto purchase) — an agent that negotiates *for* the buyer directly addresses that.

## Scope of this prototype
Included (per the built screens): Landing, Intake (multi-step), Scanning (animated progress), Shortlist, Compare, Re-plan notification, Listing Detail with Deal Judge, Deal Packet, a reusable-components reference screen, and a mobile shortlist view.

Not yet designed/built (flagged for later scoping): account creation/auth, saved searches across sessions, actual messaging/inbox with sellers, payment/financing application flow, post-purchase support, failure/recovery states (seller declines, deal falls through).

## Success metrics (proposed — to be validated, see assumption map)
- **Activation:** % of users who complete intake and reach the shortlist
- **Trust:** % of users who accept the top-ranked car vs. override it
- **Outcome:** median difference between asking price and price actually paid, for users who used the Deal Packet
- **Retention/engagement:** % of users still "watching" (returning after a re-plan notification) at day 14

## Key risks
See `01_assumption_map.md` for the full breakdown — the two biggest are (1) whether real-time listing/comp data is actually obtainable at the freshness this UX promises, and (2) whether users will trust an agent enough to defer to its picks and script rather than doing their own research anyway.
