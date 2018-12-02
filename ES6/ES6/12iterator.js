//遍歷器 允許開發人員讓OBJ做成一個可遍歷的對象

let s={
    age:19,
    name:'sss'
}

for(let key of Object.keys(s)){  //因為 Object.keys(s)會返回一個可遍歷的對象
 console.log(key)
}

for(let key of s){  // 會報錯 因為不可循環  因為它是一個可遍歷的對象
    console.log(key)
   }
// 如果該對象要變成一個 可遍歷的對象  要有一個屬性Synbol .iterator  且要有 next()方法 且每次返回 {value:<any>,done:{boolean}}

//自定義對象
let s={
    data:[1,2,3,4,'ss'],
    [Symbol.iterator](){
        let self=this;
        return {
            next(){
               // {value:<any>,done:{boolean}}
               //每次遍歷都要返回 一個對象
               if(self._index===undefined){
                   self._index=0;
               }
               let t={
                   value:self.data[self._index],
                   done:self._index === self.data.length - 1 
               }
               self._index+=1;
               return t
            }
        }
    }
}

for(let key of s){ 
    console.log(key)
   }

   //  Array、Map、Set、String、argumemts、NodeList 、TypeArray 都有原生的遍歷器