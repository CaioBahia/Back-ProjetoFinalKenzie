/*
  Warnings:

  - You are about to alter the column `fipe` on the `Anouncement` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - Made the column `fipe` on table `Anouncement` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Anouncement" ALTER COLUMN "fipe" SET NOT NULL,
ALTER COLUMN "fipe" SET DATA TYPE INTEGER;
