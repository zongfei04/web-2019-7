
import React, { Component } from 'react'
import './App.css'

import { 
    BrowserRouter as Router, 
    Route, 
    Link,
    Switch,
    Redirect 
} from "react-router-dom"

import login from './pages/login'
import home from './pages/home'
import {getUsername} from 'util'

import Err from './commont/err'
// import TodoList from pages
class App extends Component {
    
    render() {
        const HomeRoute = ({component:Component,...rest})=>{
            return (
                <Route 
                    {...rest}
                    render = {(props)=>{
                        return getUsername() ? <Component /> : <Redirect to='/login' />
                    }}
                />
            )
        }
         const LoginRoute = ({component:Component,...rest})=>{
            return (
                <Route 
                    {...rest}
                    render = {(props)=>{
                        return getUsername() ? <Redirect to='/' /> : <Component />  
                    }}
                />
            )
        }
        return (
            <Router>
                <div className="App">
                 <Switch>
                     <HomeRoute exact path="/" component={home} /> 
                     <HomeRoute path="/user" component={home} /> 
                     <LoginRoute path="/login" component={login} />
                     <Route component={Err} />
                 </Switch>
                   
                </div>
            </Router>
        )          
    }
}



export default App