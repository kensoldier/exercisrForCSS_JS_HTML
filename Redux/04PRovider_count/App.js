import React,{Component} from 'react';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux'


class App extends React.Component{    

 
    render(){
        console.log(this.props);
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
    count:state.count
}
}

const mapDispatchToProps=function(dispatch,ownProps){
    return{
        add_one:function(){
            dispatch({type:'ADD_ONE'})
        },
        minus_one:function(){
            dispatch({type:'MINUS_ONE'})
        }
        
    }
    }
App =connect(mapStateToProps,mapDispatchToProps)(App)
export {App}