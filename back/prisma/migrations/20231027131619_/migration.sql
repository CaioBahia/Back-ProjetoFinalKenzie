/*
  Warnings:

  - You are about to drop the column `cover_img_url` on the `Anouncement` table. All the data in the column will be lost.
  - Added the required column `cover_img` to the `Anouncement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anouncement" DROP COLUMN "cover_img_url",
ADD COLUMN     "cover_img" TEXT NOT NULL;
