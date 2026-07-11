-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intake_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "budgetMode" TEXT NOT NULL DEFAULT 'monthly',
    "cashTotal" INTEGER NOT NULL DEFAULT 28000,
    "monthly" INTEGER NOT NULL DEFAULT 450,
    "term" INTEGER NOT NULL DEFAULT 60,
    "down" INTEGER NOT NULL DEFAULT 3000,
    "weightReliability" INTEGER NOT NULL DEFAULT 80,
    "weightResale" INTEGER NOT NULL DEFAULT 55,
    "weightRunning" INTEGER NOT NULL DEFAULT 65,
    "weightPerformance" INTEGER NOT NULL DEFAULT 35,
    "usage" TEXT[] DEFAULT ARRAY['commute']::TEXT[],
    "timeline" TEXT NOT NULL DEFAULT 'month',
    "radius" INTEGER NOT NULL DEFAULT 60,
    "zip" TEXT NOT NULL DEFAULT '94110',
    "condition" TEXT NOT NULL DEFAULT 'either',
    "fuel" TEXT NOT NULL DEFAULT 'either',
    "fuelCost" INTEGER NOT NULL DEFAULT 200,
    "mustHaveAwd" BOOLEAN NOT NULL DEFAULT true,
    "mustHaveCarplay" BOOLEAN NOT NULL DEFAULT true,
    "mustHaveBackup" BOOLEAN NOT NULL DEFAULT true,
    "mustHaveMpg" BOOLEAN NOT NULL DEFAULT false,
    "mustHaveThirdRow" BOOLEAN NOT NULL DEFAULT false,
    "mustHaveManual" BOOLEAN NOT NULL DEFAULT false,
    "customMusts" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "intake_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "miles" TEXT NOT NULL,
    "distance" TEXT NOT NULL,
    "fit" INTEGER NOT NULL,
    "deal" TEXT NOT NULL,
    "tco" TEXT NOT NULL,
    "otd" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "dealer" TEXT NOT NULL,
    "pros" TEXT[],
    "cons" TEXT[],
    "why" TEXT NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_selections" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "saved" BOOLEAN NOT NULL DEFAULT false,
    "inCompare" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "car_selections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deal_packets" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "statusTone" TEXT NOT NULL,
    "generated" TEXT NOT NULL,
    "otdTotal" TEXT NOT NULL,
    "monthly" TEXT NOT NULL,
    "openOffer" TEXT NOT NULL,
    "settle" TEXT NOT NULL,
    "walkAway" TEXT NOT NULL,
    "worksheet" JSONB NOT NULL DEFAULT '[]',
    "scriptLines" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "checklist" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "outreach" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deal_packets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "tone" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "goScreen" TEXT,
    "cta" TEXT,
    "dismissed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "intake_profiles_userId_key" ON "intake_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "car_selections_userId_carId_key" ON "car_selections"("userId", "carId");

-- AddForeignKey
ALTER TABLE "intake_profiles" ADD CONSTRAINT "intake_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_selections" ADD CONSTRAINT "car_selections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_selections" ADD CONSTRAINT "car_selections_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deal_packets" ADD CONSTRAINT "deal_packets_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
