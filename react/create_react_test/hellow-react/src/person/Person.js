// 也一個主建  可以到頁面當中展示
import React from 'react';
import './Person.css'
const person=(props)=>{  //屬性會藉由 props傳進過來
    return (
        <div className="person">
        
        <p onClick={props.myClick}>Hi i am {props.name} my weight is {props.weight}</p>        {/* //要顯示的化用{}表示 */}
        <p>{props.children}</p> {/* 就可以拿到標籤裡面的內容 */}

        <input type="text" onChange={props.changed} defaultValue={props.name}></input>  {/* 寫一個 props.changed 讓app去做雙向觸發 */}
         {/* 如果用value會報錯 ,因為他會說你已經用了onChange事件 如果要有對應的value 要用defaultVal要用*/}
        </div>
    )
}

export default person;

//使用流程  在執行 Index.html => index.js => App.js =>引入(import) 後執行 render(渲染)  然後遇到 <person/>=>找person.js文件
//執行 preson的函數 然而返回的式 jSX的語法標籤=>然後渲染回APP