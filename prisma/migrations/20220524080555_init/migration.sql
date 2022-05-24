/*
  Warnings:

  - A unique constraint covering the columns `[cpf_cnpj]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_cnpj_key" ON "Cliente"("cpf_cnpj");
