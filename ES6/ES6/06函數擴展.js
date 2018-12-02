//默認值

function add(a, b = 1) { //undefind  會取
    return a + b;
}
console.log(add(1, null)) //如果是null也不會取默認  ==> 1   適用到的時候才會求出具體值(惰性求職)

//解構復職

function add(a, b = 1, c) {}
add(4, 5, 2);
console.log(add(4, 5, 2));

//=========================================================rest
function add(...nums) {
    return nums.reduce((pre, cur, index) => { //reduce 可以與返回的值再帶去計算
        console.log('pre :', pre);
        console.log('cur :', cur);
        console.log('index :', index);
        return pre + cur;
    });
}

add(4, 5, 2); //11
console.log('add(4, 5, 2) :', add(4, 5, 2));
//=====================================================嚴格模式
//es5中涵室內不可以設定為嚴格模式， ES6中做出了一些修改  只要函數參數使用默認值 、解構附值、擴展運算符 都不能在聲明

// 函數有name屬性會返回   
function add(a, b) {
    return a + b;
}
console.log(add.name)
//====================================================箭頭函數
//其實就是內名函數的升級版
const fun = function (a, b) {
    return a + b
};
//等於
const fun = (a, b) => a + bl;
const d = a => void console.log(a); //沒有返回值的時候可以用 void

const f2 = () => {} // 沒有參數時用 ()

let arr = [3, 9, 2, 1, 22];
arr.sort((a, b) => a - b);
console.log(arr);
// 箭头函数有几个使用注意点。
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

//=================================================我調用
function b() {};

function add() {

    return b(); //在最後面調用函數   但如果 return b()*3 做了運算就不是尾調用
}
//sum
function sum(num) {
    if (num >= 1) {
        return sum(num - 1) + num; //有作加法 不是尾遞規
    } else {
        return 1;
    }
}
console.log(sum(10));

//要變成尾遞規 可以優化函式  遞歸要在嚴格模式
function sun(num, total = 0) {
    if (sum > 0) {
        return sum(num - 1, num + total) //變成函數
    } else {
        return total;
    }
}