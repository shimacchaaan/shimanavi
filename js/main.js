$(function() {
  $('#btn-june').click(function(){
    $('.june').fadeIn();
  });

  // アコーディオン化する
  $('#btn-june').click(function() {
    var $june = $(this).find('.june');
    if($june.hasClass('open')) {
      $june.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $june.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');
      
    } else {
      $june.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $june.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');

    }
  });

});
