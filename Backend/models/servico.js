import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Consumo from "./consumo.js";

const Servico = db.define('servico',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nomeServico:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    precoServico:{
        type:Sequelize.INTEGER,
        allowNull:true, 
    },
    descricaoServico:{
        type:Sequelize.STRING,
        allowNull:true,
    }
})

Consumo.belongsTo(Servico,{foreignKey:'serv_id'});
Servico.hasMany(Consumo,{foreignKey:'serv_id'});


export default Servico 