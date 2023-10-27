/*
  Warnings:

  - The primary key for the `Carpeta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Carpeta` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_carpetaNumero_fkey";

-- DropIndex
DROP INDEX "Carpeta_numero_key";

-- AlterTable
ALTER TABLE "Carpeta" DROP CONSTRAINT "Carpeta_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "numero" DROP DEFAULT,
ADD CONSTRAINT "Carpeta_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "carpeta_numero_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Carpeta_id_key" ON "Carpeta"("id");

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
