// Generator 函數可以有多種理解 可以先理解成 函數的狀態機 封裝了內部多個狀態
//執行 Generator 會返回一個遍歷對象  也就是說 Generator 除了是狀態機  之外也是一個遍歷器
function* hellloWorldGenerator() {
    console.log('hello')
    yield 'hello'; //yield 產出  只能出現在 Generator 函數內部
    console.log('world')
    yield 'world';
    return 'ending';
} //函數裡面  有3個狀態
let k = hellloWorldGenerator(); //執行函數會返回一個遍歷器對象

console.log(k.next()) //next()執行下一個狀態  要執行next才會執行Generator內部的代碼  
console.log(k.next())
console.log(k.next())
//============================================for of
function* G1() {
    yield 1;
    yield 2;
    yield 3;
}

for (let key of G1()) { //可以用 for  of 遍歷  也因為 G1 會返回一個可遍歷對象 所以可以直接用for of
    console.log(key)
}

function* G1() {
    yield 1;
    yield 2;
    yield 3;
    return 4  //for of 遇到 return時 會立即結束 
}

for (let key of G1()) { // 再執行 next 時 返回的是 {value:4, done:true}  done:true 只要看到  就會立即結束
    console.log(key)
}

//next 可以接受參數
function* G1() {
    let a1 = yield 1;
    let a2 = yield 2;
    let a3 = yield 3;
    console.log(a1);
    console.log(a2);
    console.log(a3);
}
let k = G1();
console.log(k.next());; //{ value: '1', done: false } 停在 yield1
console.log(k.next(3333));//3333傳入 a1附值  ==>停在 yield  2
console.log(k.next(4444));//4444 附值  a2  ==>yield3
console.log(k.next(555));//555 附值 a2 

// Generator.protptype.throw()
function* G1() {
    try{
        let a1 = yield 1;
        let a2 = yield 2;
        let a3 = yield 3;
    }catch(e){
        console.log(e);
    }
   
}
let k = G1();
console.log(k.next());
console.log(k.next())
k.throw(new Error('xxxxxxxxx')); // 可以把它丟進  Generator 內部 然後給catch抓不 也就是說可以控制內部狀態

//// Generator.protptype.return 會立即結束 Generator函數

function* G2(){
    yield 1;
    yield 2;
    yield 3;
}
let k =G2();
console.log(k.next());
console.log(k.return('9999')); //會把上結束 { value: '9999', done: true }

// yield 後面也可以跟著一個 Generator函數
function* G2(){
    yield 1;
    yield 'sss';
    yield 'ddd';
}
function* G3(){
    yield 1;
    yield *G2();  //要有* 才會是執行了遍歷器對象裡的遍歷  不然使會返回{}，  不然也要寫成 for of return yield
    yield 3;
}

for(let k of G3()){
    console.log(k);
}

function* G3(){
    yield 1;
    yield *[1,2,3,4,5,6,7,89,4156,456,45]  //沒* 返回會是數組  只要是可遍歷對象都可以這樣用
    yield 3;
}

for(let k of G3()){
    console.log(k);
}