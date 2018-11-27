var pjax = {
	// Forward And Back，表示當前操作是否由前進和後退觸發
    fnb: false,
	// 顯示新頁面內容
	show: function (title, html) {
		document.title = title;
		document.querySelector('#result').innerHTML = html;
	},

	//跳轉到指定頁面
	jump: function (url, data, callback) {
		
		// 如果是由前進後退觸發，則試著從緩存中獲取數據
        if (pjax.fnb) {
            var value = http;
            if (value !== null) {
                pjax.show(value.title, value.html);
                return;
            }
        }


        document.querySelector('#result').innerHTML = '加載中...';
		//ajax發送請求
		var xhr = new XMLHttpRequest();

		xhr.open("GET", url, true);
		// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = function(){
        	if(xhr.readyState === 4){
        		if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){ //304是緩存
        			var html = xhr.responseText,
        			    title ="";
						console.log(html);
						console.log(title);
        			if(title==null){
        				title = document.title;
        			}else{
        				title = decodeURI(title);
        			}
    				// 顯示新頁面
    				pjax.show(title, html);

    				//不是前進和後退按鈕觸發
    				// if(!pjax.fnb){
    					// 修改URL,URL地址欄會變換
                       // if (support === 'HTML5') {
                            // history.pushState(null, null, url);
                       // } else {
                        	// var path = url.replace(location.protocol + "//" + location.host, "");
                            // location.hash = path;
                       // }
                        // 添加到緩存
                        // cache.set(url, {
                        //     title: title,
                        //     html: html
                        // });
    			//	}

        		}else{
        			console.log('請求失敗！');
        		}
        		pjax.fnb = true;
        	}
        };
        xhr.send();
	},

	init: function () {
		event.bindEvent();
	}
};
