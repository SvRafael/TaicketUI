import React from 'react'
import { Router, Switch, Route } from "react-router"

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import {history} from '../history'
import NotFound from './NotFound'

const Routes = () =>(
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path = "/login"/>
            <Route component={Register} exact path = "/register"/>
            <Route component={Home} exact path = "/home"/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes