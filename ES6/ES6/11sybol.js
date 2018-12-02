// obj array string number null undefind  function  ==>++  Symbol  表是一個獨一無二的數據

let s1 = Symbol(); //不能用new
let s2 = Symbol();
console.log(s1 === s2)

//可以給一個備註

let s3 = Symbol('ssssss') //打印時可以 看到說明    Symbol 可以轉換成自串

//Symbol 可以做為屬性 讓該屬性不會被覆蓋

let t = {
    name: 'sdas',
    age: 19,
    [Symbol('tt')]: 8080,
    [Symbol('fun')]() {
        console.log('sss');
    }
};
//拿到非Symbol 屬性
for (let k of Object.keys(t)) {
    console.log(k)
}
// for in 、 for of、  Object.keyS() 、Object.getOwnPropertyNames() 都是拿不到 Symbol 屬性
for (let k of Object.getOwnPropertySymbols(t)) {
    console.log(t[k])
}


let s1 = Symbol.for('dddd');
let s2 = Symbol.for('dddd');  //這是才會讓2格Symbol 一樣 都是取同一個值

Symbol.keyFor(s1)  //可以拿到  dddd
 

//偽數組
let s={
    0:1,
    1:{},
    2:'d',
    length:3,
    [Symbol.iterator1]:Array.prototype[Symbol.iterator] // 讓偽數組的[Symbol.iterator1]指向  Array的
}
//用 Array.from 也可以
