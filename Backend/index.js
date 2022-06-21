import db from "./config/db.js";
import express from "express";
import cors from "cors";

const app = express();

try {
    db.authenticate().then(()=>{
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

app.use(express.json())

app.use('/ark1', (req,res) => {
    res.json("funcionando a rota")
})

app.listen(5000, ()=> console.log(`Servidor rodando na 5000`))