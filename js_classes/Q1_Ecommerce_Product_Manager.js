'use strict';
// Q1 - E-Commerce Product Manager (Classes + Objects)
// Creates Product class, methods, creates products array and filters products with price > 1000.

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price; // number (₹)
    this.category = category;
  }

  // Apply a percentage discount (e.g., 10 -> 10%)
  applyDiscount(percent) {
    if (typeof percent !== 'number' || percent < 0) {
      throw new Error('Invalid discount percent');
    }
    this.price = +(this.price * (1 - percent / 100)).toFixed(2);
  }

  // Return formatted details
  details() {
    return `Product [#${this.id}] ${this.name} - ₹${this.price.toFixed(2)} (${this.category})`;
  }
}

// Create sample products
const products = [
  new Product(1, 'Wireless Headphones', 999.99, 'electronics'),
  new Product(2, 'Gaming Laptop', 89000, 'electronics'),
  new Product(3, 'Office Chair', 4500, 'furniture'),
  new Product(4, 'Coffee Mug', 299, 'kitchen')
];

// Apply a 10% discount to the coffee mug
products[3].applyDiscount(10);

// Display all products
console.log('\nAll products:');
products.forEach(p => console.log(p.details()));

// Display products with price > 1000
console.log('\nProducts with price > ₹1000:');
const premium = products.filter(p => p.price > 1000);
premium.forEach(p => console.log(p.details()));

