import { cp } from "fs";
import { Component } from "react";
import './cadastro.css'

type iprops = {
    tema: string
}


const FormularioCadastroCliente: React.FC<iprops> = (props)=> {
    const cadastroCliente = [
        {nome:"Robson", nomeSocial:"Rob", rg:"337347659", cpf:"23456613325", telefone:"31245633", email:"rab.son@gmail.com"}
    ]

    const cadastroProduto = [
        {nome:"Creme de Depilação", preco:"50", codigo:"12", descricao:"Creme para Depilação Íntima", categoria:"Estética", quantidade:"69"}
    ]

    const cadastroServico =[
        {nome:"Depilação", preco:"65", descricao:"Retirada de Pelos"}
    ]
    
        let estiloBotao = `btn waves-effect waves-light `
        return (
            <>
            <h3 className="center">Cadastros</h3>
            <div className="row">
                <form className="col s12 box1">
                
                    <div className="row">
                        <h2 className="center">Cadastro Cliente</h2>
                        {cadastroCliente.map((cC:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="Nome" type="text" />
                                <label htmlFor="Nome">{cC.nome}</label>
                            </div>
                        ))}
                        {cadastroCliente.map((cC:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="Nome Social" type="text"  />
                                <label htmlFor="Nome Social">{cC.nomeSocial}</label>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        {cadastroCliente.map((cC:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="RG" type="text" />
                                <label htmlFor="RG">{cC.rg}</label>
                            </div>
                        ))}
                        {cadastroCliente.map((cC:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="CPF" type="text"  />
                                <label htmlFor="CPF">{cC.cpf}</label>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        {cadastroCliente.map((cC:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="telefone" type="text"  />
                                <label htmlFor="telefone">{cC.telefone}</label>
                            </div>
                        ))}
                        {cadastroCliente.map((cC:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="email" type="text"  />
                                <label htmlFor="email">{cC.email}</label>
                            </div>
                        ))}
                    
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
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Cadastro Produto</h2>
                            {cadastroProduto.map((cp:any, i:any)=> (
                                <div key={i} className="input-field col s6">
                                <input id="Produto" type="text" />
                                <label htmlFor="Produto">{cp.nome}</label>
                            </div>
                            ))}
                            {cadastroProduto.map((cp:any, i:any)=> (
                                <div key={i} className="input-field col s6">
                                <input id="Preço" type="text"/>
                                <label htmlFor="Preço">{cp.preco}</label>
                            </div>
                            ))}
                        </div>

                        <div className="row">
                            {cadastroProduto.map((cp:any, i:any)=> (
                                <div key={i} className="input-field col s6">
                                <input id="Codigo do Produto" type="text"/>
                                <label htmlFor="Codigo do Produto">{cp.codigo}</label>
                            </div>
                            ))}
                            {cadastroProduto.map((cp:any, i:any)=> (
                                <div key={i} className="input-field col s6">
                                <input id="Descrição do produto" type="text" />
                                <label htmlFor="Descrição do produto">{cp.descricao}</label>
                            </div>
                            ))}                            
                        </div>

                        <div className="row">
                            {cadastroProduto.map((cp:any, i:any)=> (
                                <div key={i} className="input-field col s6">
                                <input id="categoria"  type="text" />
                                <label htmlFor="categoria">{cp.categoria}</label>
                            </div>
                            ))}
                            {cadastroProduto.map((cp:any, i:any)=> (
                                <div key={i} className="input-field col s6">
                                <input id="Quantidade" type="text" />
                                <label htmlFor="Quantidade">{cp.quantidade}</label>
                            </div>
                            ))}
                            
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
                <div className="row">
                    <form className="col s12 box1">
                        
                        <div className="row">
                            <h2 className="center">Cadastro Serviço</h2>
                            {cadastroServico.map((cs:any, i:any)=> (
                                <div key={i} className="input-field col s6">
                                <input id="nome Servico"  type="text" />
                                <label htmlFor="nome Servico">{cs.nome}</label>
                            </div>
                            ))}
                            {cadastroServico.map((cs:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="preço"  type="text"  />
                                <label htmlFor="preço">{cs.preco}</label>
                            </div>
                            ))}                            
                        </div>

                        <div className="row">
                            {cadastroServico.map((cs:any, i:any)=> (
                            <div key={i} className="input-field col s6">
                                <input id="Descricao" type="text"  />
                                <label htmlFor="Descricao">{cs.descricao}</label>
                            </div>
                        ))}
                            

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

export default FormularioCadastroCliente