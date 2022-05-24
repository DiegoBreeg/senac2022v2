import { Router } from "express";
import { client_controller } from "../controller/client_controller.js";

const router = Router()

router.post("/cliente", client_controller.create)
router.get("/clientes", client_controller.findMany)
router.get("/cliente/:cpf_cnpj", client_controller.findOne)
router.put("/cliente/:cpf_cnpj", client_controller.update)
router.delete("/cliente/:cpf_cnpj", client_controller.delete)

export { router }