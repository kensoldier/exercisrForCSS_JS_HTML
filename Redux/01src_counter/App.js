import React,{Component} from 'react';
import counter from './reducer/counter'
import {createStore} from 'redux';
import Counter from './component/counter/counter'

let store=createStore(counter);
console.log(store.getState());//獲取狀態    //之前是用setState    subscribe 去從新渲染



class App extends React.Component{    

    render(){
        return (<div>
                        <Counter
                        value={store.getState()}
                        onAdd={()=>store.dispatch({type:'add'})}
                        onMinus={()=>store.dispatch({type:'minus'})}
                        />
                </div>)
    }
}

export {App,store}