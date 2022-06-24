import { Router } from "express";
import { listagemGenero } from "../controllers/clienteController.js";
import { atualizarCliente, cadastrarCliente, listarClienteID,  listarClientes, removerCliente } from "../controllers/clienteController.js"



const router = Router();

router.post ('/criarCliente',cadastrarCliente)
router.get ('/listarClientes', listarClientes)
router.get ('/listarCliente/:id',listarClienteID)
router.delete('/deletarCliente/:id',removerCliente)
router.put('/atualizarCliente/:id',atualizarCliente)
router.get('/listagemGenero',listagemGenero)

export default router