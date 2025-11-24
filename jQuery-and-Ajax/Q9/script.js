// Q9 – Multi-JQuery Widgets
(function($){
  $(function(){
    const $slides = $('.slider');
    let idx = 0;
    setInterval(function(){
      idx = (idx + 1) % 3;
      $slides.text('Slide ' + (idx+1) + ' (handled by jQuery v1)');
    }, 2000);
    console.log('Q9: jq1 carousel started');
  });
})(window.jq1);
(function($){
  $(function(){
    $('.modal-trigger').on('click', function(){
      const $modal = $('<div class="card">Notification Modal (created by jq2)</div>');
      $('body').append($modal);
      setTimeout(()=> $modal.fadeOut(800, ()=> $modal.remove()), 2000);
    });
    $('.widget').on('mouseenter', function(){ $(this).css('background','#e6f7ff'); }).on('mouseleave', function(){ $(this).css('background',''); });
    $('.widget').attr('title','Widget tooltip (handled by jq2)');
    console.log('Q9: jq2 modal & tooltip handlers attached');
  });
})(window.jq2);
