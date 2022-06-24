import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"

type iprops = {
    tema: string
}


const EditProduto: React.FC<iprops> = (props) => {
    const editarProduto = 
    {nome:"", preco:"", codigo:"", descricao:"", categoria:"", quantidade:""}

    
        let estiloBotao = `btn waves-effect waves-light `
        React.useEffect(()=> {
            M.updateTextFields()
        },[])
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Editar Produto</h2>
                            <div className="input-field col s6">
                                <input id="Nome Produto" type="text" value={editarProduto.nome} />
                                <label htmlFor="Nome Produto">Nome Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Preço" type="text" />
                                <label htmlFor="Preço">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Codigo do Produto" type="text" className="validate" value={editarProduto.codigo} />
                                <label htmlFor="Codigo do Produto">Codigo do Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Descrição do produto" type="text" className="validate" value={editarProduto.descricao} />
                                <label htmlFor="Descrição do produto">Descrição do produto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Categoria" type="text" className="validate" value={editarProduto.categoria} />
                                <label htmlFor="Categoria">Categoria</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Quantidade" type="text" className="validate" value={editarProduto.quantidade} />
                                <label htmlFor="Quantidade">Quantidade</label>
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

export default EditProduto