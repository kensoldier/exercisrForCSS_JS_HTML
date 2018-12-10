import { connect } from "react-redux";

var appReducer=function(state , action){
        if(!state){
            return {
                count:0
            }
        }
        switch(action.type){
            case 'ADD_ONE':
            return{
                state ,
                count : state.count + 1
            };
            case 'MINUS_ONE':
            return{
                state ,
                count : state.count -1
            };
            default:
            return state;
        }
}




export default appReducer;