$(document).ready(()=>{
  $('#mycarousel').carousel({interval: 1000});
  $('#carouselButton').click(function(){
    if($('#carouselButton').children('span').hasClass('fa-pause')){
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    }else{
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  })

  $('#carousel-pause').click(function(){
    $('#mycarousel').carousel('pause');
  });
  $('#carousel-play').click(function(){
    $('#mycarousel').carousel('cycle');
  });
  $('#modalButton').click(function(){
      $('#reserveModal').modal();
  })
  $('#ModalLogin').click(function(){
    $('#loginModal').modal();
  })
})
