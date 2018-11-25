!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            //這樣會發現  如果剛開  畫面時  輪播圖會非常小  因為這裡設定為
            //寬度要在下面範圍  才會設定字體大小  對下做修改
            width=width<320?320:width;
            width=width>640?640:width;
                width && (docEle.style.fontSize = 100 * (width / 640) + "px");
          
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));



