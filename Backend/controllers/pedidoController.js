import Pedido from "../models/pedido.js"


export const listarPedidos = async (req,res) => {
    try{
        const pedido = await Pedido.findAll()
        res.status(201).json(pedido)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listarPedidosID = async (req, res) => {
    try {
        const pedido =await Pedido.findOne({
            where:{
            id:req.params.id
            }
        }) 
        res.status(201).json(pedido)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const removerPedido = async (req, res) => {
    try {
        const pedido = await Pedido.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(pedido)
    } catch (error) {

        res.status(500).json({ message:error })
    }
}

export const cadastrarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.create({

        })
        res.status(201).json(pedido)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const atualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.update({

        },{
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(pedido)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

