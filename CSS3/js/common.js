/**
 * 獲取 url地址參數的方法
 * @param {any} key:參數名
 * @returns {string} 匹配結果
 */
function getUrlParam(key) {
    var reg = new RegExp(key + '=([^$]*)');
    var result = location.href.match(reg);
    return result ? result[1] : null
    //result[1]  index為1 的分組

}

/**
 * 根據還秒返回具體  HOUR  MIN   SECOND 的時間差
 *  @param {number} ms 相隔的毫秒數
 *  @returns {Array} 返回時間的數組['2','2',,,]
 */

function getHouseMinuteSecondByMs(ms) {
    ms = +ms;
    if (ms < 0) {
        return null;
    }
    //處理小時
    var hours = parseInt(ms / (1000 * 60 * 60)) % 24; //為了確保不要超過24小時的數據
    var minutes = parseInt(ms / (1000 * 60)) % 60;
    var seconds = parseInt(ms / (1000)) % 60;
    var hourStr = ('0' + hours);
    hourStr = hourStr.slice(-2);
    var minStr = ('0' + minutes);
    minStr = minStr.slice(-2);
    var secStr = ('0' + seconds);
    secStr = secStr.slice(-2);
    var str =hourStr+minStr+secStr;
    return str.split('');
}