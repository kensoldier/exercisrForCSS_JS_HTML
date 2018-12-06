import React,{Component} from 'react';
import {createStore} from 'redux';
import List from './Component/list'
import list from './Reducer/listReducer'

let store=createStore(list);
// console.log(store.getState())



class App extends React.Component{    

    add(value){
        // console.log(value)
        store.dispatch({type:"add",text:value})
    }
    remove(id){
        // console.log(id)
        store.dispatch({type:"remove",id:id})
    }
    render(){
        return (<div>
                 <List
                     value={store.getState()}
                     add={this.add.bind(this)}
                     remove={this.remove.bind(this)}
                 />
                </div>)
    }
}

export {App,store}