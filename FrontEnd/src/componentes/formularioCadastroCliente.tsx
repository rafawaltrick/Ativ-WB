import { cp } from "fs";
import React, { Component } from "react";
import './cadastro.css'
import M from "materialize-css"

type iprops = {
    tema: string
}


const FormularioCadastroCliente: React.FC<iprops> = (props)=> {
    const cadastroCliente = 
        {nome:"Robson", nomeSocial:"Rob", rg:"337347659", cpf:"23456613325", telefone:"31245633", email:"rab.son@gmail.com"}
    

    const cadastroProduto = 
        {nome:"Creme de Depilação", preco:"50", codigo:"12", descricao:"Creme para Depilação Íntima", categoria:"Estética", quantidade:"69"}
    

    const cadastroServico =
        {nome:"Depilação", preco:"65", descricao:"Retirada de Pelos"}
    
    
        let estiloBotao = `btn waves-effect waves-light `
        React.useEffect(()=> {
            M.updateTextFields()
        },[])
        return (
            <>
            <h3 className="center">Cadastros</h3>
            <div className="row">
                <form className="col s12 box1">
                
                    <div className="row">
                        <h2 className="center">Cadastro Cliente</h2>
                        
                            <div className="input-field col s6">
                                <input id="Nome" type="text" value={cadastroCliente.nome} />
                                <label htmlFor="Nome">Nome</label>
                            </div>
                        
                        
                            <div className="input-field col s6">
                                <input id="Nome Social" type="text" value={cadastroCliente.nomeSocial}  />
                                <label htmlFor="Nome Social">Nome Social</label>
                            </div>
                        
                    </div>

                    <div className="row">
                        
                            <div className="input-field col s6">
                                <input id="RG" type="text" value={cadastroCliente.rg} />
                                <label htmlFor="RG">RG</label>
                            </div>
                        
                        
                            <div className="input-field col s6">
                                <input id="CPF" type="text" value={cadastroCliente.cpf}  />
                                <label htmlFor="CPF">CPF</label>
                            </div>
                        
                    </div>
                    <div className="row">
                        
                            <div className="input-field col s6">
                                <input id="telefone" type="text" value={cadastroCliente.telefone}  />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                        
                        
                            <div className="input-field col s6">
                                <input id="email" type="text" value={cadastroCliente.email}  />
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
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Cadastro Produto</h2>
                            
                                <div className="input-field col s6">
                                <input id="Produto" type="text" value={cadastroProduto.nome} />
                                <label htmlFor="Produto">Nome do Produto</label>
                            </div>
                            
                            
                                <div className="input-field col s6">
                                <input id="Preço" type="text" value={cadastroProduto.preco} />
                                <label htmlFor="Preço">Preço do Produto</label>
                            </div>
                            
                        </div>

                        <div className="row">
                            
                                <div className="input-field col s6">
                                <input id="Codigo do Produto" type="text" value={cadastroProduto.codigo} />
                                <label htmlFor="Codigo do Produto">Código do Produto</label>
                            </div>
                            
                            
                                <div className="input-field col s6">
                                <input id="Descrição do produto" type="text" value={cadastroProduto.descricao} />
                                <label htmlFor="Descrição do produto">Descrição do Produto</label>
                            </div>
                                               
                        </div>

                        <div className="row">
                            
                                <div className="input-field col s6">
                                <input id="categoria"  type="text" value={cadastroProduto.categoria} />
                                <label htmlFor="categoria">Categoria</label>
                            </div>
                            
                            
                                <div className="input-field col s6">
                                <input id="Quantidade" type="text" value={cadastroProduto.quantidade} />
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
                <div className="row">
                    <form className="col s12 box1">
                        
                        <div className="row">
                            <h2 className="center">Cadastro Serviço</h2>
                            
                                <div className="input-field col s6">
                                <input id="nome Servico"  type="text" value={cadastroServico.nome} />
                                <label htmlFor="nome Servico">Nome Serviço</label>
                            </div>
                            
                          
                            <div className="input-field col s6">
                                <input id="preço"  type="text" value={cadastroServico.preco}  />
                                <label htmlFor="preço">Preço</label>
                            </div>
                                                   
                        </div>

                        <div className="row">
                           
                            <div className="input-field col s6">
                                <input id="Descricao" type="text" value={cadastroServico.descricao}  />
                                <label htmlFor="Descricao">Descrição</label>
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

export default FormularioCadastroCliente