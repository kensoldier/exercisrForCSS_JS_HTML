import React,{Component} from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux'
 import  AddTodo  from "./components/AddTodo";
 import TodoList from './components/TodoList'

class App extends React.Component{    

 
    render(){
  
        return (<div>
                <AddTodo/>
                <TodoList/>
                </div>)
    }
}


App= connect()(App)
export {App}