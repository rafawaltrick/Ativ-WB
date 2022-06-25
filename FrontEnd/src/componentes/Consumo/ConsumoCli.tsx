import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link, useParams } from "react-router-dom";
import M from "materialize-css"
import axios from "axios";


type iprops = {
    tema: string
}






const ConsumoCli: React.FC<iprops> = (props) => {
    const [ consumoProduto,setConsumoProduto] = React.useState([])
    const [consumoServico,setConsumoServico] = React.useState([])



    React.useEffect(()=> {
        M.updateTextFields()
        buscaDados()
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems);
    },[])

    const params = useParams()
    const buscaDados  = () =>{
        const id = params.id
        axios.get(`http://localhost:5000/consumo/listarClienteConsumo/${id}` ).then(res =>{
        const produtos = res.data.map((item:any)=>item.produto).filter((p:any)=>p)
        const servico = res.data.map((item:any)=>item.servico).filter((s:any)=>s)
        setConsumoServico(servico)
        setConsumoProduto(produtos)
        })
    }






    return (
        <>
            <div className="row">
                <h3 className="center">
                    Serviços
                </h3>
                <ul className="collapsible popout">
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">build</i>
                            Serviços
                        </div>
                        <div className="collapsible-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>NomeServiço</th>
                                        <th>preço</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consumoServico.map((cS: any, i: any) => (
                                        <tr key={i}>
                                            <td>{cS.nomeServico}</td>
                                            <td>{cS.precoServico}</td>
                                            <td>{cS.descricaoServico}</td>
                                            <td>
                                                <Link to="/">
                                                    <i className="material-icons espaço1 ">delete</i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>

                <h3 className="center">
                    Produtos
                </h3>
                <ul className="collapsible popout">
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">local_grocery_store</i>
                            Produtos
                        </div>
                        <div className="collapsible-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome Produto</th>
                                        <th>Preço</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consumoProduto.map((cP: any, i: any) => (
                                        <tr key={i}>
                                            <td>{cP.nome}</td>
                                            <td>{cP.preco}</td>
                                            <td>{cP.descricao}</td>
                                            <td>
                                                <Link to="/">
                                                    <i className="material-icons espaço1 ">delete</i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>

            </div>
        </>

    )

}

export default ConsumoCli