var EventUtil = {
    addHandler: function(element,type,handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachment){
            element.attachment("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event){   //取消事件默认行为
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function(element, type, handler){
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler)
        } else {
            element["on" + type] = null;
        }
    },
    stopPropagation: function(event){    //停止冒泡
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function(event){    //只对mouseover和mouseout事件event才包含值
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){  //mouseout时，IE的toElement属性中保存着相关元素
            return event.toElement;
        } else if (event.fromElement){  //mouseover时，IE的fromElement属性中保存着相关元素
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function(event){ //获取按下鼠标的某个按钮
        if (document.implementation.hasFeature("MouseEvents", "2.0")){  //DOM事件
            return event.button;
        } else {//IE8及低版本
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;  //表示按下主鼠标按钮
                case 2:
                case 6:
                    return 2;//表示按下次鼠标按钮
                case 4:
                    return 1;//表示中间鼠标按钮
            }
        }
    },
    getCharCode: function(event){  //字符编码 charCode   keypress事件时才包含值，ie9，ff,chrome,safari的event下支持charCode,此时的keyCode常等于0 或键码，IE8及低版本和Opera在keyCode中保存字符编码，取得字符编码以后，可以得到字符：String.fromCharCode(charCode);
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}
