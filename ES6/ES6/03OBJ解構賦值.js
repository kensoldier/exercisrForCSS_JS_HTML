
let {a , b} = { a:123 , b:456 };

let {b , a} = { a:123 , b:456 }; // 不影響  因為是根據數組名子

let {a,b,c}={ a:123 ,b:456 }; //c一樣會是undefind

//用不同名子 聲明
let {a : ax , b : bx}={a : 123 , b : 46}//這時用 a,b 是找不到東西的 被ax bx 取代

let {a : { x : ax , y : ay } }={a:{x:10,y:20} , user:{name:'eee'} } // ax:10  ay:20

//默認值
let {a=0,b=0} = {a:10}  //a:10  b:0 
let {a=0 , b=0}={a:null , b:10}; //這時a:null 

//可以解構現存對象的方法
let { max , min }= Math;  //可以直接是對應 MATH 裡面的函數名稱
console.log(max(1,2,3,4,5,6))

//============================================字串解構賦值
let [a,b,c]='123465'  //a=1 b=2 c=3

//============================================數字 / bool 解構

//============================================函數參數
function add([a=30,b=10]){   //當然可以給默認值
    return a+b
}
console.log(add([1,2]))
console.log(add([1]))  //11

function add( { a=30,b=10 } ){   //OBJ當然可以給默認值
    return a+b
}
console.log(add( {a:2} ))

console.log(add( ))//會報錯  因為傳過去的釋空對象
function add( { a=30 , b=10 }={} ){ //讓傳過來得值默認等於空對象  這時 a, b 就會在 return 找默認值
    return a+b
}

let { a=30 , b=10 }  //會出錯 因為沒有對應的附值
console.log(a)