// Q7 – Search Courses
$(function(){
  function updateCount(n){ $('#count').text(n); }
  $('#search').on('keyup', function(){
    const q = $(this).val().toLowerCase().trim();
    let matched=0;
    $('#course-list .course').each(function(){
      const text = $(this).text();
      if(q && text.toLowerCase().includes(q)){
        $(this).css('background','#ffffc8');
        $(this).show();
        matched++;
      } else if(q){
        $(this).hide();
        $(this).css('background','');
      } else {
        $(this).show();
        $(this).css('background','');
      }
    });
    updateCount(matched);
  });
  $('#clear').on('click', function(){ $('#search').val(''); $('#course-list .course').show().css('background',''); updateCount(0); });
  console.log('Q7 ready.');
});
