/*
  Warnings:

  - Added the required column `coordName` to the `Line` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Line" ADD COLUMN     "coordName" TEXT NOT NULL;
