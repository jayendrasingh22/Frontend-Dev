'use strict');
// Q6 - Fetch products from Fake Store API using fetch (works in browser or Node with fetch available)
// If running in Node <18, ensure global fetch exists (Node 18+ has fetch).

async function fetchProducts(){
  try{
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Network response not ok');
    const products = await res.json();
    products.forEach(p=>{
      console.log('Product:', p.title);
      console.log('Price: $' + p.price);
      console.log('Image:', p.image);
      console.log('---');
    });
  } catch (err){
    console.error('Failed to load products. Please try again.', err.message);
  }
}

fetchProducts();

/* Bonus: In a browser, you can create cards dynamically with DOM methods. */
