'use strict';
// Q7 - Login Form Validation using RegExp
// Username: at least 5 chars. Password: at least 8 chars, includes number, uppercase, lowercase, special.

const usernameRegex = /^.{5,}$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}/;

function validateLogin(username, password) {
  const errors = [];
  if (!usernameRegex.test(username)) errors.push('Username must be at least 5 characters.');
  if (!passwordRegex.test(password)) errors.push('Password must be at least 8 chars and include uppercase, lowercase, number, special char.');

  if (errors.length) {
    console.error('Login validation failed:', errors);
    return false;
  }
  console.log('Login validation successful for user:', username);
  return true;
}

// Sample tests
validateLogin('user', 'weak'); // should fail
validateLogin('strongUser', 'Str0ngP@ssw0rd'); // should pass

// If run in browser, can attach to a form with id="loginForm"
if (typeof document !== 'undefined') {
  window.addEventListener('load', () => {
    const form = document.querySelector('#loginForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = form.elements['username'].value;
      const password = form.elements['password'].value;
      const ok = validateLogin(username, password);
      // show messages in DOM as needed
    });
  });
}
