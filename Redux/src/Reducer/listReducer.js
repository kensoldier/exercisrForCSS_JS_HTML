import {ListData} from '../Action/initData'
import { add, remove } from '../Action/actions';
export default function counter(state=ListData, action){
    switch(action.type){
        case "add":
        return add(state,action.text)
        break;
        case "remove":
        return remove(state,action.id)
        break;
        default:
             return state ;
    }
    
    // if(action.type=='add'){
    //     return add(state, action.text)
     
    // }else if(action.type=='remove'){
   
    //     return remove(state,action.id)
    // }else{
    //     return state;
    // }
}