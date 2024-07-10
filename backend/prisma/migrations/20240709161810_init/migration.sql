-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userName" DROP NOT NULL;
