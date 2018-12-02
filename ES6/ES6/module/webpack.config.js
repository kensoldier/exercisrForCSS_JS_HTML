const path=require('path');

module.exports={
    mode:'development',//在 webpack4裡面需要設定模式  //npx 代表式使用你安裝後的本地node module
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve('./dist')
    }
}