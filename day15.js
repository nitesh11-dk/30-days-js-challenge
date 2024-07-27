

// Activity 1:

// Understanding Closures

// Task 1:

// Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.


function outer(){

     let a= 10 ;

      return  function inner(){
         console.log(a)
     }
}

// let output = outer();
// output() ;
// let output = outer()();  direct retrun function vhi call ho raha hai yaise

// Task 2:

// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generateUniqueId() {
  let lastId = 0;

  return function() {
    lastId++;
    return lastId;
  };
}

const generateId = generateUniqueId();

console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
console.log(generateId()); // Output: 3



// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

// Example usage:
const greetJohn = createGreeter('John');
const greetJane = createGreeter('Jane');

greetJohn(); // Logs: Hello, John!
greetJane(); // Logs: Hello, Jane!



// Activity 3: Closures in Loops

// Task 5:

// Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.


function createFunctionArray() {
    const functions = [];
    for (let i = 0; i < 10; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }
    return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); // Logs 0
functionArray[1](); // Logs 1
functionArray[2](); // Logs 2
// ... and so on




// Activity 4: Module Pattern

// Task 6:

// Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const itemManager = (function() {
    const items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items.slice();
        }
    };
})();

// Example usage:
itemManager.addItem('apple');
itemManager.addItem('banana');
console.log(itemManager.listItems()); // ["apple", "banana"]
itemManager.removeItem('apple');
console.log(itemManager.listItems()); // ["banana"]



// Activity 5: Memoization

// Task 7:

// Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Example usage:
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3, fetched from cache




// Task 8:

// Create a memoized version of a function that calculates the factorial of a number.


const memoizedFactorial = (function() {
    const cache = {};

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        if (cache[n]) {
            return cache[n];
        } else {
            const result = n * factorial(n - 1);
            cache[n] = result;
            return result;
        }
    }

    return factorial;
})();

// Example usage:
console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // 120, fetched from cache
console.log(memoizedFactorial(6)); // 720
