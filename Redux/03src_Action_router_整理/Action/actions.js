
function add(state,text){
    return [...state , text]
}

function remove(state,id){
    state.splice(id,1);
    return state
}

export {add,remove}