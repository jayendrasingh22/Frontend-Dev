'use strict';
// Q3 - Library Management System (Classes + Objects)
// Book class with issue/return methods and ISBN search.

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Book [${this.isbn}] is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`Issued book: ${this.title} (${this.isbn})`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`Book [${this.isbn}] was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`Returned book: ${this.title} (${this.isbn})`);
    return true;
  }

  details() {
    return `${this.title} by ${this.author} [ISBN:${this.isbn}] - ${this.isIssued ? 'Issued' : 'Available'}`;
  }
}

// Sample library
const library = [
  new Book('The Alchemist', 'Paulo Coelho', 'ISBN001'),
  new Book('Clean Code', 'Robert C. Martin', 'ISBN002', true),
  new Book('You Don\'t Know JS', 'Kyle Simpson', 'ISBN003'),
  new Book('Eloquent JavaScript', 'Marijn Haverbeke', 'ISBN004')
];

console.log('\nAvailable books:');
library.filter(b => !b.isIssued).forEach(b => console.log(b.details()));

// Function to issue by ISBN
function issueByISBN(isbn) {
  const book = library.find(b => b.isbn === isbn);
  if (!book) {
    console.log('Book with ISBN', isbn, 'not found.');
    return false;
  }
  return book.issueBook();
}

// Example usage
issueByISBN('ISBN003'); // issue book 3
issueByISBN('ISBN002'); // already issued
console.log('\nLibrary status after operations:');
library.forEach(b => console.log(b.details()));
