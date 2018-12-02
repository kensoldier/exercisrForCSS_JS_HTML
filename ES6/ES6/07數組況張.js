//...一樣可以展開
let k = [1, 2, 3, 4, 'adadas']
console.log(...k)

//取代 apply
let m = [1, 2, 3, 55, 8, 8, 80]
let max = Math.max.apply(null, m); //ES
console.log(max);

let m = [1, 2, 3, 55, 8, 8, 80] //es6
let max = Math.max(...m);
console.log(max);

//rest 
function sum(...arr) {
    return arr.reduce((pre, next) => pre + next)
}
let m = [1, 2, 3, 55, 8, 8, 80]
console.log(sum(...m))

//======================================複製ARR
//es5
let m = [1, 2, 3, 55, 8, 8, 80]
let arr2 = m.concat(); //or  let arr2=m.slice();
//es6
let arr3 = [...m] //直接展開放進去
let [...arr4] = m //用解構附值 跟rest都可以

//數組合併
let m = [1, 2, 3, 55, 8, 8, 80]
let m2 = [1, 4, 5, 055, ]
//es5
let k = m.concat(m2);
//es6
let k = [...m, ...m2, 50, 506, 80]
let arr = [...document.querySelectorAll('li')] //本來是nodelist集合  現在變成真正的是數組 
// 但尾數組 不能展開類數組
let obj = {
    '0': 'a',
    '1': 'b',
    'length': 2
};
//但可以用
let k = Array.from(obj);
//====================================find 、findIndex()
let m = [1, 2, 3, 55, 8, 8, 80]
let k = m.find((val, index) => {
    console.log(index)
    return val >= 10
})
console.log(k)
console.log(m.findIndex(val => val >= 10))
//==========================================fill() 填充方法
let k = new Array(10);
let k = []; //會跑不出宅
console.log(k.fill('a', 0, 8))

//===========================================entiries()   keys()  values()

let k = [2, 4, 5, 6, 8];
for (let key of k.keys()) {
    console.log(key); //打應key
}
let k = [2, 4, 5, 6, 8];
for (let n of k.entries()) {
    console.log(n)  //把應數組
}
//=============================== include()  返回true /false  如果數組有 NaN是拿不到索引  但可以用 include判斷
