import Consumo from "../models/consumo"

export const listarConsumos = async (req,res) => {
    try{
        const consumo = await Consumo.findAll()
        res.status(201).json(consumo)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const atualizaConsumo = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const deletePedido = async (req,res) => {
    try{
        const consumo = await Consumo.destroy({
            where:{
                ped_id:req.params.id
            }
        })
        res.status(201).json(consumo)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaConsumoID = async (req,res) => {
    try{
        const consumo = await Consumo.findOne({
            where:{
                ped_id:req.params.id
            }
        })
        res.status(201).json(consumo)

    }catch(error){
        res.status(500).json({ message:error })
    }
}