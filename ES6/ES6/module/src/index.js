import {a,b,c,show,age,name,addAge} from './b';
import * as ken from './b';// 單例模式 同一個文件不管倒出多少次 都是同一格對象  且import式延遲執行 用到才會執行  值require式立即執行

show();
addAge(19);
show();

ken.show()

import sss from './b'; //只有default 可以接受到  ， 因為直接用名子時  他會只向只有default
console.log(sss)

//如果是要引入整個文件  import './b.js'
//注意  es6模塊式靜態解析  所有所有的 import 會先去解析 在去執行模塊內部代碼