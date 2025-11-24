// Q2 – Product Highlight
$(function(){
  $('#products').on('click', '.product', function(){
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
  });
  $('#products').on('mouseenter', '.product', function(){ $(this).find('.details').slideDown(150); })
               .on('mouseleave', '.product', function(){ $(this).find('.details').slideUp(100); });
  $('#products').on('click', '.fav', function(e){
    e.stopPropagation();
    $(this).toggleClass('selected');
    $(this).text($(this).hasClass('selected') ? '♥ Favorited' : '♡ Favorite');
  });
  $('.product').filter(function(){ return Number($(this).data('discount')) > 0; })
               .css('box-shadow','0 0 10px rgba(0,150,0,0.15)');
  $('#products').on('click', '.product', function(){
    const stock = Number($(this).data('stock'));
    if(stock === 0){ alert($(this).data('name') + ' is out of stock!'); }
  });
  console.log('Q2 ready.');
});
