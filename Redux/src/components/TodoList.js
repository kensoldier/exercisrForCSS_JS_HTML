import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {delete_todo,update_todo} from '../action/index'

class TodoLost extends Component{

    render(){
        const {list,delete_todo,update_todo}=this.props
        let arrLi=[];
        list.forEach((value,index)=>{
            arrLi.push(  <tr key={value.id}>
                            <td>{value.upDate==false?value.title:<input type="text" defaultValue={value.title}/>}</td>
                            <td>{value.upDate==false?value.content:<input type="text" defaultValue={value.content}/>}</td>
                            <td>{value.date}</td>
                            <td>
                                <input type="button" value="X" onClick={()=>{delete_todo(value.id)}}/>
                                <input type="button" value={value.upDate==false?'Update':'chenk'} onClick={()=>{update_todo(value.id)}} />
                            </td> 
                         </tr>)
        })
        return(
            <div>
                <table >
                    <thead>
                        <tr>
                        <th>title</th>
                        <th>content</th>
                        <th>time</th>
                        <th>delete/update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrLi}
                    </tbody>
                </table>
            </div>
        )
    }
}
var mapStateToprops=function(state){
    return{
        list:state.TodoReducer
    }
}
var mapDispatchToprops=function(dispatch,ownProps){
    return{
        delete_todo:function(id){
            dispatch(delete_todo(id))
        },
        update_todo:function(id){
            dispatch(update_todo(id))
        }
    }
}
TodoLost=connect(mapStateToprops,mapDispatchToprops)(TodoLost);

export default TodoLost;