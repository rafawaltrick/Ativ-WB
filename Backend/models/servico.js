import { Sequelize } from "sequelize";
import db from "../config/db.js"

const Servico = db.define('servico',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

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

export default Servico