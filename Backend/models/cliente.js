import { Sequelize } from "sequelize";
import db from "../config/db.js"

const Cliente = db.define('cliente',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    nomeSocial:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    cpf:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    rg:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    dataCadastro:{
        type:Sequelize.DATE,
        allowNull:true,
    },
    telefones:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    produtosConsumidos:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    servicosConsumidos:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    genero:{
        type:Sequelize.STRING,
        allowNull:true,
    }
})


export default Cliente