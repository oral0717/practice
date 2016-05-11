//弹出层
/*global $,window,document*/
(function (global) {
  'use strict';
  var overlayer_ClassName = ['overlayer_success1', 'overlayer_success2', 'overlayer_outline1', 'overlayer_outline2', 'overlayer_outline3', 'overlayer_outline4', 'overlayer_outline5'];

  $(function () {
    $(window).on('resize', function () {
      for (var i = 0; i < overlayer_ClassName.length; i++) {
        refresh(overlayer_ClassName[i]);
      }
    });
  });

  function refresh(className) {
    if (isLayerShow(className)) {
      showLayer(className);
    }
  }

  /*弹出框 s*/
  function showLayer(curlayer) {
      var h1 = $(document).height();
      var w2 = $(window).width();
      var h2 = $(window).height();
      var w3 = $('.' + curlayer).width();
      var h3 = $('.' + curlayer).height();
      $('#TB_overlayBG').css({
        'height': h1 + 'px'
      }).show();
      $('.' + curlayer).css({
        'top': (h2 - h3) / 2 + 'px',
        'left': (w2 - w3) / 2 + 'px'
      }).show();
    }
    /*弹出框 e*/

  //弹出框关闭按钮
  $(function () {
    $('.overlayer_close').click(function () {
      $('#TB_overlayBG').hide();
      $(this).parent().hide();
    });
  });

  function isLayerShow(curlayer) {
    if ($('.' + curlayer).css('display') == 'none')
      return false;
    else
      return true;
  }

  global.showLayer = showLayer;

})(this);