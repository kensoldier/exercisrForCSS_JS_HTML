import React,{Component} from 'react';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux'
import {add_one,minus_one} from "./action/action"

class App extends React.Component{    

 
    render(){
        // console.log(this.props);
        const {count,add_one,minus_one}=this.props;
        return (<div>
                    <input type="button" value="---" onClick={minus_one}/>
                    {count}
                    <input type="button" value="+++" onClick={add_one}/>
                    
                </div>)
    }
}
const mapStateToProps=function(state,ownProps){
return{
    count:state.reducer.count// state.reducer.count 因為使用combineReducers後 被多包了一層，所以要指名是從哪個 Reducer來的
}
}

const mapDispatchToProps=function(dispatch,ownProps){
    return{
        add_one:function(){
            dispatch(add_one())
        },
        minus_one:function(){
            dispatch(minus_one())
        }
        
    }
    }
App =connect(mapStateToProps,mapDispatchToProps)(App)
export {App}