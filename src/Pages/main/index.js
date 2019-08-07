import React, {Component} from 'react';
import api from '../../services/api';
import './main-style.css';

export default class Main extends Component{
 /* React não trabalha exatamente com variáveis
Trabalha com STATES, estados são como variáveis.
- Estado é Sempre um Objeto; State = {OBJETO:}
*/  
    state = {
        products: []
    };
/* 
ComponentDidMount: função que inicia no 
ciclo de vida component, métodos que executam 
automaticamente aassim que o component é 
Exibido                                */
componentDidMount (){
    this.loadProducts();
}


loadProducts = async () => {
    const response = await api.get ('/products');

    //Setando Valor no State Products
    this.setState({ products: response.data.docs});
};

/*Método RENDER "depende" de alguns STATES, ele possui
ouvinte de states automatico, ouvindo alterações do
STATE e reexecutando o método RENDER, mostrando em tela.
 */
    render (){
    // Busca variável no this.state
        const {products} = this.state;


        return (
            <div className="product-list">
                 {products.map(product =>(
                        <article key={product._id}>
                            <strong> {product.title} </strong>
                            <p> {product.description} </p>
                            <a href="">Veja</a>
                                                    </article>
                    
                ))}
            </div>
        )
    }
}

/*
MAP: função para percorrer Vetor (eu acho)
React exige KEY quando uso do MAP, foi-se usado
ID do próprio produto.

*/