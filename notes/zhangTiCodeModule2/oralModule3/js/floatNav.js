
   $(document).ready(function() {      
      $(window).scroll(function(){  
      var vtop=$(document).scrollTop(); //滚动条到浏览器窗口顶部的距离
      var w1=$(document).width();
      var w2=$('.floatnav').width();

      if(vtop>=500){ //滚动到大于等于500px的时候
       $('.floatnav').css({
        'position':'fixed',
        'top':'0',
        'left':(w1-w2)/2+50+'px',
        'z-index':'110'

       });
      } 
      else{
        $('.floatnav').css('position','');        
      }
 })
  })


