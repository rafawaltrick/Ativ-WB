import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";



type iprops = {
    tema: string
}


const Clientes: React.FC<iprops> = (props)=> {
    const padrao = [{
        nome:"Rafael", nomeSocial:"Rafel", cpf:"12", rg:"34", telefone:"56", id:1
    },{
        nome:"Joel", nomeSocial:"Jo", cpf:"13", rg:"33", telefone:"53", id:2
    },{
        nome:"Felipe", nomeSocial:"Lipe", cpf:"17", rg:"37", telefone:"57", id:3
    },{
        nome:"Felizberto", nomeSocial:"Berto", cpf:"12", rg:"32", telefone:"52", id:4
    }]
    const[clientes, setClientes] = React.useState(padrao)
    
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Lista de Clientes
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Name Social</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>

                        <tbody>
                            {clientes.map((c:any)=>(
                                <tr key={c.id}>
                                <td>{c.nome}</td>
                                <td>{c.nomeSocial}</td>
                                <td>{c.cpf}</td>
                                <td>{c.rg}</td>
                                <td>{c.telefone}</td>
                                <td className="espaço">
                                    <Link to = "/Consumo">
                                        <i className="material-icons espaço1">local_grocery_store</i>
                                    </Link>
                                    <Link to = "/editCliente">
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
export default Clientes