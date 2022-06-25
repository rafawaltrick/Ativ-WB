import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"
import axios from "axios";

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

    const [cli_id, setCli_id] = React.useState('')
    const [prod_id, setProd_id] = React.useState('')
    const [serv_id, setServ_id] = React.useState('')





    const enviadados = () => {
        const obj = {
            cli_id,
            prod_id,
            serv_id
        }
        axios.post('http://localhost:5000/consumo/criarConsumo', obj).then(res => {
            M.toast({ html: "Registro realizado com sucesso!", classes: "modal1 rounded", });
        })
    }


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
                                        <input id="CPF-Cliente" type="text" value={cli_id} onChange={(e)=>setCli_id(e.target.value)} />
                                        <label htmlFor="CPF-Cliente">ID-Cliente</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="Nome Servico" type="text" className="validate" value={serv_id} onChange={(e)=>setServ_id(e.target.value)}/>
                                        <label htmlFor="Nome Servico">ID Servico</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="Nome Produto" type="text" className="validate" value={prod_id} onChange={(e)=>setProd_id(e.target.value)}/>
                                        <label htmlFor="Nome Produto">ID Produto</label>
                                    </div>
                                </div>
                            
                        </div>
                    </li>
                </ul>

                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="button" onClick={enviadados} name="action">Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>

                </div>
            </div>
        </>

    )

}

export default Consumos