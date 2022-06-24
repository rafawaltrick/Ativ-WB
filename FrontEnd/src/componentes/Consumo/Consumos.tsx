import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"

type iprops = {
    tema: string
}


const Consumos: React.FC<iprops> = (props)=> {
    const consumoCliente =
    {cpf:"56787763324", servico_id:"1", produto_id:"2"}
    
        let estiloBotao = `btn waves-effect waves-light `
        React.useEffect(()=> {
            M.updateTextFields()
        },[])
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Consumo Cliente</h2>
                            <div className="input-field col s12">
                                <input id="CPF-Cliente" type="text" value={consumoCliente.cpf} />
                                <label htmlFor="CPF-Cliente">CPF-Cliente</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Nome Servico" type="text" className="validate" value={consumoCliente.servico_id} />
                                <label htmlFor="Nome Servico">ID Servico</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Nome Produto" type="text" className="validate" value={consumoCliente.produto_id} />
                                <label htmlFor="Nome Produto">ID Produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao}  type="submit" name="action">Enviar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </>

        )
   
}

export default Consumos