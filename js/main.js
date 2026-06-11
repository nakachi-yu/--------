
$(document).ready(function(){

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

// $('#buttons1 button:nth-child(n+9)')
//         .on('mouseover', function(){
//             $(this).find('> span')
//                 .stop(true).animate({width: '100%'}, duration, 'easeOutQuad');
//         })
//         .on('mouseout', function(){
//             $(this).find('> span')
//                 .stop(true).animate({width: '0%'}, duration, 'easeOutQuad');
//         });
        




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






























});

