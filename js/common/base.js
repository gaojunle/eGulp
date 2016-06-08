define([], function () {
    var BUtils = {
        // 计算包含英文与汉字的字符串长度
        countCharacters: function (str) {
            var totalCount = 0;
            for (var i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);
                if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                    totalCount++;
                } else {
                    totalCount += 2;
                }
            }
            return totalCount;
        }
    }

    return BUtils;
});
