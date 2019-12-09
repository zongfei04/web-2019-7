
import React, { Component } from 'react'
import './App.css'

import { 
    BrowserRouter as Router, 
    Route, 
    Link,
    Switch 
} from "react-router-dom"

import login from './pages/login'
// import TodoList from pages
class App extends Component {
    
    render() {
        return (
            <Router>
                <div className="App">
                     <Route path="/login" component={login} /> 
                </div>
            </Router>
        )          
    }
}



export default App