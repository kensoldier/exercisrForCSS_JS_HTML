//ES5
function Person(name = 'ken', age = 25) {
    this.age = age;
    this.name = name;
}
Person.prototype.show = function () {
    console.log('ddd');
}

let p = new Person('ddd');
p.show();
//=======================es6
class Person { // 其實 class typeof 就是function  跟原來是一樣  也可以發現 method 在 prototype 裡面
    show() {

    }
    get() {
        return this._pName; //es6還是不支持私有  所以用_代表內部使用的
    }
    set(val) {
        this._pName = val;
    }
}

//==================es6 class 構造函數

class person {
    constructor(name = 'ken', age = 25) {
        this.name = name;
        this.age = age;
    }
    show() {
        return console.log(name);
    }
}
//夠在函數中也可以返回  對象  returm {neme ,age ...} 但不推薦

//this 的指向 class裡面如果有this  他任指向 class實體
//g使用解構附值時  要小心  this 不是指向當前對象

class Person {
    constructor() {
        this.show = this.show.bind(this); //把 show 的this 綁定 到我們 構造函數里的this  而且是延遲執行 
    }
    show() {
        console.log(this)
    }
}
let p = new Person();
p.show();

let {
    show
} = p //這時show 會是 的this 會指向全局  所以undefind;  那就要在constructor 裡面綁定方法
show(); //相當於函數調用模式  在瀏覽器端  非嚴格模式下  this = window
// 1 綁定在 constrructor  2.使用箭頭函數 函數內部指向箭頭函數指向的作用域

//========================================================靜態方法
class Person {
    static Add(a, b) {
        return a + b
    }
}
Person.Add(a, b) //可以直接使用

// =====================================================class 繼承  extend
//(1) 把父類 constructor 裡面的 code 執行
//(2) 把父類夠在函數原型上的方法進行拷貝
class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    shot() {
        console.log(name + 'shouting')
    }
}

class lion extends animal {
    constructor(name, age, hair) {
        super(name, age); //繼承 必須要在子類的contructor 裡面使用 super()調用父類構造函數   ，而且要在this之前 因為夠在父類再添加
        this.hair = hair;
    }
}
let a=new lion('ken',25,'balck');
console.log(a);

//繼承原生的方法  如果  父類  在prototype 裡面 註冊方法  繼承也是可以繼承到的