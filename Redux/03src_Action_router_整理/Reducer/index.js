import {combineReducers} from 'redux';
import Counter from './counter';
import List from './listReducer';

export default combineReducers({
    Counter,
    List
})