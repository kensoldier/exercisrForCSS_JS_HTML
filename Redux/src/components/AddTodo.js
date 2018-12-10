import React ,{Component} from 'react';
import {connect} from 'react-redux'
import {add_todo} from '../action/index'
class AddTodo extends Component{
    dataSubmit(e){
           e.preventDefault()
           let title =this.refs.title.value;
           let content =this.refs.content.value;
           let id =this.props.arr.length
           let data=new Date().toLocaleTimeString() ;
            //   console.log(title,content,id);
            this.props.addTodo(title,content,id,data)
            id++
            this.refs.title.value="";
            this.refs.content.value="";
    }
    render(){
        const {addTodo}=this.props;
        return (
            <div>
                <form onSubmit={this.dataSubmit.bind(this)}>
                    <span>title:</span>
                    <input type="text" ref="title"/>
                    <span>content:</span>
                    <input type="text" ref="content"/>
                    <input type="submit" value="sent"/>
                </form>
            </div>
        )
    }
}

var mapStateToprops=function(state){
    // console.log(state)
    return {
        arr:state.TodoReducer
    }
}
var mapDispatchToprops=function(dispatch){
        return {
            addTodo:function(title,content,id,data){
                dispatch(add_todo(title,content,id,data))
            }
        }
    }

AddTodo=connect(mapStateToprops,mapDispatchToprops)(AddTodo);

export default AddTodo;