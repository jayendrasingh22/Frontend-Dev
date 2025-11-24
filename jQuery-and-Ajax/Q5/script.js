// Q5 – Team Members Directory
$(function(){
  $('#team').on('click', '.manager', function(e){
    e.stopPropagation();
    $(this).find('ul li.employee').addClass('highlight');
  });
  $('#team').on('mouseenter', '.employee', function(){ $(this).find('.contact').show(); })
            .on('mouseleave', '.employee', function(){ $(this).find('.contact').hide(); });
  $('#team').on('click', '.dept-tech', function(){ $('.dept-tech').css('background','#e8f4ff'); });
  $('#team').on('click', '.dept-sales', function(){ $('.dept-sales').css('background','#fff0f0'); });
  $('#random-emp').on('click', function(){
    const $emps = $('#team .employee');
    const idx = Math.floor(Math.random()*$emps.length);
    const $picked = $($emps.get(idx));
    $picked.siblings('.employee').addClass('selected');
  });
  $('#toggle-team').on('click', function(){ $('#team').find('ul').toggle(); });
  console.log('Q5 ready.');
});
