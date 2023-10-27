/*
  Warnings:

  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_anouncement_id_fkey";

-- DropTable
DROP TABLE "images";

-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "anouncement_id" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_anouncement_id_fkey" FOREIGN KEY ("anouncement_id") REFERENCES "Anouncement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
