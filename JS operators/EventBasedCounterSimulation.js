let count = 0;
function counter() {
    function increment() {
        count++;
        console.log(count);
    }
    function decrement() {
        count--;
        console.log(count);
    }
    return { increment, decrement };
}
let c = counter();
c.increment();
c.increment();
c.decrement();