// Q1 – Welcome Page Greeting
$(function(){
  function getGreeting(){
    const hour = new Date().getHours();
    if(hour < 12) return 'Good Morning';
    if(hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }
  $('#greeting').text(getGreeting() + ', Visitor!');
  $('#greeting').on('click', function(){ alert('Welcome! Have a great day!'); });
  $('#change-greet').on('click', function(){ $('#greeting').text('Keep pushing forward — every step counts!'); });
  $('#toggle-welcome').on('click', function(){ $('#welcome-msg').toggle(); });
  console.log('Q1 ready.');
});
