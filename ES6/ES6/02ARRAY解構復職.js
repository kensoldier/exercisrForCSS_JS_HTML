let a = 1,
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
 