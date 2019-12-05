
import React,{Component} from 'react'
import './App.css'
import TodoList from './pages/todolist/index.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
	render(){
		return (
			<TodoList />
		)
	}
}


export default App
