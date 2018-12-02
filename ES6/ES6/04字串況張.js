//ES6 對uncode(16進位)做出來擴張   可以採取 \uxxxxx   但必須在範圍\u0000~\uFFFF 之間的值

let x = '\u0061';
console.log(x); //a

//如果超出 \uFFFF  就要用兩個 字節表示不常見的字

let b = "\uD842\uDF87";
console.log(b) // 𠮇 特殊字

//jS 中的 字幅彙整
let a = '\z';
let b = '\172' //8進位
let c = '\x7A' //16進位
let d = '\u007A' //uncode
console.log([a, b, c, d])

// codePointAt()方法  可以轉換 2字節的字
let s = '𠮇';
console.log(s.charAt(0)) //因為是兩個字節  以前的方發吾反叛別是什麼字
console.log(s.charAt(1)) // 0 1 分別是兩個字節
console.log(s.charCodeAt(0)) //映出uncode後發現 是第1個字節

console.log(s.codePointAt(0)) // 可映出uncode
console.log(String.fromCodePoint(134023)) //可應出字

// for of
let s = '𠮇'; //2個字節 但都印不出來   要改用 for of
for (let i = 0; i < s.length; i++) {
    console.log(s[i])
}
for (let k of '你好你好') { //他可以出李< \uFFFF
    console.log(k);
}
//======================================include() startWith()  endWith()
let s = "123456789";
console.log(s.includes('56')) //true  包含片段
console.log(s.startsWith('12'))
console.log(s.endsWith('89'))

console.log(s.includes('4', 5)) //flase 第2個參數 從哪裡搜索

//===========================================repeat()
let s = "123456789";
console.log(s.repeat(2)) //接受一個參數  等於*的次數  但不接受 -1  ， 右如果是 2.7 會取整數變成 2

//==========================================padStart()  padEnd()  補全
let s = "19";
console.log(s.padStart(5, 'ad'))

//==========================================字符串模板
let s1 = `<div>
            <h3>ddd</h3>
          </div>`;
console.log(s1)
//數據跟字符串模板 之前要用拼接  
let [a1, a2] = [1, 2];
let s2 = `<p>${a1*2}</p>` //可以計算  也可以接受 function
console.log(s2)
//模板欠套  
let t = `<ul>
  ${[1,2,3,4,5,6].map((item)=>{
      return `<li>${item}</li>`
  }).join("")}   //因為 map 完之後 ,  可以直接用 join
  </ul>`
  console.log(t)