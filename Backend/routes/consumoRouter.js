import { Router } from "express";
import { atualizaConsumo, cadastrarConsumo, deleteConsumo, listaConsumoID, listagemConsumo, listarConsumos, listConsumByAmount, listLessConsumo, listMostConsumByValue } from "../controllers/consumoController.js"



const router = Router();

router.post ('/criarConsumo/:id',cadastrarConsumo)
router.get ('/listarConsumos', listarConsumos)
router.get ('/listarConsumo/:id',listaConsumoID)
router.delete('/deletarConsumo/:id',deleteConsumo)
router.put('/atualizarConsumo/:id',atualizaConsumo)
router.get('/listagemConsumo',listagemConsumo)
router.get('/listagemConsumoValor',listMostConsumByValue)
router.get('/listagemConsumoMquantidade',listConsumByAmount)
router.get('/listagemConsumoMenosConsumo', listLessConsumo)


export default router