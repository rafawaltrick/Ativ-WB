import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";

type iprops = {
    tema: string
}


const Servicos: React.FC<iprops> = (props) => {
    const servicos = [
        {nome:"Hidratação", preco:"35", descricao:"Facial e Corporal"}
    ]
    
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
                        {servicos.map((s:any, i:any)=> (
                             <tr key={i}>
                             <td>{s.nome}</td>
                             <td>{s.preco}</td>
                             <td>{s.descricao}</td>
                             <td className="espaço">
                                 <Link to = "/editServico">
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
           

        )
    
}

export default Servicos