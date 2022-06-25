import Cliente from "../models/cliente.js"
import Consumo from "../models/consumo.js"
import Produto from "../models/produto.js"
import Servico from "../models/servico.js"

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
        const atualiza = await Consumo.update({
            prod_id:req.body.prod_id,
            serv_id:req.body.serv_id
        },
        {
            where:{
                id:req.body.id
            }
        }
        )
        res.status(201).json(atualiza)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const deleteConsumo = async (req,res) => {
    try{
        const consumo = await Consumo.destroy({
            where:{
                id:req.params.id,
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
                id:req.params.id
            }
        })
        res.status(201).json(consumo)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const cadastrarConsumo = async (req, res) => {
    try {
        const ItemConsumo = await Consumo.create({
            cli_id:req.body.cli_id,
            prod_id:req.body.prod_id,
            serv_id:req.body.serv_id
        })
        res.status(201).json(ItemConsumo)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const listagemConsumo = async (req,res) =>{
    try{
        const consumo = await Consumo.findAll({
            include:[{
                model:Produto
            },
            {
                model:Servico
            }
        ]
        })
        const consumidos = consumo.reduce((acc,cur)=>{
                if(cur.serv_id){
                    if (acc[`servico_${cur.serv_id}`]){
                        acc[`servico_${cur.serv_id}`].qtd++
                    }
                    else {
                        acc[`servico_${cur.serv_id}`] = {
                            ...cur.dataValues.servico.dataValues,
                            qtd:1,
                            tipo: "Serviço"
                        }
                    }
                }
                if(cur.prod_id){
                    if (acc[`produto_${cur.prod_id}`]){
                    acc[`produto_${cur.prod_id}`].qtd++
                }
                else {
                    acc[`produto_${cur.prod_id}`] = {
                        ...cur.dataValues.produto.dataValues,
                        qtd:1,
                        tipo: "Produto"
                    }
                }
                }
            
            return acc
        },{})
        console.log(consumidos)
        const ordenados = Object.keys(consumidos).map(c => consumidos[c]).sort((a,b)=> b.qtd - a.qtd)

        res.status(201).json(ordenados)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
} 

// Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
export const listMostConsumByValue = async (req, res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome','nomeSocial','cpf'],
            include:{
                model:Consumo,
                attributes:['id','cli_id','prod_id','serv_id'],
                include:[{
                    model:Produto,
                    attributes:['id', 'preco']
                },{
                    model:Servico,
                    attributes:['id','precoServico']
                }]
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            console.log('aki esta erro',c)
            c.dataValues.Consumos.forEach(p=>{
                if(p.dataValues.serv_id) {
                    total +=p.dataValues.servico.precoServico
                }
                if(p.dataValues.prod_id) {
                    total +=p.dataValues.produto.preco
                }
            })
            delete c.dataValues.consumo
            return { ...c.dataValues, total}
        }).sort((a,b)=>b.total-a.total).slice(0,5)

        res.status(201).json(clientes)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}

// Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
export const listConsumByAmount = async (req,res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome', 'cpf'],
            include:{
                model:Consumo,
                attributes:['id','cli_id','prod_id','serv_id']
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.Consumos.forEach(p=>{
                if(p.dataValues.serv_id) total++
                if(p.dataValues.prod_id) total++
            })
            delete c.dataValues.Consumos
            return { ...c.dataValues, total}
        }).sort((a,b)=>b.total-a.total).slice(0,10)

        res.status(201).json(clientes)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

// Listagem dos 10 clientes que menos consumiram produtos ou serviços.

export const listLessConsumo = async (req, res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome', 'cpf'],
            include:{
                model:Consumo,
                attributes:['id','cli_id','prod_id','serv_id']
            }
        })
        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.Consumos.forEach(p=>{
                if(p.dataValues.serv_id) total++
                if(p.dataValues.prod_id) total++
            })
            delete c.dataValues.Consumos
            return { ...c.dataValues, total}
        }).sort((a,b)=>a.total-b.total).slice(0,10)
        res.status(201).json(clientes)
    }catch(error){
        res.status(500).json({ message:error })
    }
}
