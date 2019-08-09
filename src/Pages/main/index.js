/*
Import api para buscar dados /
funções do backend onde esteja 
hospedado
*/

import React, {Component} from 'react';
import api from '../../services/api';
import './main-style.css';

export default class Main extends Component{
 /* React não trabalha exatamente com variáveis
Trabalha com STATES, estados são como variáveis.
- Estado é Sempre um Objeto; State = {OBJETO:}
*/  
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };
/* 
ComponentDidMount: função que inicia no 
ciclo de vida component, métodos que executam 
automaticamente aassim que o component é 
Exibido                                */
componentDidMount (){
    this.loadProducts();
}


loadProducts = async (page = 1) => {
    const response = await api.get (`/products?page=${page}`);

    const {docs, ...productInfo} = response.data;

    //Setando Valor nos States
    this.setState({ products: docs, productInfo, page });
};


prevPage = () => {
    const {page, productInfo} = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
};

nextPage = () => {
    const {page, productInfo} = this.state;
    if (page === productInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
};


/*Método RENDER "depende" de alguns STATES, ele possui
ouvinte de states automatico, ouvindo alterações do
STATE e reexecutando o método RENDER, mostrando em tela.
 */
    render (){
    // Busca variáveis no this.state
        const {products, page, productInfo} = this.state;


        return (
            <div className="product-list">
                 {products.map(product =>(
                        <article key={product._id}>
                            <strong> {product.title} </strong>
                            <p> {product.description} </p>
                            <a href="">Veja</a>
                        </article>
                    
                ))}
                <div className="actions"> 
                    <button disabled={page === 1} onClick = {this.prevPage}>Voltar</button>
                    <button disabled={page === productInfo.pages}onClick = 
                    {this.nextPage}>Avançar</button>
                </div>
            </div>
            
            
        )
    }
}

/*
MAP: função para percorrer Vetor (eu acho)
React exige KEY quando uso do MAP, foi-se usado
ID do próprio produto.

*/