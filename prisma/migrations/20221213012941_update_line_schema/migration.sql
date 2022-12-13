/*
  Warnings:

  - Added the required column `bus` to the `Line` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endPoint` to the `Line` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startPoint` to the `Line` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Line" ADD COLUMN     "bus" TEXT NOT NULL,
ADD COLUMN     "endPoint" TEXT NOT NULL,
ADD COLUMN     "startPoint" TEXT NOT NULL;
