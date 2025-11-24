// Q8 – Dynamic Blog Posts
$(function(){
  $('#add').on('click', function(){ $('#posts').append('<div class="card post">New Post (appended) <div class="tags"></div></div>'); });
  $('#prepend').on('click', function(){ $('#posts').prepend('<div class="card post">Featured Post (top) <div class="tags"></div></div>'); });
  $('#remove-last').on('click', function(){ $('#posts .post:last').remove(); });
  $('#add-tag').on('click', function(){
    const $second = $('#posts .post').eq(1);
    $second.find('.tags').append('<span class="tag">#featured</span>');
    $second.before('<div class="card">Tag added before second post</div>');
  });
  $('#posts').on('click', '.post', function(){
    const txt = $(this).text().toLowerCase();
    if(txt.includes('launch') || txt.includes('featured')){
      $(this).css('border','2px solid #2b6fbf');
    } else { $(this).css('border',''); }
  });
  console.log('Q8 ready.');
});
