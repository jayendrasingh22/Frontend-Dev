'use strict';
// Q2 - Student Form Validator (RegExp + Optional DOM)
// Provides validation functions for Name, Email, Phone, Password.
// If run in a browser, it can attach to DOM form elements. For Node, use validateSample().

const validators = {
  name: (s) => /^[A-Za-z\s]+$/.test(s),
  email: (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),
  phone: (s) => /^\d{10}$/.test(s),
  password: (s) => /(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}/.test(s)
};

function validateStudent({ name, email, phone, password }) {
  const result = {
    name: validators.name(name),
    email: validators.email(email),
    phone: validators.phone(phone),
    password: validators.password(password)
  };
  console.log('\nValidation Results:');
  console.log('Name valid:', result.name);
  console.log('Email valid:', result.email);
  console.log('Phone valid:', result.phone);
  console.log('Password valid:', result.password);
  return result;
}

// Sample test
function validateSample() {
  const sample = {
    name: 'Amit Kumar',
    email: 'amit@example.com',
    phone: '9876543210',
    password: 'StrongP@ss1'
  };
  validateStudent(sample);
}

// If running in browser and a form exists, attach listeners to show red/green borders
if (typeof document !== 'undefined') {
  window.addEventListener('load', () => {
    const form = document.querySelector('#studentForm');
    if (!form) return;
    const fields = ['name','email','phone','password'];
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {};
      fields.forEach(f => data[f] = form.elements[f].value.trim());
      const res = validateStudent(data);
      fields.forEach(f => {
        const el = form.elements[f];
        if (res[f]) {
          el.style.border = '2px solid green';
          // remove any error message
          let msg = el.nextElementSibling;
          if (msg && msg.classList.contains('error')) msg.textContent = '';
        } else {
          el.style.border = '2px solid red';
          let msg = el.nextElementSibling;
          if (msg && msg.classList.contains('error')) msg.textContent = 'Invalid ' + f;
        }
      });
    });
  });
} else {
  // Run sample when in Node
  validateSample();
}
