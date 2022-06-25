import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css"
import axios from "axios";
import { useParams } from "react-router-dom";

type iprops = {
    tema: string
}
const EditProduto: React.FC<iprops> = (props) => {
React.useEffect(()=> {
        buscaDados()
    },[])

    const [nomeProduto, setNomeProduto] = React.useState('')
    const [preco, setPreco] = React.useState('')
    const [descricao, setDescricao] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [quantidade, setQuantidade] = React.useState('')  
    
    const params = useParams()

    const buscaDados = () => {
        let id = params['id']
        axios.get(`http://localhost:5000/produto/listarProduto/${id}`).then(res=>{
            
            setNomeProduto(res.data.nome)
            setPreco(res.data.preco)
            setDescricao(res.data.descricao)
            setCategoria(res.data.categoria)
            setQuantidade(res.data.quantidade)
            M.updateTextFields()
        }) 
    }
    const enviadados = () =>{
        const obj = {
            nome:nomeProduto,
            preco,
            descricao,
            categoria,
            quantidade
        }
        let id = params['id']
        axios.put(`http://localhost:5000/produto/atualizarProduto/${id}`, obj).then(res => {
            M.toast({ html: "Editado com sucesso!", classes: "modal1 rounded", });
        })
    }
    


    const editarProduto = 
    {nome:"", preco:"", codigo:"", descricao:"", categoria:"", quantidade:""}


    
        let estiloBotao = `btn waves-effect waves-light `
        
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Editar Produto</h2>
                            <div className="input-field col s6">
                                <input id="Nome Produto" type="text" value={nomeProduto}  onChange={(e)=>setNomeProduto(e.target.value)}/>
                                <label htmlFor="Nome Produto">Nome Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Preço" type="text" value={preco} onChange={(e)=>setPreco(e.target.value)}/>
                                <label htmlFor="Preço">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Descrição do produto" type="text" className="validate" value={descricao} onChange={(e)=>setDescricao(e.target.value)} />
                                <label htmlFor="Descrição do produto">Descrição do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Quantidade" type="text" className="validate" value={quantidade}  onChange={(e)=>setQuantidade(e.target.value)}/>
                                <label htmlFor="Quantidade">Quantidade</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Categoria" type="text" className="validate" value={categoria} onChange={(e)=>setCategoria(e.target.value)}/>
                                <label htmlFor="Categoria">Categoria</label>
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

export default EditProduto