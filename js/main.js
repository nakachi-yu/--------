
$(document).ready(function () {


  // console.log('動いてる');

  var duration = 300;


  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // ファーストブューのslickスライドショー
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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


  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // 予約・お問合せボタンのホバー処理
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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


  //＞＞＞＞ footerの予約・お問合せボタン＜＜＜＜＜
  // hover時の背景を左から右の変化

  $('.contact-buttun')
    .on('mouseover', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '100%' }, duration, 'easeOutQuad');
    })
    .on('mouseout', function () {
      $(this).find('.bg')
        .stop(true).animate({ width: '0%' }, duration, 'easeOutQuad');
    });



  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // キャッチコピーの起動処理
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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


  //＞＞＞＞ fvのp(詳細)＜＜＜＜＜
  // 下からの表示

  setTimeout(function () {
    $('.fv-detail p').css({
      opacity: 1,
      transform: 'translateY(0px)'
    });
  }, 1500);


  //＞＞＞＞ fvのa(予約・お問合せボタン)＜＜＜＜＜
  // 下からの表示

  setTimeout(function () {
    $('.fv-detail a').css({
      opacity: 1,
      transform: 'translateY(0px)'
    });
  }, 1600);



  //＞＞＞＞ イラスト)＜＜＜＜＜
  //opcity0→1でイラストを表示

  setTimeout(function () {
    $('.ilst').css('opacity', '1');
  }, 1900);




  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // フィードインアニメーション
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  //＞＞＞＞ TOPへスクロール＜＜＜＜＜
  // fv.より下に行くとTOPへスクロールボタンが表示される


  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // フィードインアニメーション　（TOPボタン）
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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



  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // スムーススクロール
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  // TOPボタンをクリックした時にページ上部へスムーズに移動

    $toTopButton.click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 300); // 300ミリ秒かけて移動
    });
  });


  // logoボタンとfooter-navをクリックした時にページ上部へスムーズに移動

  $('.logo, .footer-nav a:first-child').click(function (e) {
    $('html, body').animate({
      scrollTop: 0
    }, 600); // 300ミリ秒かけて移動
  });


  // navボタンをクリックした時に　<選択したセクション>　に移動

  $('a[href="#top"], a[href="#price"], a[href="#flow"], a[href="#area"], a[href="#service"], a[href="#contact"]').on('click', function (e) {
    e.preventDefault();
    let target = $($(this).attr('href'));

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

  });



  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // フィードインアニメーション   （全体のセクションごと）
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  // 下から上にふわっと現れる

  $(window).scroll(function () {
    $('.section-title, .card, .area-items, .area-img, table, .price-info, .flow-item').each(function () {

      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass('show');
      }

    });

  });



  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // サービスカードのホバー処理
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  // hoverで(.card-hover)詳細を表示

  $('.card-hover')
    .on('mouseover', function () {
      $(this).css('opacity', '1');
    })
    .on('mouseout', function () {
      $(this).css('opacity', '0');
    });



  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // サービス追加テキストのホバー処理
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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