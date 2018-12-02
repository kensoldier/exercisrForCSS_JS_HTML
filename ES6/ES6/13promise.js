//promise 是一個容器 裡面保存了一個未來才結束的事件的結果  promise 也是一個 OBJ  可以設定成功之後做什麼 或失敗之後做什麼
/*
promise可以分成3個狀態
pending(進行中)
fulfilled(已執行)
rejected(失敗)
只有異部操作的結果可以決定 當前是哪一個狀態 任何其他操作都無法改變個狀態  這也是promise 的由來
*/

//創建

let p = new Promise((resolve, reject) => { //可以接受兩個參數  創建完 promise 立即調用回調調函數
    //寫一些邏輯代碼
    try {
        console.log('start promise');
        throw new Error('xxxxxxxxxxxxx');
        setTimeout(() => {
            resolve(123); //如果事件處理完成  任務成功會執行這個  裡面會存有123的數據  pending狀態  到結束狀態=>再到then
        }, 1000)
    } catch (e) {
        reject(e);
    }
});
p.then(data => { //then() 會等待狀態改變  他才會執行
    console.log(data);
}).catch(error => console.log(error)); //他會等待失敗的訊息  執行順序是  開始 =>ERROR  =>catch =>結束 => catch  因為同步執行的對列執行結束才會換他catch
console.log('promise End')

//  resolvec和 reject 會帶有參數 回掉給 給then  拒絕會直接進行 catch

const fs = require('fs'); ///用到加載檔案模塊
const path = require('path');

let p2 = new Promise((resolve, reject) => {
    console.log('=============start')
    //假設要讀取文件2的內容
    let fileData = fs.readFileSync(path.join(__dirname, './02ARRAY解構復職.js'), 'utf-8');
    resolve(fileData);
});
p2.then(data=>{
    console.log(data);
    return {data,time:Date.now()}  //如果有返回值  他返回的也是promise 對象 且 已經resolve 所以可以繼續 then
}).then(data=>{
    console.log(data)//這個 data跟上面的不一樣  是return 來的 所以會加上 time 的數據
})
console.log('=============end')  // 順序 Start =>  end  ==>data

//promise 的參數 除了可以接收 正常值之外  還可已接收另一個promise 那麼 resolve 會等到返回結果才會執行

let p1=new Promise((resolve,reject)=>{
    console.log('==================p1 start')
    setTimeout(() => {
        resolve(123456789);
    }, 3000);
})
p1.then(data=>{
    console.log('p1'+data)
})
console.log('==================p1 END')

let p2 =new Promise((resolve,reject)=>{
    console.log('==================p2 start')
    resolve(p1);    //會等到p1結束 才會執行
})
p2.then(data=>{
    console.log('p2 data'+data)
})
console.log('==================p2 END')

// ==================p1 start
// ==================p1 END
// ==================p2 start
// ==================p2 END
// p1123456789
// p2 data123456789

//返回值  也是promise

let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(123456789);
    }, 2000);
})
p.then(data=>{
    console.log(data);
    return 10;
}).then(data=>{
    console.log(data);
    return new Promise((resolve ,reject)=>{
        setTimeout(() => {
            resolve(3)
        }, 1000)
    }).then(data=>{   //直接用then
        console.log(data);
    }).catch(er=>{
        // ...........
    })//.finally(()=>{
        //  es2018 才有  不論如何最後都會執行
   // })
})

//=======================promise.all   裡面可以放多個 promsie  他會等所有promise結束才會執行 then 如果有一個 reject 就會錯
Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(),Promise.reject(new Error('xxxxxxxx'))])
.then(data=>{ console.log(data)})
.catch(error=>{console.log(error)})//其中一個錯 就會error

//promise.race  比賽的概念  裡面可以放多個 promise 期先執行完聽誰的
Promise.race([new Promise(rosolve=>{
    setTimeout(() => {
        resolve(1)
    }, 3000);
}),Promise.resolve(2),Promise.reject(3)]).then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
});

//promise.resolve 參數如果是一個 thenable ,具有then方法的對象,然後就立即執行thenable 對象的then 方法

Promise.resolve({
    then(resolve,reject){  //具有then 方法的對象
        resolve(32);
    }
}).then(data=>console.log(data));//就會立即執行 then 方法