import React, { Component } from "react";
import M from "materialize-css"


type iprops = {
    tema: string
}


const EditServico: React.FC<iprops> = (props) => {
    const editarServico =
    {nome:"", preco:"", descricao:""}

    
        let estiloBotao = `btn waves-effect waves-light `
        React.useEffect(()=> {
            M.updateTextFields()
        },[])
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Editar Serviço</h2>
                            <div className="input-field col s6">
                                <input id="Nome" type="text" className="validate" value={editarServico.nome} />
                                <label htmlFor="Nome">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Preço" type="text" className="validate" value={editarServico.preco} />
                                <label htmlFor="Preço">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Descrição" type="text" className="validate" value={editarServico.descricao} />
                                <label htmlFor="Descrição">Descrição</label>
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

export default EditServico