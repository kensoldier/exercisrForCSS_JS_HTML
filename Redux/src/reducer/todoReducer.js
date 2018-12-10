import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from '../action'
const todoReducer =function(state,action){
    if(!state){
        return []
    }
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                title:action.title,
                content:action.content,
                id:action.id,
                date:action.date,
                upDate:action.upDate
            }
            ]
        case DELETE_TODO:
            
            let newState=state.filter((item)=>item.id !== action.id)
            // console.log(newState);
            return newState;

        case UPDATE_TODO:
            return state.map((todo)=>{
               if(todo.id===action.id){
                   todo.upDate=(!todo.upDate)
               }
                return todo
            });
        default :
            return state ;
    }
}
export default todoReducer;