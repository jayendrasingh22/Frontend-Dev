'use strict';
// Q8 - Dynamic Object Updater
// user object and function to update it. If DOM exists, builds a form to edit fields.

const user = { name: 'John', email: 'john@mail.com', age: 21 };

function updateUser(updates = {}) {
  Object.keys(updates).forEach(k => {
    if (k in user) {
      user[k] = updates[k];
    } else {
      console.warn('Unknown property:', k);
    }
  });
  console.log('User object updated:', user);
  return user;
}

// Sample update via code
updateUser({ name: 'John Doe', age: 22 });

// If browser DOM is available, create a form to update user in real time
if (typeof document !== 'undefined') {
  window.addEventListener('load', () => {
    const container = document.getElementById('userUpdater') || document.body;
    const form = document.createElement('form');
    ['name','email','age'].forEach(key => {
      const label = document.createElement('label');
      label.textContent = key;
      const input = document.createElement('input');
      input.name = key;
      input.value = user[key];
      input.addEventListener('input', () => {
        // live update
        const val = key === 'age' ? Number(input.value) : input.value;
        updateUser({ [key]: val });
        // show updated below
        if (!document.getElementById('userDump')) {
          const pre = document.createElement('pre'); pre.id='userDump'; container.appendChild(pre);
        }
        document.getElementById('userDump').textContent = JSON.stringify(user, null, 2);
      });
      form.appendChild(label);
      form.appendChild(document.createElement('br'));
      form.appendChild(input);
      form.appendChild(document.createElement('br'));
    });
    container.appendChild(form);
    const pre = document.createElement('pre'); pre.id='userDump'; pre.textContent = JSON.stringify(user, null, 2);
    container.appendChild(pre);
  });
}
