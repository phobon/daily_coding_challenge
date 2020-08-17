# General

- How would you visually hide an element in the UI so it’s still accessible for screen readers?
- How can we make our web applications more performant?

# Basic JavaScript

## Scope

- What is 'this' mean in javascript?
  - Current scope you're in which can change, but if there is no scope then it's the global context usually
  - It's the global context of everything that's available to access - all the objects and functions that are available to you that aren't locally defined

### Var
Var is hoisted to the top, let and const aren't

### Let
Let you can change the pointer

### Const
Const can't be pointed to a different bit of memory

## Stack, Queue

- What is a Stack? What is a Queue? How would you create those data structures in Javascript?
  - Stack is a list of objects that is last-in, first out. So you can push something onto a stack and pop things off the top
  - A queue is a first-in-first-out list of objects that you can enqueue and dequeue
  - You can create a stack using an array, array inherits `push` and `pop`
  - Queue, you can implement using an array, and use `push` and `shift` to dequeue

## Switch statements vs. if/else statements

## Loops & iteration
  - For-each
  - For-of
  - For-in

## Primitive vs. reference types
  - Strings
    - charAt()
    - slice()
    - includes()
    - match()
    - repeat()
    - replace()
    - startsWith()
    - toLowerCase()
    - toUpperCase()
    - substring()
    - split()
    - trim()
  - Numbers
- isNaN()
  - Undefined
  - Null
  - Arrays
- Spread operator (…)
- find()
- forEach()
- every()
- some()
- filter()
- includes()
- indexOf()
- join()
- map()
- pop()
- push()
- reduce()
- reverse()
- shift()
- unshift()
- slice()
- splice()
  - Objects

## The prototype chain & inheritance

- All objects inherit from their prototype - a baseline object
- When you create a new object from its prototype you can inherit its children, or override them

- entries()
- keys()
- Math
  - Modulus
  - floor()
  - ceil()
  - pow()
  - random()
  - min()
  - max()
  - sqrt()

## Event delegation / bubbling
- What is event delegation?
  - When an event is bubbled up from the calling context
  - Event listeners are really expensive, so you don't want to have events firing constantly
  - Better to have one event handler and have events bubble up than have 60+
  - Performance reasons

- event.target - the thing that got clicked
- event.currentTarget - the thing that fired the event - this is helpful with event delegation

```js
<section id="area">
  <button data-test="1">test 1</button>
  <button data-test="2">test 2</button>
  <button data-test="3">test 3</button>
  <button data-test="4">test 4</button>
</section>

const area = document.querySelector('#area');

area.addEventListener('click', event => {
  const { currentTarget } = event;

  const test = parseInt(currentTarget.dataset.test);

  // Do something with test which is a number
  // This means we can have one eventListener that handles all similar events
  
  // This stops the click from propagating - either up (bubbling) or down (capture)
  event.stopPropagation();
});
```

- bubbling goes backwards from the lowest element to the highest element (end > .. > window)
- capture goes the opposite way, so it fires from the highest element to the lowest (window > .. > end)
- capture down - bubble up

- Prevent default

# Intermediate / Advanced JavaScript

## Data structures

### Maps
```js
const person1 = {
  name: 'test',
  age: 200,
};

const myMap = new Map();
// .set()
// Keys can be any type
myMap.set('name', 'test'); // Key and value
myMap.set(100, 'This is a number');
myMap.set(person1, 'Really cool'); // Use a reference to the person1 object

const score = 100;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');

// .get();
myMap.get(person1); // Gets the value

// .size();
myMap.size(); // Similar ot length

// Iterating
// Maps have guaranteed order, so they can act as arrays as well as dictionaries
// Objects do not have guaranteed order
myMap.forEach(entry => console.log(entry)) // Will return the value for each entry IN ORDER
for (const entry of myMap) {
  const [key, value] = entry;
  console.log(entry) // [key, value] as an array
};
for (const [key, value] of myMap) {
};

// .has()
// .delete()
myMap.delete('name');

// Use a map if you need to maintain order of items
// No literal (new Map())
// new Map([['name', 'ben'], ['age': 49]])
// Can't store methods, only data
// JSON doesn't handle maps - convert it to an object
  // Object.fromEntries(myMap)
```

### Sets

```js
// Sets have guaranteed order, a value in a set my ONLY OCCUR ONCE
const mySet = new Set();

// .add()
mySet.add(1); // Set [1]
mySet.add(5); // Set [1, 5]
mySet.add(5); // Set [1, 5]
mySet.add('some text'); // Set [1, 5, 'some text']

// .clear()
// .delete()
// .has()
// .size()
```

### Symbols

```jsx
// New primitive type in ES6
// Every symbol value returned from Symbol() is unique
const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
// Symbol('foo') does not coerce the string 'foo' into a symbol, it creates a new symbol each time

Symbol('foo') === Symbol('foo') // false

// When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped symbol:
let sym = Symbol('foo')
let obj = {[sym]: 1}
obj[sym]             // 1
obj[Object(sym)]     // still 1
```

## Closures
- Ability for a child scope to access a parent scope even after the parent function has been terminated

```js
function outer() {
  const outerVar = 'Hey I am the outer Var!';
  return function inner() {
    const innerVar = 'Hey I am the inner Var!';
    console.log(innerVar);
    console.log(outerVar);
  }
} 

const inner = outer();
inner();

outer()();
```
- Put a function in a variable, and call it at a different time
- When a variable in a parent scope is available to a child scope, even with the parent function ends - it's called a closure

```jsx
function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  }
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('ben'));
console.log(sayHey('sar'));
```
  - Use to create some 'private variables'

```jsx
function createGame(gameName) {
  let score = 0;
  return function win() {
    score += 1;
    return `Your name ${gameName} score is ${score}`;    
  };
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
```

## setInterval()

## setTimeout()

## Recursion

## DOM manipulation

- What is the data structure of the DOM?
  - It's a tree
- How can you tell if an image element is loaded on a page?
  - Images have an onload callback that you can implement
- Why do we use alt tags for images?

## Regular expressions (regex)

## Immediately invoked function expressions (IIFE)

## Hoisting

## Functional programming

## Higher-order functions

## Immutability

## Pure functions

## First-class functions

## Debounce/throttle

## Asynchronous programming

## Promises

## Async/await

## Callback functions

## Call and Apply

- What are call() and apply()
  - Ways of executing a function with a different lexical scope and optional arguments
  - call() is a series of arguments, apply() is an array of items 

## Workers
- What is a worker? When would you use one?
  - A way to offload computationally expensive work to a different thread (JS is single-threaded, so it can block rendering, etc.)