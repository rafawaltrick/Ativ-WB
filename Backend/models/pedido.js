import { Sequelize } from "sequelize";
import db from "../config/db.js"

const Pedido = db.define('pedido',{
    ProdutoID:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    preco:{
        type:Sequelize.INTEGER,
        allowNull:true, 
    },
    descricao:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    categoria:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    quantidade:{
        type:Sequelize.INTEGER,
        allowNull:true,
    }
})

export default Pedido