(function($) {
    var checkWayObj = {};
    var checkStatusObj = {};

    function checkMinMax(val, arr){
        var min=arr[0], max=arr[1], regexp=arr[2];
        // var hLen = Math.ceil(val.byteLen() / 2);
        var hLen = Math.ceil(getBytes(val));
        if(hLen >min && hLen < max){
            if(regexp){
                return regexp.test(val);
            }
            return true;
        }
        return false;
    }

    function checkContains(val, arr){
        return arr.some(function(item){
            return val.contains(item);
        })
    }

    function checkValid(name, val, way, el){
        var is_valid = true;
        if($.isFunction(way)){
           is_valid = way(val);
        }else if($.isArray(way)){
            way = way.concat();
            var command = way.shift();
            if(command == 'is_value'){
                is_valid = val == way[0];
            }else if(command == 'min_max' || command == 'min_max_exp'){
                is_valid = checkMinMax(val, way);
            }else if(command == 'has_contains'){
                is_valid = val ? checkContains(val, way) : true;
            }else if(command == 'not_emtpy'){
                is_valid = val ? true : false;
            }else if(command == 'has_checked'){
                is_valid = $('[name="'+name+'"]:checked').length ? true : false;
            }
        }
        return is_valid;
    }

    function addItem(name, way, defaultBool){
        checkWayObj[name] = way;
        checkStatusObj[name] = defaultBool;
    }
    function addItems(wayObj, defaultBoolObj){
        checkWayObj = wayObj;
        checkStatusObj = defaultBoolObj;
    }
    function check(el){
        if(!(el instanceof jQuery)){
            el = $('[name='+el+']');
        }
        var name = el.attr('name') || '';
        var val = el.val().trim();
        var way = checkWayObj[name];
        var is_valid = checkValid(name, val, way, el);
        checkStatusObj[name] = is_valid;
        $($.formItem).trigger('checkafter',[{name:name, el:el, is_valid:is_valid}]);
    }
    function checkAll(){
        for(var i in checkWayObj){
            check(i);
        }
    }
    function status(name, bool){
        if(name){
            if(typeof bool == "boolean"){
                checkStatusObj[name] = bool;
                return true;
            }else{
                return checkStatusObj[name];
            }
        }
        var name_list = [];
        var is_ok = true;
        var i;
        for(i in checkWayObj){
            name_list.push(i);
        }
        for (i = name_list.length - 1; i >= 0; i--) {
            var key = name_list[i];
            if(!checkStatusObj[key]){
                is_ok = false
            }
        };
        return is_ok;
    }

    function getBytes(str) {
        var totalLen = 0;
        var charCode;
        if(!str){
            return totalLen;
        }
        for (var i = 0; i < str.length; i++) {
            charCode = str.charCodeAt(i);
            if (charCode < 0x007f) {
                totalLen++;
            } else if ((0x0080 <= charCode) && (charCode <= 0x07ff)) {
                totalLen += 2;
            } else if ((0x0800 <= charCode) && (charCode <= 0xffff)) {
                totalLen += 3;
            } else {
                totalLen += 4;
            }
        }
        return totalLen;
    }

    $.formItem = {
        addItem:addItem,
        addItems:addItems,
        check:check,
        checkAll:checkAll,
        status:status
    }

}(jQuery));
