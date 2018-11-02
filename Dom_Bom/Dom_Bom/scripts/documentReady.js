//Jquery 實現文檔加載
/*
       * jquery實現文檔加載程序處理
       * @callback function 頁面加載完執行回掉函數       
      */
document.myReady = function (callback) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback, false);
    } else if (document.attachEvent) {    //兼容IE8以下的瀏覽
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState == 'interactive') {
                callback(window.event);
            }
        })
    } else {//其他特殊情況
        window.onload = callback;
    }
}
