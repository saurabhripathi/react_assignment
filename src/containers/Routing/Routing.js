import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import React, { Component } from 'react';
import Wrapper from '../../containers/Wrapper/Wrapper'
import Users from '../../components/Users/Users'
import User from '../../components/User/User'


class Routing extends Component{

    render(){
        return(
              <Switch>
              <Route path = '/users/:id' exact component = {User} />
              <Route path = '/users'  exact component = {Users} />
                   <Route path = '/' exact component = {Wrapper} />
              </Switch>
        )
    }
}

export default Routing