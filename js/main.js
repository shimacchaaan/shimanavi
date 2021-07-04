$(function() {
  // アコーディオン化する
  $('#btn-june').click(function() {
    if($('.june').hasClass('open')) {
      $('.june').removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $('.june').fadeIn();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');

    } else {
      $('.june').addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $('.june').fadeOut();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');

    }
  });

});
