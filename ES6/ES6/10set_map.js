//set類型  類似數組  但成員 為唯一

let s = new Set();

s.add(1);
s.add(0);
s.add('20');
s.add(1);
console.log(s.size); //3 而已
//接受一個 可以遍歷對象  sting nodelist
let s = new Set([1, 2, 3, 4, 5, 6])
//set 內部比較  same-value-zero equalirt  類似於 === 但NaN可以判斷
s.add(NaN);
s.add(NaN);

s.add(+0);
s.add(-0)
console.log(s) //只會也一個 NaN
//刪除
s.delete(2)
console.log(s)
//has()  true/false
s.delete(s.has(5))
//轉成array
let arr = [...s];
console.log(arr)
//  Array.from(s) 也可以 轉成數組

//set 四種遍歷方式
let s = new Set([1, 22, 35]);
console.log(s.keys()); //set 的 keys 和 values一樣
console.log(s.values());
console.log(s.entries());

s.forEach((item, index, map) => {
    console.log(item);
    console.log(index);
})

// WeakSet()  只能存放對象  只能存放對象引用  不能存放值
let ws = new WeakSet();
let a = {
    age: 18
};
let b = {
    name: 'eee'
};

ws.add(a);
ws.add(b);
console.log(ws);
ws.delete(a)
console.log(ws.has(b));

// a = null 時拉機車會自動收走他  ，沒有別的引用會回收  因為 ws是個弱引用 拉機車不會考慮他  除非  a跟b都沒有使用  就會憶起回收

//=======================================map
//Map 類似於對象  也是鍵值對集合 ，但他的鍵值 不限定於自串  可以是OBJ  NUMBER 等等

let map = new Map();
let a={a:123};
b=new Number(2000);
map.set(a,{age:19});
map.set(b,195);
map.set('ddds',465)
console.log (map);  //Map { { a: 123 } => { age: 19 }, [Number: 2000] => 195 }   key => value

let map=new Map([[{a:19},19],[131,"1235"]]);
console.log(map)  //Map { { a: 19 } => 19, 131 => '1235' }
//size
console.log(map.size)

// delete (keys)  has(key)   clear() 清空

//map 遍歷器   keys() value()  entiries()   forEach()
let map =new Map([[1,1],[2,'ssss'],[{age:1},'ddd']]);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

for(let k of map.keys()){
console.log(map.get(k))  //get ()  拿到值
}

map.forEach((item,key)=>{
    console.log(item);
    console.log(key);
})

//weakMap  也只接受對象 做為鍵值 (null除外)  不記入拉機回收  一樣有 get 、set 、has 、delete
let wm =new WeakMap();
wm.Set(dom,{age:19})//假設 dom 被移除  那{age:19}也會被回收  不會因為  Wm 指向 {age:19}而不會回收