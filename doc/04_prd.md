# PRD — Lot Agent

**Status:** Draft, based on interactive prototype · **Owner:** TBD · **Last updated:** derived from prototype review

## 1. Overview
Lot Agent is an AI agent that takes a buyer from "I need a car" to "here's my negotiation packet," replacing manual research with a guided intake, continuous market scanning, personalized ranking, and deal-quality judgment. Full context in `03_product_brief.md`.

## 2. Goals
- Let a user with zero car-shopping expertise reach a confident, ranked shortlist in one sitting.
- Make "is this a good deal" an answerable question, backed by visible comps rather than a black box.
- Convert a chosen listing into a usable negotiation packet without extra research.
- Keep working for the user passively after intake, surfacing changes only when they matter.

## 3. Non-goals (this version)
- Financing application or credit decisioning
- In-app messaging/chat with sellers (v1 only generates a message to copy/send)
- Multi-vehicle household management or fleet use cases
- Post-sale service (insurance, maintenance reminders, resale later)

## 4. User flows & functional requirements

### 4.1 Landing
- **FR-1:** Display value proposition and a single primary CTA ("Start — answer a few questions").
- **FR-2:** Display a 3-step "How it works" explainer (Answer questions → Agent watches the market → Get a negotiation packet) before any commitment is asked of the user.

### 4.2 Intake (multi-step)
- **FR-3:** Collect, in discrete steps: primary use (commute / family / weekend / first car), search area (zip + radius), timeline (ASAP / month / quarter / exploring), budget (toggle between monthly-payment mode [monthly amount, down payment, term] and cash-total mode), preference weights (reliability, resale, running cost, performance as adjustable sliders), condition preference (used / CPO / new / open to all), and must-have toggles (AWD, CarPlay/Android Auto, backup camera, 35+ mpg, third row, manual transmission).
- **FR-4:** Show a running progress indicator across intake steps.
- **FR-5:** Provide a summary/review step listing all answers with an "edit" affordance that jumps back to the relevant step.
- **FR-6:** Support back/next navigation without losing entered data.

### 4.3 Scanning
- **FR-7:** After intake, show a sequential progress state naming each data source being checked (franchise & independent dealer inventory, private-party listings, CPO inventory, 30-day comparable sales for pricing, recalls/safety/reliability data) with live counts as each completes.
- **FR-8:** Auto-advance to the Shortlist once scanning completes.

### 4.4 Shortlist
- **FR-9:** Display ranked cars, each with: name/trim, mileage, distance, a Fit Score (0–100, visually tiered: ≥85 strong / 75–84 good / <75 fair), a deal-quality pill (Good deal / Fair price / Overpriced), and total cost of ownership (TCO) per month.
- **FR-10:** Support expanding a car to see pros/cons.
- **FR-11:** Support multi-select "compare" across cars, with a way to clear the selection.
- **FR-12:** Persistent "agent is watching" status indicator with a last-scanned timestamp.

### 4.5 Compare
- **FR-13:** Side-by-side view of user-selected cars showing Fit Score, deal label, TCO, and pros/cons per car.

### 4.6 Re-plan (proactive notification)
- **FR-14:** When market conditions change enough to alter the recommendation, generate a plain-language explanation (what changed, why it changes the recommendation, what to do differently) rather than a raw data update.
- **FR-15:** Unfamiliar terms inside explanations (e.g., "certified pre-owned") must render with a hover/tap definition rather than assuming user knowledge.

### 4.7 Listing Detail
- **FR-16:** Show weighted-preference tradeoff bars (e.g., reliability, resale, running cost, performance) matched against the specific listing, each with a short note.
- **FR-17:** Include an explicit "honest tradeoff" statement — at least one area where the car does *not* fully match the user's stated priorities — rather than presenting only positives.
- **FR-18:** Show a specs/safety/history grid (key-value facts).
- **FR-19:** Show a Deal Judge module: verdict label, asking price vs. comp average with dollar delta, comp sample size and window (e.g., "12 comparable sales in the last 30 days"), and an estimated negotiation headroom range.
- **FR-20:** Primary CTA to promote the listing to "finalist" and generate the Deal Packet.

### 4.8 Deal Packet
- **FR-21:** Offer worksheet: itemized rows (price, fees, tax, etc. — implementation-specific) culminating in an out-the-door total.
- **FR-22:** Negotiation script: open / settle-near / walk-away price points, plus word-for-word phrasing the user can say, with an explanatory callout on why a pre-committed walk-away number matters.
- **FR-23:** Test-drive checklist tailored to known issues for that specific model/year.
- **FR-24:** Outreach message: pre-written message to the seller, with copy-to-clipboard and a "send to seller" action.

### 4.9 Cross-cutting
- **FR-25:** A persistent top navigation lets users jump between major screens/steps during the prototype phase (may be simplified/removed for production — see Open Questions).
- **FR-26:** A toggleable "notes" mode surfaces inline design rationale callouts (prototype/dev aid — not for production).
- **FR-27:** Mobile responsive layout: header collapses to a compact bar; shortlist cards stack full-width.

## 5. Non-functional requirements
- **NFR-1 (Trust/Transparency):** Every scored or labeled output (Fit Score, Deal Judge verdict, negotiation headroom) must be explainable — the user should be able to see *why*, not just the number.
- **NFR-2 (Plain language):** No unexplained jargon; domain terms get inline definitions.
- **NFR-3 (Data freshness):** Comp-sale and listing data underlying the Deal Judge should be clearly time-stamped (e.g., "last 30 days," "last scanned 6 min ago") since staleness undermines the core promise.
- **NFR-4 (Accessibility):** Interactive elements (sliders, toggles, expandables) must be keyboard-operable and screen-reader labeled — not yet verified in the current prototype markup.

## 6. Open questions
1. What is the actual data source/vendor for listings, dealer inventory, and comp sales, and what does refresh latency realistically look like?
2. How is the "negotiation headroom" number computed, and how confident should its presentation be (single range vs. explicit confidence level)?
3. Should the persistent nav bar and "notes" toggle exist in the production app, or are they prototype-only scaffolding?
4. What happens after "Send to seller" — is there an inbox/thread, or does it hand off to email/SMS entirely?
5. How is a "re-plan" event triggered and rate-limited so it's not noisy?
6. What's the auth/account model — is a shortlist tied to a login, a session, or a shareable link?

## 7. Out of scope for this PRD
Backend architecture, data licensing/legal review, pricing/monetization model, and go-to-market — see `05_project_note.md` for immediate next steps on these.
