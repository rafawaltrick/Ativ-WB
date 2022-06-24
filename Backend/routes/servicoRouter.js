import { Router } from "express";
import { atualizarServico, cadastrarServico, listarServicos, listarServicosID, removerServico } from "../controllers/servicoController.js"

const router = Router();

router.post ('/criarServico',cadastrarServico)
router.get ('/listarServicos', listarServicos)
router.get ('/listarServicos/:id',listarServicosID)
router.delete('/deletarServico/:id',removerServico )
router.put('/atualizarServico/:id',atualizarServico)

export default router