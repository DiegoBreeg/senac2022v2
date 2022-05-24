-- CreateTable
CREATE TABLE "Cliente" (
    "empresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "cpf_cnpj" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "nota" TEXT NOT NULL,
    "lucro_real" BOOLEAN NOT NULL DEFAULT false,
    "lucro_presumido" BOOLEAN NOT NULL DEFAULT false,
    "simples_nacional" BOOLEAN NOT NULL DEFAULT false,
    "mei" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cpf_cnpj")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
