import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Cliente from "./cliente.js";


const Consumo = db.define('Consumo',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    cli_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    prod_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    serv_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
})

Consumo.belongsTo(Cliente,{foreignKey:'cli_id'});
Consumo.Cliente = Cliente.hasMany(Consumo,{foreignKey:'cli_id'});

export default Consumo