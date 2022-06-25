import React, { Component, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";
import axios from "axios";

type iprops = {
    tema: string
}


const Servicos: React.FC<iprops> = (props) => {
    const [listarServicos,setServicos]= useState([])

    const buscaDados = ()=> {
        axios.get('http://localhost:5000/servico/listarServicos').then(res=>{
            setServicos(res.data)
        })
    }
    React.useEffect(()=>{
        buscaDados()
    },[])
    return (

        <div className="row">
            <h3 className="center">
                Lista de Serviços Cadastrados
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>NomeServiço</th>
                        <th>preço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>

                <tbody>
                    {listarServicos.map((s: any, i: any) => (
                        <tr key={i}>
                            <td>{s.nomeServico}</td>
                            <td>{s.precoServico}</td>
                            <td>{s.descricaoServico}</td>
                            <td className="espaço">
                                <Link to="/editServico">
                                    <i className="material-icons espaço1">edit</i>
                                </Link>
                                <Link to="/">
                                    <i className="material-icons espaço1 ">delete</i>
                                </Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>


    )

}

export default Servicos