-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "pinned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "saved" BOOLEAN NOT NULL DEFAULT false;