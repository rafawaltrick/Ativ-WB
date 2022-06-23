import Produto from "../models/produto.js"


export const listarProdutos = async (req,res) => {
    try{
        const produto = await Produto.findAll()
        res.status(201).json(produto)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listarProdutoID = async (req, res) => {
    try {
        const produto =await Produto.findOne({
            where:{
            id:req.params.id
            }
        }) 
        res.status(201).json(produto)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const removerProduto = async (req, res) => {
    try {
        const produto = await Produto.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(produto)
    } catch (error) {

        res.status(500).json({ message:error })
    }
}

export const cadastrarProduto = async (req, res) => {
    try {
        const produto = await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao:req.body.descricao,
            categoria: req.body.categoria,
            quantidade: req.body.quantidade
        })
        res.status(201).json(produto)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const atualizarProduto = async (req, res) => {
    try {
        const produto = await Produto.update({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao:req.body.descricao,
            categoria: req.body.categoria,
            quantidade: req.body.quantidade
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(produto)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

