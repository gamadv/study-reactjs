import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './Pages/main';
import Product from './Pages/product';

const Routes = () =>(
    <BrowserRouter>
        <Switch>          
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
/*
Route path='/' quando a URL estiver sem paramentro
irá visualizar tal componente, que no caso é o Main
de Pages -> Main



Switch: Serve para definir que a página
retorne 1 link por vez, visualizar quantos
componentes serão visualizados
 */