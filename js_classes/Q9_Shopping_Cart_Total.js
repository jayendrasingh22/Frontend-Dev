'use strict';
// Q9 - Shopping Cart Total (Classes + RegExp for Coupon)
// Cart class with addItem, getTotal and coupon validation like SAVE20 or DISC10.

class Cart {
  constructor() {
    this.items = []; // { name, price, qty }
  }

  addItem(name, price, qty = 1) {
    if (!name || typeof price !== 'number' || !Number.isFinite(price) || qty < 1) {
      throw new Error('Invalid item');
    }
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((acc, it) => acc + it.price * it.qty, 0);
  }

  applyCoupon(code) {
    // coupon format SAVE20 or DISC10 (letters + digits)
    const m = /^([A-Za-z]+)(\d{1,2})$/.exec(code);
    if (!m) {
      console.error('Invalid coupon format:', code);
      return { valid: false, total: this.getTotal() };
    }
    const percent = Number(m[2]);
    if (percent <= 0 || percent > 100) {
      console.error('Invalid coupon percent:', percent);
      return { valid: false, total: this.getTotal() };
    }
    const total = this.getTotal();
    const discounted = +(total * (1 - percent / 100)).toFixed(2);
    console.log(`Coupon ${code} applied: ${percent}% off. Total was ₹${total.toFixed(2)}, now ₹${discounted}`);
    return { valid: true, total: discounted };
  }
}

// Sample usage
const cart = new Cart();
cart.addItem('Laptop', 45000, 1);
cart.addItem('Shoes', 2500, 2);
cart.addItem('Book', 600, 1);
console.log('\nCart total before coupon: ₹' + cart.getTotal().toFixed(2));
cart.applyCoupon('SAVE10'); // 10% off
cart.applyCoupon('DISC20'); // 20% off
cart.applyCoupon('BADCODE'); // invalid
