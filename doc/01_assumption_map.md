# Assumption Map — Lot Agent

An assumption map sorts what the prototype depends on into how *risky* it is (do we actually know this is true?) and how *important* it is (does the whole product fall apart if it's wrong?). Riskiest + most important = test first.

## Leap-of-faith assumptions (high risk, high importance — test first)

| # | Assumption | Why it's risky | How to test it |
|---|---|---|---|
| 1 | People will trust an agent to negotiate price on their behalf without seeing every listing themselves | Car buying is high-stakes and low-trust; many buyers *want* to feel in control | Concierge test: manually run this process for 10 real car shoppers, measure how much they defer to the agent's picks vs. override them |
| 2 | We can reliably scrape/access enough live dealer, private-party, and CPO listing data to make "Agent is watching" true, not theater | This is the entire value prop — if data refreshes are stale or thin, "watching" is fake | Technical spike: pull real listing + comp-sale data for 3 test markets, measure coverage and refresh latency |
| 3 | A computed "Fit Score" and "Good deal / Fair / Overpriced" label will be perceived as trustworthy and not just another black-box number | Users already distrust dealer markups and opaque scoring (like credit scores) | Show the score with and without the reasoning breakdown in a test; measure trust/confidence ratings |
| 4 | The negotiation packet (script + walk-away price + outreach message) actually changes real-world outcomes (lower price paid) | This is the ROI claim of the product; if it doesn't move price, the product is just a research tool | Field test: track asking price vs. actual agreed price for users who use the packet vs. a control group who don't |
| 5 | Users will complete an 8-step intake before seeing any cars | Long intake before any payoff is a classic drop-off point | Funnel test on the prototype: measure step-by-step completion; consider a "skip to rough results" path |

## Important but lower-risk (we're fairly confident, still worth a light check)

| # | Assumption | Confidence source |
|---|---|---|
| 6 | Users can articulate budget as either monthly payment or cash total | Common mental model in auto shopping (matches Edmunds/TrueCar/Carvana patterns) |
| 7 | Plain-language explanations ("certified pre-owned" hover definitions) reduce confusion for non-experts | Well-established pattern in fintech/insurance UX |
| 8 | A single accent color + fit-score badge + deal-rating pill is enough visual language across screens | Internal design-system choice, low external risk |
| 9 | Push-style "Your plan changed" notifications are welcome, not annoying | Depends on frequency — needs a cadence/frequency cap, but concept itself is low-risk |

## Low risk / low importance (don't spend time validating yet)

- Exact color of the "Overpriced" pill
- Whether the mobile shortlist uses a phone-frame mockup vs. full width
- Copy wording on secondary buttons ("Send to seller →")

## Assumptions currently *hidden* in the prototype that need to be surfaced as decisions

- **Who verifies the negotiation numbers?** The prototype shows "$700–$1,200 headroom" and an exact out-the-door total ($26,180) as if computed with certainty — real fees/tax/title vary by state and dealer. Needs a disclaimer or a "confidence range" framing.
- **What happens when the agent is wrong?** No screen currently shows a "the deal fell through" or "seller declined" recovery path — worth deciding if that's in scope for v1.
- **Data source licensing/cost** for comp sales and dealer inventory is assumed solvable; it may be the single biggest cost and legal risk in the whole plan.
