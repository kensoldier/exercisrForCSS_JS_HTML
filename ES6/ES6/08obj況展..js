let name = 'aicoder.com';
let phone = '18911865673';

let person = {
    age: 19,
    name,
    phone
}

console.log('person :', person);

// 2. 方法简写
let person = {
    age: 19,
    show: function () {
        console.log(this.age);
    }
}
person.show();

let person = {
    age: 19,
    show(a, b) {
        console.log(this.age);
        console.log('a :', a);
        console.log('b :', b);
    }
}
person.show(3, 5);

// 3. 属性名表达式
let a = 'aicoder.com';
let b = 'aicoder';
let person = {
    [a + 1]: '123',
    [b]: 'bbb',
    show() {
        console.log(this[a + 1]);
        console.log('this[b] :', this[b]);
        console.log('this.aicoder :', this.aicoder);
    }
}
person.show();
console.log('person :', person);

// 4. 表达式还可以用于定义方法名
let a = 'add'
let person = {
    [a + 1]: function () {
        console.log('22222 aicoder.com')
    }
}

person[a + 1]();
console.log('person :', person);
// 6. 有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous。

let f = function () {};
let k = f.bind({});

console.log('k.name :', k.name);

let f = new Function('console.log("你好")');
f();
// ===================================================Object.is(0 , -0)
console.log('f.name :', f.name);
console.log('0===-0 :', 0 === (-0));
console.log('NaN === NaN :', NaN === NaN);

console.log(Object.is(NaN, NaN));
console.log('Object.is(0, -0) :', Object.is(0, -0));

// 注意：undefined和null无法转成对象，所以如果它们作为第一个参数，就会报错。作为第二个或者后面的参数会省略。

// Object.assign 拷贝数字和布尔类型没有效果。字符串会转成 字符数组。
let n = Object.assign({}, 33, true, {
    a: 2
});
console.log('n :', n);

let n = Object.assign({}, 'aicoder.com');
console.log('n :', n);

// 数组的assign   
let n = Object.assign({}, ['a', 2, 3, 'aaa']);
console.log('n :', n);

// 同名属性的替换
let m = {};
let k = Object.assign(m, {
    age: 18,
    name: ''
}, {
    age: 20
});
console.log('k :', k);
// 9. 属性的定义与描述

// 属性定义  Object.defineProperties(obj, props)  ES5新增的
// obj： 在其上定义或修改属性的对象。
// props
// 要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符（更多详情，请参阅Object.defineProperty()）。描述符具有以下键：
// configurable： 可配置  。默认为 false
// enumerable： 是否可遍歷。默认为 false
// value：属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）。默认为 undefined.  不能与get和set共用
// writable：当且仅当与该属性相关联的值可以用assignment operator改变时。 默认为 false  不能与get和set共用
// get：
// 作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。
// 默认为 undefined
// set：
// 作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。
// 默认为 undefined

let person = {};
person.age = 20;

Object.defineProperties(person, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'ken',
        writable: true
    },
    phone: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: 5555555555555
    },
    address: {
        get: function () {
            return this._addredd;
        },
        set: function (value) {
            this._addredd = value
        },
        enumerable: false
    }
})
for (let k in person) { //用for  in  要小心 他是連原型的枚舉屬性都可以拿到的
    console.log(k); //phone  設定為不可遍歷   但可以找到phone屬性
}
person.address = 'zsdsa'
console.log(person.address);

console.log(Object.getOwnPropertyDescriptors(person)); //注意getOwnPropertyDescriptors  要加+s 才會是全部
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//屬性的枚舉性   
let p = {
    age: 19,
    neme: 'ken'
};
Object.prototype.prop = 'eeeeeeeeeeeee';
for (let k of Object.keys(p)) { //用 Object.keys(p)的方法不會拿到 繼承對象的屬性  以後盡量用這個
    console.log(k)
}
//像是  Json.stringify()  也只是能序列化自身屬性 
//  Object.assign()   會忽略 :enumerable:false   and   繼承對象的屬性

//getOwnPropertyNames(obj)  返回自身所有屬性  但不包含 symbol  但包含不可枚舉的
let m = {
    age: 19
};
Object.defineProperties(m,{
    demo:{
    enumerable:false,
    value:'zzz'
    }
})

console.log(m);
console.log(Object.keys(m));
console.log(Object.getOwnPropertyNames(m));

//setPortotypeOf()
let p = Object.create({age: 19});
console.log('p.age :', p.age);  

Object.setPrototypeOf(p, {name: 'sss'});  
console.log('p.age :', p.age);   //undefind  因為已經被上面改扁原型對象  所以沒有age被洗掉了
console.log('p.name :', p.name);

// Object.keys() , Object.value() , Object.entries()............

//ES2018  
let {a,...b}={a:131,b:465,c:'dddd'}  //也可以解構物件
console.log(a)
console.log(b)  //會變成物件

let k={age:19};
let k2={neme:'ddd'}
let k3={...k,...k2} 
console.log(k3)  //相當於   assign