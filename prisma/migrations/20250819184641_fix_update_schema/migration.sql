/*
  Warnings:

  - You are about to alter the column `description` on the `UpdateItem` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.
  - Added the required column `updatedAt` to the `Update` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Update" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."UpdateItem" ALTER COLUMN "description" SET DATA TYPE VARCHAR(1000);
