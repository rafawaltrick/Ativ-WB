import { Routes,Route } from "react-router-dom";
import ListaCliente from "../listaCliente";
import FormularioCadastroCliente from "../formularioCadastroCliente";
import Produtos from "../listagem/Produtos/Produtos";
import Servicos from "../listagem/Servicos/Servicos";
import Clientes from "../listagem/Clientes/Clientes";
import { Component } from "react";
import EditCliente from "../Atualizar/Clientes/editCliente";
import EditProduto from "../Atualizar/Produtos/editProduto";
import EditServico from "../Atualizar/Servicos/editServico";
import Consumo from "../Consumo/ConsumoCli";
import Consumos from "../Consumo/Consumos";




type state = {
}

export default class AppRoutes extends Component <{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'TOP-Clientes'
        }
        
    }
    render(){

    return (
        <Routes>
            <Route path="/TOP-Clientes" element={<ListaCliente tema="purple lighten-4"/>} />
            <Route path="/" element={<ListaCliente tema="purple lighten-4"/>} />
            <Route path="/Cadastros" element={<FormularioCadastroCliente tema="purple lighten-4"/>} />
            <Route path="/Produtos" element={<Produtos tema="purple lighten-4"/>} />
            <Route path="/Servicos" element={<Servicos tema="purple lighten-4"/>} />
            <Route path="/Clientes" element={<Clientes tema="purple lighten-4"/>} />
            <Route path="/editCliente/:id" element={<EditCliente tema="purple lighten-4"/>} />
            <Route path="/editProduto/:id" element={<EditProduto tema="purple lighten-4"/>} />
            <Route path="/editServico/:id" element={<EditServico tema="purple lighten-4"/>} />
            <Route path="/Consumos" element={<Consumos tema="purple lighten-4"/>} />
            <Route path="/Consumo/:id" element={<Consumo tema="purple lighten-4"/>} />
        </Routes> 
    );
    }
}


