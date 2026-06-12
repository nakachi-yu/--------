
$(document).ready(function(){


// console.log('動いてる');

  var duration = 300;

  $('.slideshoe').slick({
  dots: true,
  arrows: false,      // 矢印非表示
  infinite: true,
  speed: 500,
  fade: true,
  
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false // マウス乗せても止まらない
  });




$('.contact-btn')
        .on('mouseover', function(){
            $(this).find('.bg')
                .stop(true).animate({width: '100%'}, duration, 'easeOutQuad');
        })
        .on('mouseout', function(){
            $(this).find('.bg')
                .stop(true).animate({width: '0%'}, duration, 'easeOutQuad');
        });        

 $('.fv-a')
        .on('mouseover', function(){
            $(this).find('.bg')
                .stop(true).animate({width: '100%'}, duration, 'easeOutQuad');
        })
        .on('mouseout', function(){
            $(this).find('.bg')
                .stop(true).animate({width: '0%'}, duration, 'easeOutQuad');
        });          



       
$('.fv-detail h1 span').animate({
  left: '0%'
},1000);
  










$('.fv-detail h1 span').eq(0).css({
  opacity: 1,
  transform: 'translateX(0px)'
});


setTimeout(function(){
$('.fv-detail h1 span').eq(1).css({
  opacity: 1,
  transform: 'translateX(0px)'
});
},500);

setTimeout(function(){
$('.ilst').css('opacity','1');
},2000);











});

