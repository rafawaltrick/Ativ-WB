import { Router } from "express";
import { atualizarPedido, cadastrarPedido, listarPedidos, listarPedidosID, removerPedido } from "../controllers/pedidoController.js"

const router = Router();

router.post ('/criarPedido',cadastrarPedido)
router.get ('/listarPedidos', listarPedidos)
router.get ('/listarPedidos/:id',listarPedidosID)
router.delete('/deletarCliente/:id',removerPedido )
router.put('/atualizarCliente/:id',atualizarPedido)

export default router