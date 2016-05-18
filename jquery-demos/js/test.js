//插件
;
(function ($) {
	$.sum = function (array) {
		var total = 0;
		$.each(array, function (index, value) {
			value = $.trim(value);
			value = parseFloat(value) || 0;
			total = total + value;
		});
		return total;
	};
})(jQuery);

/*var blocked=false;
try{
	var w=window.open('https://www.baidu.com','_blank');
	console.log(w);
	if(w==null){
		blocked=true;
	}
}catch(ex){
	blocked=true;
}
if(blocked){
	alert('The popup was blocked!');
} */