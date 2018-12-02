//asnyc 類似於*的用法  await 類是餘 yield的用法;
//函數最開始設置 async標誌 表示當前函數為異部加載 。而函數返回值會是一個 promise 時歷
//async 函數執行完後 由於返回是 promise 可以再用then catch

async function add() { //如果返回為 undefind 也會被包裝成 promise對象
    return 1;
}
add().then(data => {
    console.log(data);
});

// await 可以出現在 async涵式中
//後面可以跟一個promise實例  然後async遇到awite會暫停 但他會等 promise 結果然後再返回

async function readFile() {
    console.log('==========async start')
    let data = await new Promise((resolve, reject) => {
        console.log('=========await start')
        setTimeout(() => {
            resolve(333333)
        }, 2000);
    }).catch(e => {})
    console.log(data)
    await 1;
    await 2;
    return data; //等待完promise 之後會return data 
}
readFile().then(data => console.log('end' + data));
console.log('end') //await 執行完他就回執行了 等到結果他會再傳回來
//異長處理 很多地方都可以加  放在promise  或是 then 後面都可以  都是返回 promise 實例

//多種形式

//函數聲明
async function add() {
    await 1;
}
//函數表達式
let f = async function add() {
    await 1;
}
//對象
let f = {
    async gatname() {
        await 1;
    }
}
//class
class User {
    async gatname() {
        await 1;
    }
}
//箭頭
let f = async () => {};

//用 async 讀取兩個文件內容  寫入第3方文件
const fs = require('fs');
const path = require('path');
const f1=path.join(__dirname,'./01Let_const.js');
const f2=path.join(__dirname,'./02ARRAY解構復職.js');
const f3=path.join(__dirname,'./c.js');

function readFilePromise(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,'utf8',(error,data)=>{
            if(error){
                reject(e);
            }else{
                resolve(data)
            }
        })
    })
}
async function joinFile(f1,f2,f3){
// let data1=await readFilePromise(f1);//但這樣也有點不好 因為 await會等完 data1 才會等 data2
// let data2=await readFilePromise(f2);
let p1=readFilePromise(f1);
let p2= readFilePromise(f2); //改成這樣都式異不部去讀文件
let data1=p1;
let data2=p2;
fs.writeFile(f3,data1+data2,'utf8',error=>{
    console.log('success');
})
}
joinFile(f1,f2,f3).then(data=>{
    console.log('end')
})