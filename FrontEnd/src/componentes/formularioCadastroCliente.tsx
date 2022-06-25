import React, { useState } from "react";
import './cadastro.css'
import M from "materialize-css"
import axios from "axios";

type iprops = {
    tema: string
}


const FormularioCadastroCliente: React.FC<iprops> = (props) => {

    const [nome, setNome] = React.useState('')
    const [nomeSocial, setNomeSocial] = React.useState('')
    const [rg, setRg] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [telefone, setTelefone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [genero, setGenero] = React.useState('')

    const enviadados = () => {
        const obj = {
            nome,
            nomeSocial,
            cpf,
            rg,
            telefone,
            genero
        }
        axios.post('http://localhost:5000/cliente/criarCliente', obj).then(res => {
            M.toast({ html: "Registro realizado com sucesso!", classes: "modal1 rounded", });

        })
    }

    const cadastroProduto =
        { nome: "Creme de Depilação", preco: "50", codigo: "12", descricao: "Creme para Depilação Íntima", categoria: "Estética", quantidade: "69" }

    const [nomeProduto, setNomeProduto] = React.useState('')
    const [preco, setPreco] = React.useState('')
    const [descricao, setDescricao] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [quantidade, setQuantidade] = React.useState('')

    const enviarProduto = () => {
        const obj = {
            nome: nomeProduto,
            preco,
            descricao,
            categoria,
            quantidade
        }
        axios.post('http://localhost:5000/produto/criarProduto', obj).then(res => {
            M.toast({ html: "Registro realizado com sucesso!", classes: "modal1 rounded", });
        })
    }

    const [nomeServico,setNomeServico] = React.useState('')
    const [precoServico,setPrecoServico] = React.useState('')
    const [descricaoServico,setDescricaoServico] = React.useState('')

    const enviarServico = () =>{
        const obj = {
            nomeServico,
            precoServico,
            descricaoServico
        }
        axios.post('http://localhost:5000/servico/criarServico',obj).then(res =>{
            M.toast({ html: "Registro realizado com sucesso!", classes: "modal1 rounded", });

        })
    }

    const cadastroServico =
        { nome: "Depilação", preco: "65", descricao: "Retirada de Pelos" }


    let estiloBotao = `btn waves-effect waves-light `
    React.useEffect(() => {
        M.updateTextFields()
    }, [])

    return (
        <>
            <h3 className="center">Cadastros</h3>
            <div className="row">
                <form className="col s12 box1">

                    <div className="row">
                        <h2 className="center">Cadastro Cliente</h2>

                        <div className="input-field col s6">
                            <input id="Nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                            <label htmlFor="Nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Nome Social" type="text" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
                            <label htmlFor="Nome Social">Nome Social</label>
                        </div>

                    </div>

                    <div className="row">

                        <div className="input-field col s6">
                            <input id="RG" type="text" value={rg} onChange={(e) => setRg(e.target.value)} />
                            <label htmlFor="RG">RG</label>
                        </div>


                        <div className="input-field col s6">
                            <input id="CPF" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            <label htmlFor="CPF">CPF</label>
                        </div>

                    </div>
                    <div className="row">

                        <div className="input-field col s6">
                            <input id="telefone" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Genero" type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
                            <label htmlFor="Genero">Genero</label>
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
            <div className="row">
                <form className="col s12 box1">
                    <div className="row">
                        <h2 className="center">Cadastro Produto</h2>

                        <div className="input-field col s6">
                            <input id="Produto" type="text" value={nomeProduto} onChange={(e)=> setNomeProduto(e.target.value) } />
                            <label htmlFor="Produto">Nome do Produto</label>
                        </div>


                        <div className="input-field col s6">
                            <input id="Preço" type="text" value={preco} onChange={(e)=> setPreco(e.target.value) }/>
                            <label htmlFor="Preço">Preço do Produto</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Descrição do produto" type="text" value={descricao} onChange={(e)=> setDescricao(e.target.value) }/>
                            <label htmlFor="Descrição do produto">Descrição do Produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Quantidade" type="text" value={quantidade} onChange={(e)=> setQuantidade(e.target.value) }/>
                            <label htmlFor="Quantidade">Quantidade</label>
                        </div>
                    </div>

                    <div className="row">

                        <div className="input-field col s6">
                            <input id="categoria" type="text" value={categoria} onChange={(e)=> setCategoria(e.target.value) }/>
                            <label htmlFor="categoria">Categoria</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="button" onClick={enviarProduto} name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
            <div className="row">
                <form className="col s12 box1">

                    <div className="row">
                        <h2 className="center">Cadastro Serviço</h2>

                        <div className="input-field col s6">
                            <input id="nome Servico" type="text" value={nomeServico} onChange={(e)=> setNomeServico(e.target.value)} />
                            <label htmlFor="nome Servico">Nome Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="preço" type="text" value={precoServico} onChange={(e)=> setPrecoServico(e.target.value) } />
                            <label htmlFor="preço">Preço</label>
                        </div>

                    </div>
                    <div className="row">

                        <div className="input-field col s6">
                            <input id="Descricao" type="text" value={descricaoServico} onChange={(e)=>setDescricaoServico(e.target.value)} />
                            <label htmlFor="Descricao">Descrição</label>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="button" onClick={enviarServico} name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )

}

export default FormularioCadastroCliente