
export default function counter(state=[], action){

    
    if(action.type=='add'){
        return [...state , action.text]
     
    }else if(action.type=='remove'){
        // console.log(action.id);
        state.splice(action.id,1)
        return state
    }else{
        return state;
    }
}