
export default function counter(state=0, action){

    
    if(action.type=='add'){
        return state+1;
    }else if(action.type=='minus'){
        return state-1;
    }else{
        return state;
    }
}