window.onload = function(){
  var images = document.querySelectorAll(".img li");
  var tabs = document.querySelectorAll(".btn-list li")
  var index = 0;
  var timer = null;
  timer = setInterval(function(){
    change(true);
  }, 3000);

  for(var i=0;i<tabs.length;i++){
    tabs[i].onmouseover = function(e){
      clearInterval(timer);
      var curTab = event.target;
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
    tabs[i].onmouseout = function(){
      timer = setInterval(function(){
        change(true);
      }, 3000);
    }
  }

  // 切换图片
  var change = function(isToRight){
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

};