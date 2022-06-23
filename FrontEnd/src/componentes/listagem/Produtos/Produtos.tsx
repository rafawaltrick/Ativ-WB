import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";


type iprops = {
    tema: string
}


const Produtos: React.FC<iprops> = (props) => {
    const produtos = [
        {id:"1", nome:"Shapoo", preco:"15", descricao:"Para os cabelos", categoria:"Higiene", quantidade:"5"}
    ]
    

        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Produtos
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>Categoria</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>

                        <tbody>
                        {produtos.map((p:any, i:any)=> (
                            <tr key={i}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.descricao}</td>
                            <td>{p.categoria}</td>
                            <td>{p.quantidade}</td>
                            <td className="espaço">
                                <Link to = "/editProduto">
                                    <i className="material-icons espaço1">edit</i>
                                </Link>
                                <Link to = "/">
                                    <i className="material-icons espaço1 ">delete</i>
                                </Link>
                            </td>
                        </tr>
                        ))}
                            
                        </tbody>
                    </table>
                </div>
            </>

        )
    
}

export default Produtos