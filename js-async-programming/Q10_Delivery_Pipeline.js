'use strict');
// Q10 - Async Delivery Pipeline with random delays and failures
function randomDelay(min=1000,max=2000){ return Math.floor(Math.random()*(max-min+1))+min; }
function maybeFail(prob=0.15){ return Math.random() < prob; }

function takeOrder(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> maybeFail() ? reject(new Error('Failed to take order')) : (console.log('Step 1: Order taken'), resolve('order')), randomDelay());
  });
}
function prepare(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> maybeFail() ? reject(new Error('Kitchen issue')) : (console.log('Step 2: Food prepared'), resolve('prepared')), randomDelay());
  });
}
function pack(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> maybeFail() ? reject(new Error('Packing error')) : (console.log('Step 3: Package ready'), resolve('packed')), randomDelay());
  });
}
function dispatch(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> maybeFail() ? reject(new Error('Dispatch failure')) : (console.log('Step 4: Out for delivery'), resolve('dispatched')), randomDelay());
  });
}
function deliver(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> maybeFail(0.1) ? reject(new Error('Delivery failed')) : (console.log('Delivery completed!'), resolve('delivered')), randomDelay());
  });
}

async function runPipeline(){
  console.log('\nStart Pipeline');
  try{
    await takeOrder();
    await prepare();
    await pack();
    await dispatch();
    await deliver();
    console.log('Pipeline finished successfully!');
  } catch (err){
    console.error('Pipeline failed!', err.message);
  }
}

runPipeline();
