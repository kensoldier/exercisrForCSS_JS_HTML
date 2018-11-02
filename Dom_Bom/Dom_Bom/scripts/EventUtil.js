(function (window) {
    //封裝一個綁定事件的兼容處理
    var EventUtil = {
    //1.給誰綁定 2.綁定什麼事件 3. 綁定事件的觸裡程序  4.捕獲冒泡?
    //要寫成  EventUtil.addEvent(element, 'click', function (e) { },true/false)
        addEvent:function (element,type,handler,isCapture) {
            if (element.addEventListener) {
                //判斷是否冒泡
                isCapture = isCapture ? true : false;
                element.addEventListener(type, handler, isCapture);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, function () {
                    //要把e傳進去 是因為ie的e=window.event,而其他不用
                    return handler.call(element, window.event);
                    //如果是一般函數調用模式this= window 而不是event.target||event.srcElement 所以借用call
                })
            }
        },

        //獲得事件
        getEvent: function (e) {
            return e || window.event;
        },

        //獲得事件原對象
        getTarget: function (e) {
            return e.target || e.srcElement;
        },

        //阻止冒泡行為
        stopPropagation: function (e) {
            if (e.stopPropagation) {
                e.stopPropagation()
            } else {
                e.cancleBubble = true;
            }
        },

        //阻止默認行為
        preventDefault: function (e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }

        }

    };
    //把上面所對應的對象賦值給window的屬性 
    window.EventUtil = EventUtil;
    //傳window 讓window接收
})(window || {})

