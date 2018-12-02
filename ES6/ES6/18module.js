//module模塊 是一個獨立的文件 文件內不得所有變量 外部無法獲得  
//模塊的功能主要由兩個部分所組成  export(對外的接口) / import(輸入其他模塊)  

//export 只能輸出對象
export var firstName = 'ken' //可以直接做變量聲明  但她還是會把它放到物件裡面
export var lastName = '000'

var firstName = 'ken' //跟上面一樣
var lastName = '000'
export {
    firstName,
    lastName
}

export function add(a,b){  //也可以輸出一個函數  也就是把函數加入對象
    return a+b
}
//as 給別的名子

//src 裡面有 demo
