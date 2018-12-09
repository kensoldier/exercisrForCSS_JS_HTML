import React,{Component} from 'react';
import {createStore} from 'redux';
import List from './Component/list' ;
import Counter from './Component/counter';
import IndexReducer from './Reducer' ;

let store=createStore(IndexReducer);
// console.log(store.getState())

// store.dispatch({type:"minus"})

class App extends React.Component{    

    add(value){
        store.dispatch({type:"listAdd",text:value})
    }
    remove(id){
        // console.log(id)
        store.dispatch({type:"remove",id:id})
    }
    render(){
        return (<div>
                   <Counter
                       value={store.getState().Counter}
                       onAdd={()=>{store.dispatch({'type':'add'})}}
                       onMinus={()=>{store.dispatch({'type':'minus'})}}
                   />
                   <List 
                    value={store.getState()}
                    add={this.add.bind(this)}
                     />
                </div>)
    }
}

export {App,store}