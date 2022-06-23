import { Router } from "express";
import { atualizarProduto, cadastrarProduto, listarProdutoID, listarProdutos, removerProduto } from "../controllers/produtoController.js"



const router = Router();

router.post ('/criarProduto',cadastrarProduto)
router.get ('/listarProdutos', listarProdutos)
router.get ('/listarProduto/:id',listarProdutoID)
router.delete('/deletarProduto/:id',removerProduto)
router.put('/atualizarProduto/:id',atualizarProduto)

export default router