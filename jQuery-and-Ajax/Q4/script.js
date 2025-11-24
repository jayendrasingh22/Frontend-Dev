// Q4 – Special Offer Banner
$(function(){
  $('#hide').on('click', function(){ $('#banners .banner').hide(); });
  $('#show').on('click', function(){ $('#banners .banner').show(); });
  $('#slide-up').on('click', function(){ $('#banners .banner').slideUp(300); });
  $('#slide-down').on('click', function(){ $('#banners .banner').slideDown(300); });
  $('#fade').on('click', function(){ $('#banners .banner').fadeToggle(300); });
  let index = 0;
  const $banners = $('#banners .banner');
  function rotate(){
    $banners.fadeOut(400);
    $($banners.get(index)).fadeIn(400);
    index = (index + 1) % $banners.length;
  }
  $banners.hide();
  $($banners.get(0)).show();
  setInterval(rotate,5000);
  console.log('Q4 ready.');
});
