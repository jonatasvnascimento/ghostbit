import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './page/Main/Main'
import Contato from './page/Contato/Contato'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/contato" component={Contato}/>

            </Switch>
        </BrowserRouter>
    )
}