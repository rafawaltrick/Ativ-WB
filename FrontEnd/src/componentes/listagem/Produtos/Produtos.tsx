import React, { Component, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";
import axios from "axios";


type iprops = {
    tema: string
}


const Produtos: React.FC<iprops> = (props) => {
    const [listarProdutos,setListaProdutos] = useState([])

    const buscaDados = ()=>{
        axios.get('http://localhost:5000/produto/listarProdutos').then(res=>{
        setListaProdutos(res.data)
        })
    }
    React.useEffect( () =>{
        buscaDados()
    },[]
    )

    const destroydados = (id:number) =>{
        
        axios.delete(`http://localhost:5000/produto/deletarProduto/${id}`).then(res => {
            M.toast({ html: "deletado com sucesso!", classes: "modal1 rounded", });
            const produtos = listarProdutos.filter((p:{id:number})=>p.id!==id)
            setListaProdutos(produtos)
        })
    }



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
                        {listarProdutos.map((p:any, i:any)=> (
                            <tr key={i}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.descricao}</td>
                            <td>{p.categoria}</td>
                            <td>{p.quantidade}</td>
                            <td className="espaço">
                                <Link to = {`/editProduto/${p.id}`  }>
                                    <i className="material-icons espaço1">edit</i>
                                </Link>
                                <span  onClick={()=>destroydados(p.id)}>
                                    <i className="material-icons espaço1 " >delete</i>
                                </span>
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