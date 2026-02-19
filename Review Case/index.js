function makeCounter(){
    let count = 0;

    function increment(){
        count++;
    }
    
    function decrement(){
        count--;
    }

    function getCount(){
        return count
    }

    return {increment, decrement, getCount};
}

const counter = makeCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
console.log(counter.count);