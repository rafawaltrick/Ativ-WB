import db from "./config/db.js";
import express from "express";
import cors from "cors";
import cliente from "./models/cliente.js";
import pedido from "./models/pedido.js";
import produto from "./models/produto.js";
import servico from "./models/servico.js";

const app = express();

try {
    db.authenticate().then(()=>{
        cliente.sync({force:true})
        pedido.sync({force:true})
        produto.sync({force:true})
        servico.sync({force:true})
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

app.use(express.json())



app.listen(5000, ()=> console.log(`Servidor rodando na 5000`))