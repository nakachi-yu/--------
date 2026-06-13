
$(document).ready(function () {


  // console.log('動いてる');

  var duration = 300;


  //＞＞＞＞ fvのスライド＜＜＜＜＜
  // スライドショー

  $('.slideshoe').slick({
    dots: false,  // 矢印非表示
    arrows: false,      // 矢印非表示
    infinite: true,
    speed: 500,
    fade: true,

    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false // マウス乗せても止まらない
  });


  //＞＞＞＞ header　navの予約・お問合せボタン＜＜＜＜＜
  // hover時の背景を左から右の変化

  $('.contact-btn')
    .on('mouseover', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '100%' }, duration, 'easeOutQuad');
    })
    .on('mouseout', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '0%' }, duration, 'easeOutQuad');
    });


  //＞＞＞＞ fvの予約・お問合せボタン＜＜＜＜＜
  // hover時の背景を左から右の変化

  $('.fv-a')
    .on('mouseover', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '100%' }, duration, 'easeOutQuad');
    })
    .on('mouseout', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '0%' }, duration, 'easeOutQuad');
    });



  $('.contact-buttun')
    .on('mouseover', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '100%' }, duration, 'easeOutQuad');
    })
    .on('mouseout', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '0%' }, duration, 'easeOutQuad');
    });




  //＞＞＞＞ fvのキャッチコピー＜＜＜＜＜
  // 左からの表示

  // h1 1行目
  $('.fv-detail h1 span').eq(0).css({
    opacity: 1,
    transform: 'translateX(0px)'
  });

  // h1 2行目
  setTimeout(function () {
    $('.fv-detail h1 span').eq(1).css({
      opacity: 1,
      transform: 'translateX(0px)'
    });
  }, 500);



  //＞＞＞＞ fvのp(詳細)とa(予約・お問合せボタン)＜＜＜＜＜
  // h1全部終わった後、下からの表示

  setTimeout(function () {
    $('.fv-detail p').css({
      opacity: 1,
      transform: 'translateY(0px)'
    });
  }, 1500);

  setTimeout(function () {
    $('.fv-detail a').css({
      opacity: 1,
      transform: 'translateY(0px)'
    });
  }, 1600);


  //＞＞＞＞ イラスト)＜＜＜＜＜
  // fvのp(詳細)とa(予約・お問合せボタン)が終わった後、イラストを表示

  setTimeout(function () {
    $('.ilst').css('opacity', '1');
  }, 1900);


  //＞＞＞＞ TOPへスクロール＜＜＜＜＜
  // fv.より下に行くとTOPへスクロールボタンが表示される

  $(function () {
    const $toTopButton = $('#js-button-top');
    const scrollAmount = 900; // 出現させるスクロール量（px）

    // スクロールされた時に発火
    $(window).scroll(function () {
      if ($(this).scrollTop() > scrollAmount) {
        $toTopButton.addClass('show');
      } else {
        $toTopButton.removeClass('show');
      }
    });

    // ボタンをクリックした時にページ上部へスムーズに戻る
    $toTopButton.click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 300); // 300ミリ秒かけて移動
    });
  });



  // ボタンをクリックした時に　<ご予約・お問合せ>　に移動
 $('a[href="#contact"]').on('click', function (e) {
    e.preventDefault();
    let target =$($(this).attr('href'));

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  
 });


  // ボタンをクリックした時に　<ご予約・お問合せ>　に移動

$('a[href="#service"]').on('click', function (e) {
    e.preventDefault();
    let target =$($(this).attr('href'));

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  
 });


   // ボタンをクリックした時に　<対応エリア>　に移動
$('a[href="#area"]').on('click', function (e) {
    e.preventDefault();
    let target =$($(this).attr('href'));

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  
 });

  // ボタンをクリックした時に　<料金プラン>　に移動
$('a[href="#price"]').on('click', function (e) {
    e.preventDefault();
    let target =$($(this).attr('href'));

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  
 });


  // ボタンをクリックした時に　<ご利用の流れ>　に移動

$('a[href="#flow"]').on('click', function (e) {
    e.preventDefault();
    let target =$($(this).attr('href'));

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  
 });



  // 下から上にふわっと現れる

  $(window)






















































  //＞＞＞＞サービス内容のカード＜＜＜＜＜
  // hoverで(.card-hover)詳細を表示

  $('.card-hover')
    .on('mouseover', function () {
      $(this).css('opacity', '1');
    })
    .on('mouseout', function () {
      $(this).css('opacity', '0');
    });




  //＞＞＞＞サービス内容の下の文章＜＜＜＜＜
  // 青い帯で隠してから文字を表示


  $(window).on('scroll', function () {

    let target = $('.message').offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (
      scroll > target - windowHeight + 100 &&
      !$('.message').hasClass('done')
    ) {

      $('.message').addClass('done');
      $('.cover').animate({
        width: '100%'
      }, 500,

        function () {
          setTimeout(() => {
            $('.message p').css('opacity', '1');
            $(this).animate({
              width: '0%'
            }, 800);
          }, 200);
        });
    }

  });



});

