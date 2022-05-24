import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const client_controller =
{
    async create(req, res) {

        try {
            const { cpf_cnpj } = req.body
            let cliente = await prisma.cliente.findUnique({ where: { cpf_cnpj } })
            if (cliente) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Cliente já existe')
                return res.status(403).json({ error: "Cliente já existe" })
            }
            cliente = await prisma.cliente.create({ data: { ...req.body } })
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', req.body)
            return res.status(200).json(cliente)
        }

        catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }

    },

    async findMany(req, res) {

        try {
            const cliente = await prisma.cliente.findMany()
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', cliente)
            return res.status(200).json(cliente)
        }

        catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }
    },

    async findOne(req, res) {

        try {
            let { cpf_cnpj } = req.params;
            let cliente = await prisma.cliente.findUnique({ where: { cpf_cnpj } })
            if (!cliente) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Cliente inexistente')
                return res.status(404).json({ error: 'Cliente inexistente' })
            }
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', cliente)
            return res.status(200).json(cliente)
        }

        catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }

    },

    async update(req, res) {
        try {
            const { cpf_cnpj } = req.params;
            delete req.body.cpf_cnpj            
            let cliente = await prisma.cliente.findUnique({ where: { cpf_cnpj } })
            if (!cliente) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Cliente inexistente')                
                return res.status(404).json({ error: 'Cliente inexistente' })
            }
            cliente = await prisma.cliente.update({
                where: { cpf_cnpj },
                data: { ...req.body }
            })
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', cpf_cnpj, cliente)
            return res.status(200).json(cliente)
        } catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }
    },

    async delete(req, res) {
        try {
            const { cpf_cnpj } = req.params;
            const cliente = await prisma.cliente.findUnique({ where: { cpf_cnpj } })
            if (!cliente) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Cliente inexistente')
                return res.status(404).json({ error: 'Cliente inexistente' })
            }

            await prisma.cliente.delete({ where: { cpf_cnpj } })
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', cliente)
            return res.status(200).json({message: 'Cliente deletado'})

        } catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }
    }
}


export { client_controller }