'use strict');
// Q8 - Retry mechanism for submitOrder

function submitOrder(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      Math.random() < 0.5 ? resolve('Order submitted') : reject(new Error('Transient failure'));
    }, 500);
  });
}

async function processOrder(maxAttempts=3){
  for (let attempt=1; attempt<=maxAttempts; attempt++){
    try{
      const res = await submitOrder();
      console.log(`Attempt ${attempt}: Success -`, res);
      return res;
    } catch (err) {
      console.warn(`Attempt ${attempt}: Failed -`, err.message);
      if (attempt === maxAttempts) {
        throw new Error('Order could not be processed');
      }
    }
  }
}

// Run and handle final failure
processOrder(3)
  .then(()=>console.log('Order processed successfully'))
  .catch(err=>console.error(err.message));
