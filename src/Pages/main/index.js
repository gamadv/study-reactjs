import React, {Component} from 'react';
import api from '../../services/api';

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
automaticamente assim que o component é 
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
ouvinte de states automatico, ouvindo alterações e re-
executando.
 */
    render (){
        return (
            <div className="product-list">
                {this.state.products.map(product =>(
                        <h2 key={product._id}>{product.title} </h2>
                    )
                )}
            </div>
        )
    }
}