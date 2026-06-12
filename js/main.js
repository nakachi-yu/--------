
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
  

// $('.fv-detail h1 span').css({
//   color:'red',
//   left:'0',
//   position:'relative'
// });




// $('.fv-detail h1 span').animate({
//   color:'red',
//   left:'0',
  
// });




// $('.fv-detail h1 span').css('left')
// $(window).on('load', function () {
//   $('.fv-detail h1 span').animate({
//     left:'0'
//   },1000);
  
// });



// console.log($('.fv-detail h1 span').length);
// setTimeout(function(){
//   $('.fv-detail h1 span').animate({
//     left:'0'
//   },1000);
// },1000);



// $('.ilst').css('opactity',0.5);



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













});

