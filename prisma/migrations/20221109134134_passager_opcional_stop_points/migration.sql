-- DropForeignKey
ALTER TABLE "Passager" DROP CONSTRAINT "Passager_back_point_fkey";

-- DropForeignKey
ALTER TABLE "Passager" DROP CONSTRAINT "Passager_end_point_fkey";

-- DropForeignKey
ALTER TABLE "Passager" DROP CONSTRAINT "Passager_finish_point_fkey";

-- DropForeignKey
ALTER TABLE "Passager" DROP CONSTRAINT "Passager_start_point_fkey";

-- DropIndex
DROP INDEX "Passager_start_point_key";

-- AlterTable
ALTER TABLE "Passager" ALTER COLUMN "start_point" DROP NOT NULL,
ALTER COLUMN "end_point" DROP NOT NULL,
ALTER COLUMN "back_point" DROP NOT NULL,
ALTER COLUMN "finish_point" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_start_point_fkey" FOREIGN KEY ("start_point") REFERENCES "LineStopPoints"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_end_point_fkey" FOREIGN KEY ("end_point") REFERENCES "LineStopPoints"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_back_point_fkey" FOREIGN KEY ("back_point") REFERENCES "LineStopPoints"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passager" ADD CONSTRAINT "Passager_finish_point_fkey" FOREIGN KEY ("finish_point") REFERENCES "LineStopPoints"("id") ON DELETE SET NULL ON UPDATE CASCADE;
