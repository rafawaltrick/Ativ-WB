import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";
import M from "materialize-css"


type iprops = {
    tema: string
}


const ConsumoCli: React.FC<iprops> = (props) => {

    const consumoServico = [
        { nome: "", preco: "", descricao: "" }
    ]

    const consumoProduto = [
        { nome: "", preco: "", descricao: "" }
    ]

    React.useEffect(()=> {
        M.updateTextFields()

        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems);
    },[])

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
                                            <td>{cS.nome}</td>
                                            <td>{cS.preco}</td>
                                            <td>{cS.descricao}</td>
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