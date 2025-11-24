// Q10 – Registration Form Validation
$(function(){
  const existing = ['a@ex.com','bob@ex.com'];
  function validateEmailFormat(e){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(e);
  }
  $('#submit').on('click', function(e){
    e.preventDefault();
    let valid = true;
    $('#msg').empty();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const pwd = $('#password').val();
    if(!name){
      valid = false;
      $('#name').css('border','2px solid red');
      $('#msg').append('<div class="bad">Name is required</div>');
    } else { $('#name').css('border',''); }
    if(!validateEmailFormat(email)){
      valid = false;
      $('#email').css('border','2px solid red');
      $('#msg').append('<div class="bad">Invalid email format</div>');
    } else if(existing.includes(email)){
      valid = false;
      $('#email').css('border','2px solid red');
      $('#msg').append('<div class="bad">Email already used</div>');
    } else { $('#email').css('border',''); }
    if(!pwd || pwd.length < 8){
      valid = false;
      $('#password').css('border','2px solid red');
      $('#msg').append('<div class="bad">Password must be at least 8 characters</div>');
    } else { $('#password').css('border',''); }
    if(valid){
      $('#msg').html('<div class="card">Registration successful!</div>');
    } else {
      $('#msg').append('<div class="bad">Please fix the errors above.</div>');
    }
  });
  console.log('Q10 ready.');
});
