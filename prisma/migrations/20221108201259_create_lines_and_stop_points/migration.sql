/*
  Warnings:

  - You are about to drop the `Passageiro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Passageiro" DROP CONSTRAINT "Passageiro_userId_fkey";

-- DropTable
DROP TABLE "Passageiro";

-- CreateTable
CREATE TABLE "Passager" (
    "id" SERIAL NOT NULL,
    "bith_date" TIMESTAMP(3) NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "linha_interesse" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_point" INTEGER NOT NULL,
    "end_point" INTEGER NOT NULL,
    "back_point" INTEGER NOT NULL,
    "finish_point" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "driverId" INTEGER,

    CONSTRAINT "Passager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "cnh" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Line" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_point" TEXT NOT NULL,
    "end_point" TEXT NOT NULL,
    "driverId" INTEGER NOT NULL,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StopPoint" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "StopPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineStopPoints" (
    "id" SERIAL NOT NULL,
    "lineId" INTEGER NOT NULL,
    "stopPointId" INTEGER NOT NULL,
    "stop_time" TEXT NOT NULL,
    "passagerId" INTEGER,

    CONSTRAINT "LineStopPoints_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Passager_start_point_key" ON "Passager"("start_point");

-- CreateIndex
CREATE UNIQUE INDEX "Passager_userId_key" ON "Passager"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_userId_key" ON "Driver"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Line_driverId_key" ON "Line"("driverId");

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_start_point_fkey" FOREIGN KEY ("start_point") REFERENCES "LineStopPoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_end_point_fkey" FOREIGN KEY ("end_point") REFERENCES "LineStopPoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_back_point_fkey" FOREIGN KEY ("back_point") REFERENCES "LineStopPoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_finish_point_fkey" FOREIGN KEY ("finish_point") REFERENCES "LineStopPoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineStopPoints" ADD CONSTRAINT "LineStopPoints_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineStopPoints" ADD CONSTRAINT "LineStopPoints_stopPointId_fkey" FOREIGN KEY ("stopPointId") REFERENCES "StopPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
