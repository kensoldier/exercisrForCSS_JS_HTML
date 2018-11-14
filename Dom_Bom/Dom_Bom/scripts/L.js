(function (w) {
    var L = w.L ? w.L : {}; //佔用了全局的L  定義了L
    L.Dialog = function (selector) {
        //判斷selector是否存在  因為如果使用者把 new dialog 放在 onclick裡面的時候  會多次創造選擇器 導致關閉按鈕失效
        if(L.Dialog.catch[selector]){
            return L.Dialog.catch[selector];
        }
        //接收選擇器
        //show方法
        //close 方法
        //動態解析用戶訊息
        var dialogDiv = document.querySelector(selector);
        if(!dialogDiv){
            return null;
        }
        var title = dialogDiv.getAttribute('title');
        //把cover加給body
        var dialogCover = document.createElement('div');
        dialogCover.className = "dialog-cover";
        dialogCover.style.display = "none";
        document.body.appendChild(dialogCover);
        var strHTML = "";
        strHTML += '<div class="dialog" id="dialog">';
        strHTML +=   '<div class="dialog-h">';
        strHTML +=     '<h3>' + title + '</h3>'
        strHTML +=     '<span class="closeBtn" id="closeBtn">x</span>'
        strHTML +=   '</div>';
        strHTML +=     '<div class="dialog-b">';
        strHTML +=        dialogDiv.innerHTML;
        strHTML +=     '</div">';
        strHTML += '</div">';
        dialogDiv.innerHTML=strHTML
        //<div class="dialog-cover" id="dialog-cover"></div>
        // <div class="dialog" id="dialog"> //要給body 創建  
        //     <div class="dialog-h">
        //         <span class="closeBtn" id="closeBtn">x</span>
        //         <h3>對話框頭不</h3>
        //     </div>
        //     <div class="dialog-b">
        //         body
        //     </div>
        // </div>
        //要生成上面內容
        var dialog = {
            dialogCover:dialogCover,
            dialogDiv: dialogDiv, //用戶的dialogDiv
            title: title, //用戶的title
            show: function () {
                this.dialogDiv.style.display='block';
                this.dialogCover.style.display="block";
                var self =this;//dislog  自己  外面是dialog.show  所以this=dialog
                var closeBtn=dialogDiv.querySelector('.closeBtn');
                closeBtn.onclick=function(){
                    self.close();   //如果 self 變成this 是指closeBtn 本身
                    console.log(this)
                }
                dialogCover.onclick=function(){
                    self.close();//self  一樣改成this 是指self 而且會抱錯 因為dialogCover 本身沒有close方法
                }
            },
            close: function () {
                this.dialogDiv.style.display='none';
                this.dialogCover.style.display="none";
                var self =this;//dislog  自己
                var closeBtn=dialogDiv.querySelector('.closeBtn');
                closeBtn.onclick=null //去掉點擊
            }
        }
        //不管寫在哪都可以  不過盡量不要寫在onclick裡面
        L.Dialog.catch[selector]=dialog
        return dialog;
    }
    L.Dialog.catch={}//在函數上面創建一個緩存空間 放置 selector
    w.L = L
})(window || {})