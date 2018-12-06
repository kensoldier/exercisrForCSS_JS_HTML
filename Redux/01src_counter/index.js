
import React from 'react';
import ReactDOM from 'react-dom';
import {App,store} from './App';

// console.log(store)

//拿到  之後就監聽

function render(){
  ReactDOM.render(<App />,document.getElementById("root") ) 
}
render()

store.subscribe(render)//用subscribe  重新渲染