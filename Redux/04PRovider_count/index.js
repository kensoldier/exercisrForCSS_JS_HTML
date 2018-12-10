
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import Reducer from './reducer/reducer'


var store = createStore(Reducer)




  ReactDOM.render(
        <Provider store={store}>
              <App />
        </Provider>
  ,document.getElementById("root") ) 




