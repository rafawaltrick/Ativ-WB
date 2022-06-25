import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Consumo from "./consumo.js";

const Produto = db.define('produto',{
    id:{
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

Consumo.belongsTo(Produto,{foreignKey:'prod_id'});
Produto.hasMany(Consumo,{foreignKey:'prod_id'});


export default Produto