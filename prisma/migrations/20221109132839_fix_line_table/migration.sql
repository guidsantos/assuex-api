/*
  Warnings:

  - You are about to drop the column `end_point` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `start_point` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `driverId` on the `Passager` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Line` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Passager" DROP CONSTRAINT "Passager_driverId_fkey";

-- AlterTable
ALTER TABLE "Line" DROP COLUMN "end_point",
DROP COLUMN "start_point";

-- AlterTable
ALTER TABLE "Passager" DROP COLUMN "driverId";

-- CreateIndex
CREATE UNIQUE INDEX "Line_name_key" ON "Line"("name");
