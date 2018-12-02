// 也一個主建  可以到頁面當中展示
import React from 'react';
const person=(props)=>{  //屬性會藉由 props傳進過來
    return (
        <div>
        <p>Hi i am {props.name} my weight is {props.weight}</p>        {/* //要顯示的化用{}表示 */}
        <p>{props.children}</p> {/* 就可以拿到標籤裡面的內容 */}
        </div>
    )
}

export default person;

//使用流程  在執行 Index.html => index.js => App.js =>引入(import) 後執行 render(渲染)  然後遇到 <person/>=>找person.js文件
//執行 preson的函數 然而返回的式 jSX的語法標籤=>然後渲染回APP