/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './cliente.css'

type iprops = {
    tema: string
}

const ListaCliente: React.FC<iprops> = (props) => {
    const masculino = [
        {nome:"José", email:"jose.marcondes@gmail.com", telefone:"12-997765456"}
    ]
        
    const feminino = [
        {nome:"Maria", email:"maria.marcondes@gmail.com", telefone:"12-997765498"}
    ]

    const consumo = [
        {nome:"Maria", quantidade:"15"}
    ]

    const maiorConsumo = [
        {nome:"José", quantidade:"21"}
    ]

    const menorConsumo = [
        {nome:"Maria", quantidade:"15"}
    ]

    const cliente5Mais = [
        {id:"2", nome:"José", preco:"15"}
    ]

    const produtoMasculino = [
        {nome:"Shampoo"}
    ]

    const produtoFeminino = [
        {nome:"Hidratante"}
    ]

        return (
            <>
            <h3 className="center">Top Clientes</h3>
            <div className='row'>
                <h4 className="center">Listagem de todos os clientes por gênero</h4>
                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Masculino</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {masculino.map((m:any, i:any)=>(
                                <tr key={i}>
                                    <td>{m.nome}</td>
                                    <td>{m.email}</td>
                                    <td>{m.telefone}</td>
                                </tr>
                                ))}
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Feminino</h5>
                            <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                            {feminino.map((f:any, i:any)=>(
                                <tr key={i}>
                                    <td>{f.nome}</td>
                                    <td>{f.email}</td>
                                    <td>{f.telefone}</td>
                                </tr>
                                ))}
                                
                            </tbody>
                            </table>
                    </div>
                </div>


                    <div className='col s12 m12 l4 estilo'>
                        <div className="box">
                            <h5>Top 10 clientes que mais consumiram produtos ou serviços</h5>
                            <h6>Consumo</h6>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {consumo.map((c:any, i:any)=>(
                                        <tr key={i}>
                                            <td>{c.nome}</td>
                                            <td>{c.quantidade}</td>
                                        </tr>
                                        ))}
                                        
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    <div className='col s12 m12 l4 estilo'>
                        <div className="box">
                        <h5>Listagem geral dos serviços ou produtos mais consumidos</h5>
                        <h6>Maior Consumo</h6>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {maiorConsumo.map((mC:any, i:any)=> (
                                    <tr key= {i}>
                                    <td>{mC.nome}</td>
                                    <td>{mC.quantidade}</td>
                                </tr>
                                ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col s12 m12 l4 estilo'>
                        <div className="box">
                        <h5>10 clientes que menos consumiram produtos ou serviços.</h5>
                        <h6>Menor Consumo</h6>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {menorConsumo.map((mc:any, i:any)=> (
                                    <tr key= {i}>
                                    <td>{mc.nome}</td>
                                    <td>{mc.quantidade}</td>
                                </tr>
                                ))}
                                    
                                </tbody>
                            </table>
                        </div>
                            
                    </div>
            </div>
            <div className="row back">
                    <h3 className="center">
                    Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Preço</th>
                            </tr>
                        </thead>

                        <tbody>                            
                            {cliente5Mais.map((c5:any, i:any)=> (
                            <tr key={i}>
                                <td>{c5.id}</td>
                                <td>{c5.nome}</td>
                                <td>{c5.preco}</td>
                            </tr>
                            ))}
                                
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                <h4 className="center">Listagem dos serviços ou produtos mais consumidos por gênero.</h4>
                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Masculino</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome do Produto</th>
                                </tr>
                            </thead>
                            <tbody>
                            {produtoMasculino.map((pm:any, i:any)=> (
                                <tr key={i}>
                                <td>{pm.nome}</td>
                            </tr>
                            ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Feminino</h5>
                            <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Nome do Produto </th>
                                </tr>
                            </thead>
                            <tbody>
                            {produtoFeminino.map((pf:any, i:any)=> (
                                <tr key={i}>
                                <td>{pf.nome}</td>
                            </tr>
                            ))}
                               
                            </tbody>
                            </table>
                    </div>
                </div>
                </div>
            </>
        )
    
}

export default ListaCliente