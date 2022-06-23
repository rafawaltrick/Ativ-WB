import { Sequelize } from "sequelize";
import db from "../config/db.js"

const servico = db.define('servico',{
    nomeServiço:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    preco:{
        type:Sequelize.INTEGER,
        allowNull:true, 
    },
    precoServiço:{
        type:Sequelize.INTEGER,
        allowNull:true, 
    },
    descricaoServiço:{
        type:Sequelize.STRING,
        allowNull:true,
    }
})

export default servico