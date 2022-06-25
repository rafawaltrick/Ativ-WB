import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";
import axios from "axios";



type iprops = {
    tema: string
}


const Clientes: React.FC<iprops> = (props)=> {
    
    const[clientes, setClientes] = React.useState([])

    const buscaDados = () =>{
        axios.get('http://localhost:5000/cliente/listarClientes').then(res=>{
            setClientes(res.data)
        })
    }
    React.useEffect(()=>{
        buscaDados()
    },[])

    const destroydados = (id:number) =>{
        
        axios.delete(`http://localhost:5000/cliente/deletarCliente/${id}`).then(res => {
            M.toast({ html: "deletado com sucesso!", classes: "modal1 rounded", });
            const clientes2 = clientes.filter((p:{id:number})=>p.id!==id)
            setClientes(clientes2)
        })
    }
    
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
                                <td>{c.telefones}</td>
                                <td className="espaço">
                                    <Link to = {`/Consumo/${c.id}`  }>
                                        <i className="material-icons espaço1">local_grocery_store</i>
                                    </Link>
                                    <Link to = {`/editCliente/${c.id}`  }> 
                                        <i className="material-icons espaço1">edit</i>
                                    </Link>

                                    <span  onClick={()=>destroydados(c.id)}>
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
export default Clientes