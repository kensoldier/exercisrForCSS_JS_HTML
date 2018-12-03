import React, { Component } from 'react';
import './App.css';
import Person from './person/Person'

class App extends Component {
  // state 只能在式在繼承Component 的class裡面使用   state也是Component的一個方法
  //如果希望透過一些事件修改 內容  那屬性就不能寫死
  state={
    persons:[
      {name:'change Name',weight:50},
      {name:'xxxx222',weight:40},
      {name:'pssss333',weight:30},  
       {name:'pssss333',weight:70},
    ],
    otherState:"anything",
    showPerson:false
  }
  switchNameHandler1=(newName)=>{  //是可以接收參數  但在觸發時的案件寫法要更改
    // console.log('Hello') 在ES6裡面 this 指的是當前的App class
    // this.state.persons[0].name='fuck you'//如果直接這樣寫Do not mutate state directly. Use setState() 所以要用 setState
    this.setState({
      persons:[   //如果只寫這樣不會影像到其他的狀態
        {name:'pppp',weight:5000000},
        {name:'xxxx',weight:400000},
        {name:'pssss',weight:30},//如果是沒有用到的可以不寫 但容易出問題
      ]
    })
  }
  switchNameHandle2=(newName)=>{  //是可以接收參數  但在觸發時的案件寫法要更改
    this.setState({
      persons:[   
        {name:newName,weight:5000000},
        {name:'xxxx',weight:400000},
        {name:'pssss',weight:30},
      ]
    })
  }

  nameChangeHandeler =(event)=>{
    this.setState({
      persons:[   
        {name:event.target.value,weight:5000000},
        {name:'xxxx',weight:400000},
        {name:'pssss',weight:30},
      ]
    })
  }
  togglePersonHandele=()=>{
    const doseShow=this.state.showPerson;
    this.setState({  showPerson:!doseShow})
  }
  
  /* 
  *state 用於改變組件內狀態的值，也就是說 如果要改props的值 要用state
  *props 主要是用來傳值
  */ 
  render() {//會把內容渲染到頁面裡
    // 可以在render定義一個樣式
    const style={  //可以叫任何名子
      backgroundColor:'red',
      border:'5px solid'
    }
    let persons =null;
    if(this.state.showPerson){//分支的寫法
      persons=(
          <div>
            {
              this.state.persons.map((person,index)=>{
                return<Person
                key={index} 
                name={person.name} 
                weight={person.weight}/>
              })
            }
        {/* <Person      應該是要拿到數據再生成
        changed={this.nameChangeHandeler}
        name={this.state.persons[0].name} 
        weight={this.state.persons[0].weight}/> 
        <Person
        name={this.state.persons[1].name} 
        weight={this.state.persons[1].weight}/>  */}
        {/* 要傳遞事件 比如希望把點擊事件傳給 p標籤 讓點擊p時改變狀態 */}
        {/* <Person
        myClick={this.switchNameHandle2.bind(this,'llllkkkkkeeee')}             
        name={this.state.persons[2].name} 
        weight={this.state.persons[2].weight}/> 
           但會發現改變的不是我們當前的元素，因為他觸發switchNameHandle2 都是會改到index[0] */}
       </div>
              )
    }

    return (
      <div className="App">
        <h1>hello world</h1>
        <button style={style} onClick={this.switchNameHandler1}>更改狀態值</button> {/* 如果給他家switchNameHandler()會自動運行 */}<br></br>
        {/* <button onClick={()=>this.switchNameHandle2('小王')}>更改狀態值</button> 如果要傳值  要用箭頭函數的方式  */}
        <button onClick={this.switchNameHandle2.bind(this,'小王')}>參數更改狀態值</button>{/* 還可以用bind,這裡的this指的是函數裡的 this.setState*/}
        {/* 屬性參數 會記入在props裡面  */}
        <Person name="ken" weight="30"/>  
        <Person name="eva" weight="20"/>  
        <Person name="paa" weight="5">xxxxxxxxxxxxxxxx</Person> 
        {/* 如果要夥獲取標籤的內容  要使用 children */}
     

         <button style={style} onClick={this.togglePersonHandele}>顯示內容</button>
        {persons}
       {/* { this.state.showPerson?
        <div>
        <Person
        changed={this.nameChangeHandeler}
        name={this.state.persons[0].name} 
        weight={this.state.persons[0].weight}/> 
        <Person
        name={this.state.persons[1].name} 
        weight={this.state.persons[1].weight}/>  */}
        {/* 要傳遞事件 比如希望把點擊事件傳給 p標籤 讓點擊p時改變狀態 */}
        {/* <Person
        myClick={this.switchNameHandle2.bind(this,'llllkkkkkeeee')}             
        name={this.state.persons[2].name} 
        weight={this.state.persons[2].weight}/>  */}
            {/*但會發現改變的不是我們當前的元素，因為他觸發switchNameHandle2 都是會改到index[0]*/}
      {/* </div>:null */}
       }

      </div>

      // <h1>eee</h1>  會報錯 因為在 JSX中 只能有一個根容易  所以如果有同級的會出錯
      );

      //如果不使用JSX 也可以寫但很麻煩 如下
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'))
  }
}

export default App;
