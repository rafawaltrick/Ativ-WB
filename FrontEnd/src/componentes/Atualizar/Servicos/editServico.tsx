import React, { Component } from "react";
import M from "materialize-css"
import { useParams } from "react-router-dom";
import axios from "axios";


type iprops = {
    tema: string
}


const EditServico: React.FC<iprops> = (props) => {
    
        

    const [nomeServico,setNomeServico] = React.useState('')
    const [precoServico,setPrecoServico] = React.useState('')
    const [descricaoServico,setDescricaoServico] = React.useState('')
    const params = useParams()

    const buscaDados = () => {
        let id = params['id']
        axios.get(`http://localhost:5000/servico/listarServicos/${id}`).then(res=>{
            
            setNomeServico(res.data.nomeServico)
            setPrecoServico(res.data.precoServico)
            setDescricaoServico(res.data.descricaoServico)
            M.updateTextFields()
        }) 
    }
    const enviadados = () =>{
        const obj = {
            nomeServico,
            precoServico,
            descricaoServico
        }
        let id = params['id']
        axios.put(`http://localhost:5000/servico/atualizarServico/${id}`, obj).then(res => {
            M.toast({ html: "Editado com sucesso!", classes: "modal1 rounded", });
        })
    }

        let estiloBotao = `btn waves-effect waves-light `
        React.useEffect(()=> {
            buscaDados()
        },[])
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Editar Serviço</h2>
                            <div className="input-field col s6">
                                <input id="Nome" type="text" className="validate" value={nomeServico} onChange={(e)=>setNomeServico(e.target.value)} />
                                <label htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Preço" type="text" className="validate" value={precoServico}onChange={(e)=>setPrecoServico(e.target.value)} />
                                <label htmlFor="Preço">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Descrição" type="text" className="validate" value={descricaoServico} onChange={(e)=>setDescricaoServico(e.target.value)} />
                                <label htmlFor="Descrição">Descrição</label>
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

export default EditServico