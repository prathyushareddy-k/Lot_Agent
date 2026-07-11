import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Mirrors the hardcoded carData in app/_lib/useAppView.ts, so the DB starts
// out consistent with what the UI currently shows before it's wired up.
const cars = [
  {
    id: 'crv', name: '2021 Honda CR-V EX', miles: '38k mi', distance: '14 mi away', fit: 92, deal: 'Good', tco: '$430', otd: '$26,860', condition: 'Certified pre-owned', fuelType: 'Gas', dealer: 'Peninsula Honda',
    pros: ['Bulletproof reliability record', 'Roomy for car seats + gear', 'Holds value in 3 years'], cons: ['Not exciting to drive'],
    why: "Honestly, this is the safe, smart pick for you. You told me reliability matters most — the CR-V is about as dependable as it gets, and this one is a single-owner car priced below comparable listings. The only real catch is fuel cost runs a touch over your target, but on total cost it still comes out ahead.",
  },
  {
    id: 'rav4', name: '2020 Toyota RAV4 LE', miles: '41k mi', distance: '22 mi away', fit: 88, deal: 'Fair', tco: '$455', otd: '$25,400', condition: 'Used', fuelType: 'Hybrid', dealer: 'Bay City Motors',
    pros: ['Top-tier reliability', 'Great mpg for the class'], cons: ['Priced a bit high right now', 'Base trim feels plain'],
    why: "Every bit as dependable as the CR-V and a little better on gas. The catch is timing — RAV4 prices are running hot this month, so you'd pay closer to fair value than a steal. Worth watching for a price drop.",
  },
  {
    id: 'cx5', name: '2019 Mazda CX-5 Touring', miles: '46k mi', distance: '31 mi away', fit: 81, deal: 'Good', tco: '$390', otd: '$21,400', condition: 'Used', fuelType: 'Gas', dealer: 'Private seller · Oakland',
    pros: ['Most fun to drive here', 'Nicer cabin than rivals', 'Lowest monthly cost'], cons: ['Tighter rear seat', 'Slightly thirstier'],
    why: "If driving feel matters to you at all, this is the one to test-drive. It's the cheapest to run on this list and the interior punches above its price. It scores a bit lower only because reliability — your top priority — is good but not Toyota/Honda great.",
  },
  {
    id: 'forester', name: '2018 Subaru Forester', miles: '52k mi', distance: '19 mi away', fit: 76, deal: 'Over', tco: '$470', otd: '$24,200', condition: 'Certified pre-owned', fuelType: 'Gas', dealer: 'Golden Gate Subaru',
    pros: ['Standard AWD', 'Excellent visibility'], cons: ['This listing is above market', 'Older infotainment'],
    why: "Great all-weather pick with standard AWD and famously easy to see out of. I'm flagging it as overpriced though — this specific listing sits above what comparable Foresters are selling for, so I'd only pursue it if they come down.",
  },
  {
    id: 'niroev', name: '2024 Kia Niro EV Wind', miles: '12 mi (new)', distance: '17 mi away', fit: 84, deal: 'Fair', tco: '$415', otd: '$34,600', condition: 'New', fuelType: 'Electric', dealer: 'Serramonte Kia',
    pros: ['Cheapest to run — home charging', 'Full factory warranty', 'No maintenance for years'], cons: ['~250 mi range', 'Public charging adds up'],
    why: "If you can charge at home, this is the quiet dark-horse pick. It's brand new with a full warranty, so there's nothing to worry about for years, and your monthly running cost drops well below the gas cars. The only real question is range — 250 miles is plenty for your commute, less so for long road trips.",
  },
  {
    id: 'civic', name: '2024 Honda Civic Sport', miles: '8 mi (new)', distance: '11 mi away', fit: 83, deal: 'Good', tco: '$425', otd: '$28,400', condition: 'New', fuelType: 'Gas', dealer: 'Peninsula Honda',
    pros: ['Brand-new, nothing to fix', 'Great mpg for a gas car', 'Holds value extremely well'], cons: ['Smaller than the SUVs', 'Firm ride on rough roads'],
    why: "The safe brand-new option. You get Honda reliability with zero miles and a full warranty, priced right at what comparable new Civics are going for nearby. It's smaller than the crossovers on your list, so it comes down to whether you need the extra cargo room or would rather have something fresh.",
  },
];

