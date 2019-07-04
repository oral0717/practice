var banner = document.querySelector(".banner");
var images = document.querySelectorAll(".img li");
var tabsParent = document.querySelector(".btn-list");
var tabs = document.querySelectorAll(".btn-list li")
var index = 0;

// 定时器
var timer = null;

window.onload = function(){
	timer = setInterval("change(true)", 3000);
};


tabsParent.onmouseover = function(event){
	var curTab = event.target;
	var curTabTag = curTab.tagName.toLowerCase();
	if (curTabTag !== "li") {return false;}
	clearInterval(timer);
	index = parseInt(curTab.dataset.index);
	if(index >= 0){
		for(var i=0;i<images.length;i++){
			images[i].className = "";
			tabs[i].className = "";
		}
		images[index].className = "on";
		tabs[index].className = "on";
	}

}

tabsParent.onmouseout = function(event) {
	var curTab = event.target;
	var curTabTag = curTab.tagName.toLowerCase();
	if (curTabTag !== "li") {return false;}
	timer = setInterval("change(true)", 3000);
}

// 切换图片
function change(isToRight){
	images[index].className = "";
	tabs[index].className = "";
	if (isToRight) {
		index ++;
		if (index > images.length - 1) index = 0;
	} else {
		index --;
		if (index < 0) index = images.length - 1;
	}
	images[index].className = "on";
  tabs[index].className = "on";
}