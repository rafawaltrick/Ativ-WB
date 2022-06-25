import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"

type iprops = {
    tema: string
}


const Consumos: React.FC<iprops> = (props) => {
    const consumoCliente =
        { cpf: "56787763324", servico_id: "1", produto_id: "2" }

    let estiloBotao = `btn waves-effect waves-light `
    React.useEffect(() => {

        M.updateTextFields()
        //M.AutoInit()
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems);
    }, [])
    return (
        <>
            <div className="row">
                <div className="row">
                    <h2 className="center">Consumo Cliente</h2>
                </div>
                <ul className="collapsible popout">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">account_box</i>Consumo do Cliente</div>
                        <div className="collapsible-body">
                           
                                <div className="row">
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
                            
                        </div>
                    </li>
                </ul>

                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>

                </div>
            </div>
        </>

    )

}

export default Consumos