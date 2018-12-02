// 1. 原生用nodedjs 實現讀取文件

// 要求：讀取兩個文件的内容，並把兩個文件内容寫入到另外一個文件中。
const fs = require('fs');
const {join}=require('path');
const fileName1=join(__dirname,'./01Let_const.js');
const fileName2=join(__dirname,'./02ARRAY解構復職.js');
const writeFileName=join(__dirname,'./a.js');

fs.readFile(fileName1,'utf8',function(error,data){
    if(error){
        throw error;
    }
    fs.readFile(fileName2,'utf8',function(error2,data2){
        if(error2){
            throw error;
        }
    let dataFileAtring=data+data2;
    fs.writeFile(writeFileName,dataFileAtring,'utf8',function(error){
        console.log('寫入成功')
    })
    })
})

//promise寫法
const fs = require('fs');
const {join}=require('path');
const fileName1=join(__dirname,'./01Let_const.js');
const fileName2=join(__dirname,'./02ARRAY解構復職.js');
const writeFileName=join(__dirname,'./a.js');

function readFilePromise(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,'utf8',(error,data)=>{
            error? reject(error):resolve(data)
        })
    })
}
let data;
readFilePromise(fileName1)
.then(data1=>{
    data=data1
    return readFilePromise(fileName2);
})
.then(data2=>{
    data+=data2;
    return data;
})
.then(data=>{
    fs.writeFile(writeFileName,data,'utf8',error=>{
        console.log(error);
    })
})
.catch(e=>{
    console.log('error xxxxxxxxxxx')
})
//Generator 原生實現
const fs = require('fs');
const {join}=require('path');
const fileName1=join(__dirname,'./01Let_const.js');
const fileName2=join(__dirname,'./02ARRAY解構復職.js');
const writeFileName=join(__dirname,'./a.js');

let g;  //用g控制 next
function* joinFile(){
    let fileData1=yield fs.readFile(fileName1,'utf8',(error,data)=>{
        g && g.next(data) //透過g 讓data 父值給 fileData1  //g事先判斷是否存在  
    });
    let fileData2=yield fs.readFile(fileName2,'utf8',(error,data)=>{
        g && g.next(data)
    })
    fs.writeFile(writeFileName,fileData1+fileData2,'utf8',error=>{
        console.log('succerss')
    })
}
g=joinFile();
g.next();//只要呼叫一次NEXT 函數裡面自動會呼叫完成

//Thunk 函數  把回掉函數提到 generator外面
const fs = require('fs');
const {join}=require('path');
const fileName1=join(__dirname,'./01Let_const.js');
const fileName2=join(__dirname,'./02ARRAY解構復職.js');
const writeFileName=join(__dirname,'./a.js');

function readFileTrunk(filename){
    return function(cb){
        fs.readFile(filename,'utf8',cb);
    }
}
function* joinFileThunK(){
 let  data1= yield readFileTrunk(fileName1);//{value:f,dine:false}
 let  data2= yield readFileTrunk(fileName2);
 fs.writeFile(writeFileName,data1+data2,'utf8',error=>{
     console.log('success')
 })
}
let gen=joinFileThunK();
gen.next().value((error,data)=>{  //因為value 是一個函數 他會透過readFileTrunk 回掉cb的function 直接讓他執行callback函數
    gen.next(data).value((error,data)=>{//進到下一層 一樣yield會回掉 cb}
        gen.next(data);//最後附值
    })
})

// 上面改造 自執行
const fs = require('fs');
const {join}=require('path');
const fileName1=join(__dirname,'./01Let_const.js');
const fileName2=join(__dirname,'./02ARRAY解構復職.js');
const writeFileName=join(__dirname,'./a.js');

function readFileTrunk(filename){
    return function(cb){
        fs.readFile(filename,'utf8',cb);
    }
}
function* joinFileThunK(){
 let  data1= yield readFileTrunk(fileName1);//{value:f,dine:false}
 let  data2= yield readFileTrunk(fileName2);
 fs.writeFile(writeFileName,data1+data2,'utf8',error=>{
     console.log('success')
 })
}
function run(gen){   //是一個自執行的遞歸調用
 let g=gen();//會得到一個遍歷器  
 function nextStep(data){
    let temp =g.next(data);
    if(!temp.done){
        temp.value(function(error,data){
            nextStep(data);  
        })
    }
 }
 nextStep();//一開始執行不帶參數 進去nextStep的時候他會執行next()  再進入判斷是 並拿到 callback 並把data 附值給 data1
}
run(joinFileThunK);

// co庫