// Mirrors packetData in app/_lib/useAppView.ts.
const dealPackets = [
  {
    carId: 'crv', status: 'Ready to send', statusTone: 'green', generated: 'Ready to use today',
    otdTotal: '$26,180', monthly: '$430/mo', openOffer: '$22,400', settle: '$23,000', walkAway: '$23,600',
    worksheet: [
      { k: 'Asking price', v: '$23,900', color: '#27272a', weight: '600' },
      { k: 'Negotiated price (target)', v: '$23,000', color: '#1e8a5b', weight: '700' },
      { k: 'Doc & dealer fees', v: '+ $485', color: '#52525b', weight: '500' },
      { k: 'Sales tax (est.)', v: '+ $2,012', color: '#52525b', weight: '500' },
      { k: 'Title & registration', v: '+ $383', color: '#52525b', weight: '500' },
      { k: 'First payment', v: '+ $300', color: '#52525b', weight: '500' },
    ],
    scriptLines: [
      "I've done my homework — comparable EX trims nearby are selling around $23,000, and this one's been on your lot 41 days. I can do $22,400 today, cash-ready.",
      "I hear you. I can come up to $23,000 even, out the door — that works for both of us and I can sign this afternoon.",
      "That's over where the comps put it, so I'll have to pass — but here's my number if anything changes.",
    ],
    checklist: [
      'Cold-start the engine — listen for the known VTC actuator rattle on first startup',
      'Check infotainment screen for flicker or reboot (2021 software bug)',
      'Confirm AC blows cold at idle, not just while driving',
      'Inspect rear cargo seal for water staining',
      'Verify all driver-assist features (lane keep, adaptive cruise) engage',
      'Ask for service records — timing belt / brake history',
    ],
    outreach:
      "Hi — I'm interested in your 2021 CR-V EX (listing #4471). I'm a serious, financing-ready buyer and can come see it this week.\n\nBased on recent comparable sales nearby, I'd be looking at around $23,000 out the door. If that's workable, I can schedule a test drive and move quickly.\n\nIs the car still available, and are there any service records you can share? Thanks!",
  },
  {
    carId: 'rav4', status: 'Draft', statusTone: 'gray', generated: 'Draft — awaiting your review',
    otdTotal: '$25,410', monthly: '$455/mo', openOffer: '$22,900', settle: '$23,600', walkAway: '$24,100',
    worksheet: [
      { k: 'Asking price', v: '$23,600', color: '#27272a', weight: '600' },
      { k: 'Negotiated price (target)', v: '$23,600', color: '#1e8a5b', weight: '700' },
      { k: 'Doc & dealer fees', v: '+ $499', color: '#52525b', weight: '500' },
      { k: 'Sales tax (est.)', v: '+ $1,985', color: '#52525b', weight: '500' },
      { k: 'Title & registration', v: '+ $383', color: '#52525b', weight: '500' },
      { k: 'First payment', v: '+ $343', color: '#52525b', weight: '500' },
    ],
    scriptLines: [
      "RAV4 prices are running hot right now, so I know there's not much room — but this one's been listed a while. I can do $22,900 today, financing-ready.",
      "Let's meet in the middle at $23,600 out the door and I'll sign this week.",
      "That's above where comps sit this month, so I'll wait for the next price move — here's my number.",
    ],
    checklist: [
      'Check for the known 8-speed transmission hesitation from a stop',
      'Confirm hybrid battery health readout at the dealer',
      'Inspect for uneven front tire wear (alignment)',
      'Verify Apple CarPlay / Android Auto connects cleanly',
      'Cold-start and listen for cold-weather engine rattle',
      'Ask for full service + accident history',
    ],
    outreach:
      "Hi — I'm interested in your 2020 RAV4 LE. I'm financing-ready and can come see it this week.\n\nI know RAV4s are in demand; based on comparable sales I'd be targeting about $23,600 out the door. If that works, I'd love to set up a test drive.\n\nIs it still available, and can you share service records? Thanks!",
  },
  {
    carId: 'cx5', status: 'Sent', statusTone: 'blue', generated: 'Sent to seller · awaiting reply',
    otdTotal: '$21,360', monthly: '$390/mo', openOffer: '$18,900', settle: '$19,600', walkAway: '$20,100',
    worksheet: [
      { k: 'Asking price', v: '$20,400', color: '#27272a', weight: '600' },
      { k: 'Negotiated price (target)', v: '$19,600', color: '#1e8a5b', weight: '700' },
      { k: 'Doc & transfer fees', v: '+ $85', color: '#52525b', weight: '500' },
      { k: 'Sales tax (est.)', v: '+ $1,715', color: '#52525b', weight: '500' },
      { k: 'Title & registration', v: '+ $360', color: '#52525b', weight: '500' },
      { k: 'Smog + inspection', v: '+ $60', color: '#52525b', weight: '500' },
    ],
    scriptLines: [
      "I really like the car — it's a private sale so I'm ready to move fast. Comparable Touring trims are around $19,600. I can do $18,900 cash today.",
      "Happy to meet at $19,600, cash in hand, and we can do the transfer this weekend.",
      "That's a bit over what the comps support, so I'll pass for now — feel free to reach out if things change.",
    ],
    checklist: [
      'Cold-start and check for the known cylinder-deactivation shudder',
      'Inspect for curb rash and clear-coat peel (2019 paint issue)',
      'Confirm all four brakes are quiet and even',
      'Test the infotainment rotary dial and reverse camera',
      'Check tires for matching brand and even wear',
      'Get a pre-purchase inspection — private sale, no warranty',
    ],
    outreach:
      "Hi — I'm interested in your 2019 CX-5 Touring. I'm a cash-ready buyer and can meet this weekend.\n\nBased on recent comparable sales, I'd be looking at around $19,600. If that works for you, I can arrange a pre-purchase inspection and close quickly.\n\nIs it still available? Happy to answer any questions. Thanks!",
  },
];

