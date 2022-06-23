import { Sequelize } from "sequelize";

const db = new Sequelize('salaowb', 'root', 'senha', {
    dialect: 'mysql',
    host: 'localhost'
});

export default db