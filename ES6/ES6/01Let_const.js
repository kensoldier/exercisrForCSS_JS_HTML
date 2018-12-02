
//let   塊及作用域、也沒有提升、而且有暫時性死區、不能重複聲明、不會添加全局
{
    let b=100
}
console.log(b);//b is not defind

{
    console.log(b);  //ReferenceError: b is not defined
    let b=100      //聲明之前是暫時性死區
    console.log(b);
}

for(var i=0 ;i<10;i++){  //全部都是10 ==>以前都用函數  傳入作用域
    setTimeout(() => {
        console.log(i);
    }, 4);
}
for(let i=0 ;i<10;i++){  //全部都是 1 2 3 ......有作用域
    setTimeout(() => {
        console.log(i);
    }, 4);
}

var a=10;  //window.a=a
let b=10   //window.b 沒有

//  const 立即聲明 立即附值、聲明後不能修改、有暫時性死區、不是全局
{
    console.log(g)  //error 有暫時性死區  
    const g=1;
}

const qq={};  //要求指向的地址不能修改  可以給該地址添加  qq.age=28  其實不能修改的是地址 

//最小全縣原則  const>let>var