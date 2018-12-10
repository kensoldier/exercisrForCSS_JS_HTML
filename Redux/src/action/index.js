export const ADD_TODO='ADD_TODO';
export const DELETE_TODO='DELETE_TODO';
export const UPDATE_TODO='UPDATE_TODO';

export const add_todo=function(title,content,id,date){
    return {
        type:ADD_TODO,
        title,
        content,
        id,
        date,
        upDate:false
    }
}

export const delete_todo=function(id){
    return {
        type:DELETE_TODO,
        id,
    }
}

export const update_todo=function(id){
    return {
        type:UPDATE_TODO,
        id,
    }
}