
import React from 'react';
import ReactDOM from 'react-dom';
import {App,store} from './App';



function render(){

  ReactDOM.render(<App />,document.getElementById("root") ) 
}
render();
store.subscribe(render);



