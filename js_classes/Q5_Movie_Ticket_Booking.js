'use strict';
// Q5 - Movie Ticket Booking (Objects + RegExp)
// Validates name (alphabets), email and seats (1-10) and stores booking object.

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bookTicket(name, email, seats) {
  const errors = [];
  if (!nameRegex.test(name)) errors.push('Invalid name (alphabets only).');
  if (!emailRegex.test(email)) errors.push('Invalid email format.');
  if (!Number.isInteger(seats) || seats < 1 || seats > 10) errors.push('Seats must be 1 to 10.');

  if (errors.length) {
    console.error('Booking failed. Errors:', errors);
    return null;
  }

  const booking = { name: name.trim(), email: email.trim(), seats };
  console.log('Booking successful:', booking);
  // In real app, save to DB / localStorage. Here we return the object.
  return booking;
}

// Sample successful booking
bookTicket('Mina Sharma', 'mina@example.com', 4);
// Sample failing booking
bookTicket('Mina123', 'mina_at_example', 12);
