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

    const destroydados = (id:number) =>{
        
        axios.delete(`http://localhost:5000/servico/deletarServico/${id}`).then(res => {
            M.toast({ html: "deletado com sucesso!", classes: "modal1 rounded", });
            const servico = listarServicos.filter((p:{id:number})=>p.id!==id)
            setServicos(servico)
        })
    }
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
                                <Link to= {`/editServico/${s.id}`}>
                                    <i className="material-icons espaço1">edit</i>
                                </Link>
                                <span  onClick={()=>destroydados(s.id)}>
                                    <i className="material-icons espaço1 " >delete</i>
                                </span>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>


    )

}

export default Servicos