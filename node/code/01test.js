console.log('hellow node js');
var a=9;
console.log(++a);
//到該項目下 node ./01test.js  受過node去編譯 這個文件
//首先有個操作系統  有很多接口  EX 記憶體、文件、網路、等等==>負責給程序來調用街口==>來實現文件操作 或是 網路請求
//而node 也是個程序  ==>可以幫我們運行js  繳給 node 然後會轉換成 一些2進制的實行碼  直接操作  操作系統
//之前js 是在瀏覽器上面執行  而現在 js 可以透過node 直接越過瀏覽器  操作  操作系統 走路後端

//不是在瀏覽器上用 node 要注意  因為他只支持  原生JS 的方法  DOM  BOM 很多方法是不支持的  因為是執行於操作系統上

//在  nodejs  是所有的js 文件  會把包成一個模塊  所以文件與文件之間的變量是不會相互影響的  除非像是 global得 EX console
//比如在這個文件下變量 a  能會作用在這個文件裡面 因為 Nodejs 把她打包成一個模塊

class person{
    constructor(name,bir){
        this.name=name;
        this.bir=bir;
    }
    talk(){
        return `${this.name}`;
    }
    aaa(){
        return `${this.bir}`;
    }

}