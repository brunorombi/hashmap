import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

// Overwriting items
test.set('ice cream', 'new value')
test.set('jacket', 'new value')
test.set('kite', 'new value')
test.set('lion', 'new value')

// Double capacity
test.set('moon', 'silver')

// Overwriting again
test.set('banana', 'new value')
test.set('carrot', 'new value')
test.set('dog', 'new value')
test.set('elephant', 'new value')


//Removing some items
test.remove('elephant');
test.remove('dog');
test.remove('carrot');


console.log(test.length())
console.log(test.capacity)
console.log(test.size)
console.log(test.entries());

