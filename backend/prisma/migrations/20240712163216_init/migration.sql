/*
  Warnings:

  - You are about to drop the column `image` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publishedDate` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageUrl` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishedYear` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `firstName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "image",
DROP COLUMN "publishedDate",
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "publishedYear" INTEGER NOT NULL,
ADD COLUMN     "publisher" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL,
ALTER COLUMN "userName" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");
