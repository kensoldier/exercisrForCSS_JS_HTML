import {ListData} from '../Action/initData'
import { add, remove } from '../Action/actions';
export default function List(state=ListData, action){
    
    
    switch(action.type){
        case "listAdd":
        return add(state,action.text)
        break;
        case "remove":
        return remove(state,action.id)
        break;
        default:
             return state ;
    }
    //方1
    // if(action.type=='add'){
    //     return add(state, action.text)
     
    // }else if(action.type=='remove'){
   
    //     return remove(state,action.id)
    // }else{
    //     return state;
    // }
}