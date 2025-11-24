// Q3 – Interactive FAQ
$(function(){
  $('.faq-list').on('click', '.q', function(){ $(this).next('.a').slideToggle(150); });
  $('.faq-list').on('mouseenter', '.q', function(){ $(this).css('color','#d35400'); })
                 .on('mouseleave', '.q', function(){ $(this).css('color',''); });
  $('.faq-list').on('dblclick', '.q', function(){ $('.faq-list .a').slideUp(200); });
  $('.faq-list').on('focus', '.answer-input', function(){ $(this).closest('.faq').find('.q').css('background','#ffffe0'); });
  $('.faq-list').on('blur', '.answer-input', function(){ $(this).closest('.faq').find('.q').css('background',''); });
  console.log('Q3 ready.');
});
