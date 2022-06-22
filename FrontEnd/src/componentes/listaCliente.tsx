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
                                <tr>
                                    <td>Matheus Rocha Fernandes</td>
                                    <td>MatheusRochaFernandes@rhyta.com</td>
                                    <td>12 32678-0002</td>
                                </tr>
                                <tr>
                                    <td>Livia Goncalves Fernandes</td>
                                    <td>LiviaGoncalvesFernandes@dayrep.com</td>
                                    <td>12 56789-0123</td>
                                </tr>
                                <tr>
                                    <td>Emanuel Dias Barbosa</td>
                                    <td>EmanuelDiasBarbosa@dayrep.com</td>
                                    <td>12 12354-4356</td>
                                </tr>
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
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Rodrigo Ribeiro</td>
                                            <td>12</td>
                                        </tr>

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
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rodrigo R</td>
                                        <td>12</td>
                                    </tr>
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
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Larusso</td>
                                        <td>1</td>
                                    </tr>
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
                            <tr>
                                <td>1</td>
                                <td>Shampoo</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Shampoo</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Shampoo</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Shampoo</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Shampoo</td>
                                <td>10</td>
                            </tr>
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
                                <tr>
                                    <td>Shampoo 1</td>
                                </tr>
                                <tr>
                                    <td>Shampoo 2</td>

                                </tr>
                                <tr>
                                    <td>Shampoo 3</td>
                                </tr>
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
                                <tr>
                                    <td>Shampoo 1</td>
                                </tr>
                                <tr>
                                    <td>Shampoo 2</td>
                                </tr>
                                <tr>
                                    <td>Shampoo 3</td>

                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
                </div>
            </>
        )
    
}

export default ListaCliente