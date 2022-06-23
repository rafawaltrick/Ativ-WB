import { Router } from "express";
import { atualizarCliente, cadastrarCliente, listarClienteID,  listarClientes, removerCliente } from "../controllers/clienteController.js"



const router = Router();

router.post ('/criarCliente',cadastrarCliente)
router.get ('/listarClientes', listarClientes)
router.get ('/listarCliente/:id',listarClienteID)
router.delete('/deletarCliente/:id',removerCliente)
router.put('/atualizarCliente/:id',atualizarCliente)

export default router