// Mirrors alertDefs in app/_lib/useAppView.ts.
const alerts = [
  { type: 'PRICE DROP', tone: 'green', title: 'Price dropped on the RAV4 LE', body: 'Asking price fell from $24,200 to $23,600 (−$600) on a car you saved. Still tracking as a Fair price.', goScreen: 'detail', cta: 'View listing' },
  { type: 'MARKET SHIFT', tone: 'blue', title: 'Market prices shifted this week', body: 'Used prices on your shortlist rose about 8%. A certified pre-owned deal may now beat the private-party target.', goScreen: 'replan', cta: 'See what changed' },
  { type: 'BETTER MATCH', tone: 'purple', title: 'A better match just appeared', body: '2020 Mazda CX-5 Grand Touring — 33k mi, one owner, priced under target, scores higher than your current #1 pick.', goScreen: 'shortlist', cta: 'Open shortlist' },
  { type: 'SOLD', tone: 'gray', title: 'Forester listing sold', body: 'This listing is no longer available and has been removed from active tracking.', goScreen: null, cta: null },
];

async function main() {
  for (const car of cars) {
    await prisma.car.upsert({ where: { id: car.id }, update: car, create: car });
  }

  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@lotagent.dev' },
    update: {},
    create: { email: 'demo@lotagent.dev' },
  });

  await prisma.intakeProfile.upsert({
    where: { userId: demoUser.id },
    update: {},
    create: { userId: demoUser.id },
  });

  // Matches the prototype's initial state: saved ['crv','rav4'], compareSet ['crv','cx5'].
  await prisma.carSelection.upsert({
    where: { userId_carId: { userId: demoUser.id, carId: 'crv' } },
    update: { saved: true, inCompare: true },
    create: { userId: demoUser.id, carId: 'crv', saved: true, inCompare: true },
  });
  await prisma.carSelection.upsert({
    where: { userId_carId: { userId: demoUser.id, carId: 'rav4' } },
    update: { saved: true },
    create: { userId: demoUser.id, carId: 'rav4', saved: true },
  });
  await prisma.carSelection.upsert({
    where: { userId_carId: { userId: demoUser.id, carId: 'cx5' } },
    update: { inCompare: true },
    create: { userId: demoUser.id, carId: 'cx5', inCompare: true },
  });

  for (const packet of dealPackets) {
    const existing = await prisma.dealPacket.findFirst({ where: { carId: packet.carId } });
    if (existing) {
      await prisma.dealPacket.update({ where: { id: existing.id }, data: packet });
    } else {
      await prisma.dealPacket.create({ data: packet });
    }
  }

  await prisma.alert.deleteMany({ where: { userId: demoUser.id } });
  await prisma.alert.createMany({
    data: alerts.map(a => ({ ...a, userId: demoUser.id })),
  });

  console.log(`Seeded ${cars.length} cars, ${dealPackets.length} deal packets, ${alerts.length} alerts for ${demoUser.email}.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
