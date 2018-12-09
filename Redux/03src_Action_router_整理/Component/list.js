import React,{Component} from 'react';


class List extends React.Component{    

        ChildAdd(){
            this.props.add(this.refs.inputTitle.value)
        }
        remove(i){
            this.props.remove(i)
        }

        render(){
           let value=this.props.value.List;
           console.log(value)
           let aLi =[];
           value.forEach((v,i)=>{
           aLi.push( <li key={i}> 
                    {v} 
                    <input type="button" value="XX" onClick={this.remove.bind(this,i)}/>
                    </li>)
           })
            return (<div>
                      <ul>
                        <input type="text" ref="inputTitle"/>
                        <input type="button" value="click" onClick={this.ChildAdd.bind(this)}/>
                        {aLi}
                      </ul>
                    </div>)
        }
    }
    
    export default List;