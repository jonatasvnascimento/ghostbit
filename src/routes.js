import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Main from '../src/page/Main/Main'
import Contato from '../src/page/Contato/Contato'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/contato" component={Contato}/>
                <Redirect from="*" to="/"/> 
            </Switch>
        </BrowserRouter>
    )
}