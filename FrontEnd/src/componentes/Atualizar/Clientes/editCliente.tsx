import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"
import axios from "axios";
import { useParams } from "react-router-dom";

type iprops = {
    tema: string
}


const EditCliente: React.FC<iprops> = (props) => {
    const editarCliente = 
    {nome:"", nomeSocial:"", rg:"", cpf:"", telefone:"", email:""}

    
        let estiloBotao = `btn waves-effect waves-light `
        React.useEffect(()=> {
            buscaDados()
        },[])


        const [nome, setNome] = React.useState('')
        const [nomeSocial, setNomeSocial] = React.useState('')
        const [rg, setRg] = React.useState('')
        const [cpf, setCpf] = React.useState('')
        const [telefone, setTelefone] = React.useState('')
        const [genero, setGenero] = React.useState('')
        
        const params = useParams()

        const buscaDados = () => {
            let id = params['id']
            axios.get(`http://localhost:5000/cliente/listarCliente/${id}`).then(res=>{
                setNome(res.data.nome)
                setNomeSocial(res.data.nomeSocial)
                setRg(res.data.rg)
                setCpf(res.data.cpf)
                setTelefone(res.data.telefones)
                setGenero(res.data.genero)
                M.updateTextFields()
            }) 

        }
        const enviadados = () =>{
            const obj = {
                nome,
                nomeSocial,
                cpf,
                rg,
                telefone,
                genero
            }
            let id = params['id']
            axios.put(`http://localhost:5000/cliente/atualizarCliente/${id}`, obj).then(res => {
                M.toast({ html: "Editado com sucesso!", classes: "modal1 rounded", });
            })
        }
        
        return (
            <>
            <div className="row">
                <form className="col s12 box1">
                    <div className="row">
                        <h2 className="center">Editar Cliente</h2>
                        <div className="input-field col s6">
                            <input id="Nome" type="text" className="validate" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                            <label htmlFor="Nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Nome Social" type="text" className="validate" value={nomeSocial}  onChange={(e)=>setNomeSocial(e.target.value)}/>
                            <label htmlFor="Nome Social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="RG" type="text" className="validate" value={rg} onChange={(e) => setRg(e.target.value)}/>
                            <label htmlFor="RG">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="CPF" type="text" className="validate" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                            <label htmlFor="CPF">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                            <label htmlFor="telefone">telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero" type="text" className="validate" value={genero} onChange={(e) => setGenero(e.target.value)}/>
                            <label htmlFor="genero">genero</label>
                        </div>
                        
                        
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="button" onClick={enviadados} name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
                
            </>

        )
    
}

export default EditCliente