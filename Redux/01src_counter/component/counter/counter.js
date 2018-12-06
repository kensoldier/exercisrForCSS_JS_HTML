import React,{Component} from 'react';


class Counter extends React.Component{    

       
    sssss(value,onAdd){
        if(value%2==1){
            onAdd();
        }
    }

        render(){
            let {value,onAdd,onMinus}=this.props;
            return (<div>
                         <input type="button" value="--" onClick={onMinus} />
                         <span>{value}</span>
                         <input type="button" value="++" onClick={onAdd} />
                         <input type="button" value="%2=1" onClick={this.sssss.bind(this,value,onAdd)} />
                    </div>)
        }
    }
    
    export default Counter;