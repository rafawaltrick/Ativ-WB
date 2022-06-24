import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"

type iprops = {
    tema: string
}


const EditCliente: React.FC<iprops> = (props) => {
    const editarCliente = 
    {nome:"", nomeSocial:"", rg:"", cpf:"", telefone:"", email:""}

    
        let estiloBotao = `btn waves-effect waves-light `
        React.useEffect(()=> {
            M.updateTextFields()
        },[])
        return (
            <>
            <div className="row">
                <form className="col s12 box1">
                    <div className="row">
                        <h2 className="center">Editar Cliente</h2>
                        <div className="input-field col s6">
                            <input id="Nome" type="text" className="validate" value={editarCliente.nome} />
                            <label htmlFor="Nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Nome Social" type="text" className="validate" value={editarCliente.nomeSocial} />
                            <label htmlFor="Nome Social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="RG" type="text" className="validate" value={editarCliente.rg} />
                            <label htmlFor="RG">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="CPF" type="text" className="validate" value={editarCliente.cpf} />
                            <label htmlFor="CPF">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" value={editarCliente.telefone} />
                            <label htmlFor="telefone">telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="text" className="validate" value={editarCliente.email} />
                            <label htmlFor="email">E-mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Enviar
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