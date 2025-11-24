const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, p) => {
    let discount = p.category === "electronics" ? 0.1 : p.category === "fashion" ? 0.05 : 0;
    return sum + (p.price - p.price * discount);
}, 0);
if (total > 50000) total -= total * 0.05;
console.log("Final Total:", total);