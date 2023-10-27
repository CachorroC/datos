/*
  Warnings:

  - The primary key for the `Carpeta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Carpeta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_carpetaNumero_fkey";

-- AlterTable
CREATE SEQUENCE carpeta_numero_seq;
ALTER TABLE "Carpeta" DROP CONSTRAINT "Carpeta_pkey",
DROP COLUMN "id",
ALTER COLUMN "numero" SET DEFAULT nextval('carpeta_numero_seq'),
ALTER COLUMN "cc" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Carpeta_pkey" PRIMARY KEY ("numero");
ALTER SEQUENCE carpeta_numero_seq OWNED BY "Carpeta"."numero";

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE SET NULL ON UPDATE CASCADE;
