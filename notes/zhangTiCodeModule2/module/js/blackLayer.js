//蒙层效果
$(function(){
  $('.oral_table1 td').not('.last_tr td').mouseenter(function(){
    $(this).parent().parent().find('.blackLayer').show();
    $(this).find('.blackLayer').hide();
  });
  $('.oral_table1 td').not('.last_tr td').mouseleave(function(){
    $(this).parent().parent().find('.blackLayer').hide();
  });
});

