
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

//最小全縣原則  const>let>varlet a = 1,
    b = 2,
    c = 3;

let [a, b, c] = [1, 2, 3] //解構復職

//被越過去了 因為沒對應到
let [a, , c] = [1, , 3]

let [a, [b, ...c], d] = [1, [2, 3, 4, 5], 6] //...代表展開   
console.log(c)

//解構不成功 會等於 undefind
let [a, b] = [1] //b 為 undefind


//不完全解構  3 4 沒有對應到
let [a, [b], c] = [1, [2, 3, 4], 5]
console.log(b)

//error
let [a, b] = null;
let [a, b] = undefined;
let [a, b] = {};
let [a, b] = 123;
let [a, b] = 'asd'; // 可以  只要可以變立都可以

//可以有默認值
let [a = 9, b = 8, c = 7] = [1, 2] //c這時沒有對應  會等於2  或是undefind會取默認值

//取默認值等於另一個變量 但該變量要以聲明過
let [a = 9, b = a] = [1]  // a a 如果 let [a = b, b = 2] = [1]  error
 