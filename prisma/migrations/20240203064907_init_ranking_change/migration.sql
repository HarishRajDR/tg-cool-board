/*
  Warnings:

  - The `InitialRanking` column on the `CoolWall` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CoolWall" DROP COLUMN "InitialRanking",
ADD COLUMN     "InitialRanking" INTEGER;
