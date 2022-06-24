import Servico from "../models/servico.js"


export const listarServicos = async (req,res) => {
    try{
        const servico = await Servico.findAll()
        res.status(201).json(servico)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listarServicosID = async (req, res) => {
    try {
        const servico =await Servico.findOne({
            where:{
            id:req.params.id
            }
        }) 
        res.status(201).json(servico)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const removerServico = async (req, res) => {
    try {
        const servico = await Servico.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(servico)
    } catch (error) {

        res.status(500).json({ message:error })
    }
}

export const cadastrarServico = async (req, res) => {
    try {
        const servico = await Servico.create({
            nomeServico:req.body.nomeServico,
            precoServico:req.body.precoServico,
            descricaoServico:req.body.descricaoServico
        })
        res.status(201).json(servico)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const atualizarServico = async (req, res) => {
    try {
        const servico = await Servico.update({
            nomeServico:req.body.nomeServico,
            precoServico:req.body.precoServico,
            descricaoServico:req.body.descricaoServico
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(servico)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

