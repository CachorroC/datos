/*
  Warnings:

  - You are about to drop the column `category` on the `Carpeta` table. All the data in the column will be lost.
  - You are about to drop the column `deudorCedula` on the `Carpeta` table. All the data in the column will be lost.
  - You are about to drop the column `tipoProceso` on the `Carpeta` table. All the data in the column will be lost.
  - You are about to drop the `Actuacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Demanda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deudor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Juzgado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Proceso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Telefono` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DemandaToProceso` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Actuacion" DROP CONSTRAINT "Actuacion_idProceso_fkey";

-- DropForeignKey
ALTER TABLE "Carpeta" DROP CONSTRAINT "Carpeta_deudorCedula_fkey";

-- DropForeignKey
ALTER TABLE "Juzgado" DROP CONSTRAINT "Juzgado_demandaExpediente_fkey";

-- DropForeignKey
ALTER TABLE "Proceso" DROP CONSTRAINT "Proceso_despacho_fkey";

-- DropForeignKey
ALTER TABLE "Proceso" DROP CONSTRAINT "Proceso_llaveProceso_fkey";

-- DropForeignKey
ALTER TABLE "Telefono" DROP CONSTRAINT "Telefono_cedula_fkey";

-- DropForeignKey
ALTER TABLE "_DemandaToProceso" DROP CONSTRAINT "_DemandaToProceso_A_fkey";

-- DropForeignKey
ALTER TABLE "_DemandaToProceso" DROP CONSTRAINT "_DemandaToProceso_B_fkey";

-- DropIndex
DROP INDEX "Carpeta_llaveProceso_key";

-- AlterTable
CREATE SEQUENCE carpeta_numero_seq;
ALTER TABLE "Carpeta" DROP COLUMN "category",
DROP COLUMN "deudorCedula",
DROP COLUMN "tipoProceso",
ADD COLUMN     "nombre" TEXT,
ALTER COLUMN "numero" SET DEFAULT nextval('carpeta_numero_seq'),
ALTER COLUMN "llaveProceso" DROP NOT NULL;
ALTER SEQUENCE carpeta_numero_seq OWNED BY "Carpeta"."numero";

-- DropTable
DROP TABLE "Actuacion";

-- DropTable
DROP TABLE "Demanda";

-- DropTable
DROP TABLE "Deudor";

-- DropTable
DROP TABLE "Juzgado";

-- DropTable
DROP TABLE "Proceso";

-- DropTable
DROP TABLE "Telefono";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_DemandaToProceso";

-- DropEnum
DROP TYPE "Category";

-- DropEnum
DROP TYPE "Departamento";

-- DropEnum
DROP TYPE "TipoProceso";

-- CreateTable
CREATE TABLE "Nota" (
    "text" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "pathname" TEXT,
    "date" TIMESTAMP(3),
    "carpetaNumero" INTEGER,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nota_id_key" ON "Nota"("id");

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_carpetaNumero_fkey" FOREIGN KEY ("carpetaNumero") REFERENCES "Carpeta"("numero") ON DELETE SET NULL ON UPDATE CASCADE;
