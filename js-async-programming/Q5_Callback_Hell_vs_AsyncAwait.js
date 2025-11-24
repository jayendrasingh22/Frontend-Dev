'use strict';
// Q5 - Callback Hell then async/await

// Helper to simulate async stage
function stage(name, delay=1000){
  return function(cb){
    setTimeout(()=>{
      console.log(name);
      cb();
    }, delay);
  };
}

// Nested callbacks (callback hell)
function runPipelineCallbacks(){
  console.log('\nCallback-hell pipeline start');
  stage('design',1000)(() => {
    stage('build',1000)(() => {
      stage('test',1000)(() => {
        stage('deploy',1000)(() => {
          stage('celebrate',1000)(() => {
            console.log('Pipeline complete (callbacks)');
          });
        });
      });
    });
  });
}

// Cleaner version using Promises + async/await
function stagePromise(name, delay=1000){
  return new Promise((resolve) => setTimeout(()=>{ console.log(name); resolve(name); }, delay));
}

async function runPipelineAsync(){
  console.log('\nAsync/Await pipeline start');
  try{
    await stagePromise('design');
    await stagePromise('build');
    await stagePromise('test');
    await stagePromise('deploy');
    await stagePromise('celebrate');
    console.log('Pipeline complete (async/await)');
  } catch (err) {
    console.error('Pipeline failed:', err.message);
  }
}

/*
Why async/await improves readability:
- It linearizes asynchronous steps to look like synchronous code.
- Removes deeply nested callbacks, making error handling simpler (try/catch).
*/

runPipelineCallbacks();
runPipelineAsync();
