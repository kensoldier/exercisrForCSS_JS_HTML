import React, { Component } from 'react';
import './App.css';
import Person from './person/Person'
import person from './person/Person';
class App extends Component {
  // state 只能在式在繼承Component 的class裡面使用   state也是Component的一個方法
  //如果希望透過一些事件修改 內容  那屬性就不能寫死
  state={
    persons:[
      {name:'pppp',weight:50},
      {name:'xxxx',weight:40},
      {name:'pssss',weight:30},
    ],
    otherState:"anything"
  }
  switchNameHandler=()=>{
    // console.log('Hello') 在ES6裡面 this 指的是當前的App class
    // this.state.persons[0].name='fuck you'//如果直接這樣寫Do not mutate state directly. Use setState() 所以要用 setState
    this.setState({
      persons:[   //如果只寫這樣不會影像到其他的狀態
        {name:'fuck',weight:5000000},
        {name:'xxxx',weight:400000},
        {name:'pssss',weight:30},//如果是沒有用到的可以不寫 但容易出問題
      ]
    })
  }
  /* 
  *state 用於改變組件內狀態的值，也就是說 如果要改props的值 要用state
  *props 主要是用來傳值
  */ 
  render() {//會把內容渲染到頁面裡
    return (
      <div className="App">
        <h1>hello world</h1>
        <button onClick={this.switchNameHandler}>更改狀態值</button> {/* 如果給他家switchNameHandler()會自動運行 */}
        {/* 屬性參數 會記入在props裡面  */}
        <Person name="ken" weight="30"/>  
        <Person name="eva" weight="20"/>  
        <Person name="kevin" weight="100"/>  
        <Person name="paa" weight="5">xxxxxxxxxxxxxxxx</Person> 
        {/* 如果要夥獲取標籤的內容  要使用 children */}
        <Person
        name={this.state.persons[0].name} 
        weight={this.state.persons[0].weight}/> 
        <Person
        name={this.state.persons[1].name} 
        weight={this.state.persons[1].weight}/> 
      </div>

      // <h1>eee</h1>  會報錯 因為在 JSX中 只能有一個根容易  所以如果有同級的會出錯
      );

      //如果不使用JSX 也可以寫但很麻煩 如下
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'))
  }
}

export default App;
