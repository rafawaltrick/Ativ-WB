import Cliente from "../models/cliente.js"



export const listarClientes = async (req,res) => {
    try{
        const clientes = await Cliente.findAll()
        res.status(201).json(clientes)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listarClienteID = async (req, res) => {
    try {
        const cliente =await Cliente.findOne({
            where:{
            id:req.params.id
            }
        }) 
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const removerCliente = async (req, res) => {
    try {
        const cliente = await Cliente.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(cliente)
    } catch (error) {

        res.status(500).json({ message:error })
    }
}

export const cadastrarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create({
            nome: req.body.nome,
            nomeSocial: req.body.nomeSocial,
            cpf: req.body.cpf,
            rg: req.body.rg,
            dataCadastro: new Date().toISOString().slice(0, 10),
            telefones: req.body.telefone,
            genero: req.body.genero
        })
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const atualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.update({
            nome: req.body.nome,
            nomeSocial: req.body.nomeSocial,
            telefones: req.body.telefone,
            genero: req.body.genero 
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const listagemGenero = async (req,res)=> {
    try{
        const masculino = await Cliente.findAll({
            where:{
            genero:'m'
            }
        })
        const feminino = await Cliente.findAll({
            where:{
            genero:'f'
            }
        })
        res.status(201).json({masculino,feminino})

    }catch(error){
        console.log(error)
        res.status(500).json({ message: error })
    }
}


