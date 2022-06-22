import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import Produtos from "./listagem/Produtos/Produtos";
import Servicos from "./listagem/Servicos/Servicos";
import Clientes from "./listagem/Clientes/Clientes";
import Consumos from "./Consumo/Consumos";



type state = {
    tela: string
}



export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'TOP-Clientes'
        }
    }


    

    render() {
        let barraNavegacao = <BarraNavegacao  tema="purple lighten-4" botoes={['TOP-Clientes', 'Cadastros','Produtos','Servicos','Clientes','Consumos']}/>
        
        if (this.state.tela === 'TOP-Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            ) 
        }
        if (this.state.tela === 'Produtos') {
            return (
                <>
                {barraNavegacao}
                    <Produtos tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Servicos') {
            return (
                <>
                {barraNavegacao}
                <Servicos tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Clientes') {
            return (
                <>
                {barraNavegacao}
                <Clientes tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Consumos') {
            return (
                <>
                {barraNavegacao}
                <Consumos tema="purple lighten-4" />
                </>
            )
        }
        
    }
}