window.onload = function(){
  var images = document.querySelectorAll(".seenpad-imp-img li");
  var tabs = document.querySelectorAll(".seenpad-imp-btn-list li")
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
        images[index].className = "seenpad-imp-on";
        tabs[index].className = "seenpad-imp-on";
      }
    }
    tabs[i].onmouseout = function(){
      timer = setInterval(function(){
        change(true);
      }, 3000);
    }
  }
  $("#seenPadImpBanner").touchMoveDirection({
    　　 onLeft: function () {
          // console.log("left");
          clearInterval(timer);
          change(true);
          timer = setInterval(function(){
            change(true);
          }, 3000);
    　	},
      　onRight: function () {
          // console.log("right");
          clearInterval(timer);
          change(false);
          timer = setInterval(function(){
            change(true);
          }, 3000);
      　}
      });
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
    images[index].className = "seenpad-imp-on";
    tabs[index].className = "seenpad-imp-on";
  }

};