/*
  Warnings:

  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[cpf_cnpj]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Cliente_email_key";

-- AlterTable
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_pkey",
ALTER COLUMN "cpf_cnpj" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_cnpj_key" ON "Cliente"("cpf_cnpj");
