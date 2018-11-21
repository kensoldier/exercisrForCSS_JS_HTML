1.初始化npm 配置文件。 
提前安裝好node 會自帶npm。

```shell
#到項目根目錄
    $npm init -y
```

會生成 package.json 文件，此為npm的配置文件(如果npm裡面的package已經設定好npm -i 會把設定的都下載好)

2.安裝我們依賴的 pulp外掛
```shell

#安裝gulp時要全局安裝
$npm i -g gulp
#安裝gulp依賴 加@不要裝4板以上的 因為設置要改
$ npm i -D gulp
```

3.安裝gulp sass依賴

```shell
#安裝gulp-sass依賴
$ npm i gulp-sass -D
#安裝gulp-sass 會依賴 node-sass 可能會失敗 ，因為很大包
```

4.新增gulpfile.js 執行gulp時他會去讀去這個檔案

5.下載  npm i -g live-server  下指令 live-server 
到同一個區域網路下的8080端口  可用手機看
如果手機有用USB連接電腦可以 用  more tool針機調適