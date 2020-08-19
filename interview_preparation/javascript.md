# Basic JavaScript

## Scope

- What is 'this' mean in javascript?
  - Current scope you're in which can change, but if there is no scope then it's the global context usually
  - It's the global context of everything that's available to access - all the objects and functions that are available to you that aren't locally defined

### Var
  - Var is hoisted to the top, let and const aren't
  - Var is scoped to the function, not the block
  - So if a var is declared in a function, it's scoped to that function, rather than the block it's in

### Let
  - Let you can change the pointer
  - Let is scoped to the current block
  - So if a let is declared in a function, it's scoped to the current block

### Const
  - Const can't be pointed to a different bit of memory
  - Const is scoped to the current block

## Stack, Queue

- What is a Stack?
  - Stack is a list of objects that is last-in, first out. So you can push something onto a stack and pop things off the top
- What is a Queue?
  - A queue is a first-in-first-out list of objects that you can enqueue and dequeue
- How would you create those data structures in Javascript?
  - You can create a stack using an array, array inherits `push` and `pop`
  - Queue, you can implement using an array, and use `push` and `shift` to dequeue

## Switch statements vs. if/else statements

## Loops & iteration
  - For-each
    - Iterates over every item in an array
    - array.forEach((item, index, array) => {}) is the usual way to do it, can grab the index and array from the callback
  - For-of
    - Iterates over each value in an array, useful when you don't care about the index
    - Can create const temporary variables in the block
    - for (const i of items) { ... }
  - For-in
    - Iterates over each index in an array, useful when you do care about the index
    - Can create const temporary variables in the block
    - for (const i in items) { ... }
    - `for...in` enumerates properties in the prototype chain
  - For-of and For-in are highly performant in some browsers

## Primitive vs. Reference types

### Primitive Types
  - A primitive is data that is not an object and has no methods
  - There are 6 primitive types in javascript: string, number, bigint, boolean, undefined and symbol (ES6)
  - Primitive types `contain` the value
  - When assigned, we `copy` the value to the new variable

### Reference Types
  - 3 data types that are passed by reference: Array, Function and Object
  - Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object's location in memory
  - The variables don't actually contain the value
  - == and === compare the reference, if the variables contain a reference to the seame item, the comparison will result in `true`
  - If they're distinct objects, even if they contain identical properties, the comparison will result in `false`
  - Can use `JSON.stringify()` to compare objects as strings (value)
  - Can recursively loop through the object to check equality of values

### Strings
- charAt()
  - Gets the character at a particular index
```js
const s = 'this is a string';
const p = s.charAt(3); // s
```

- slice()
  - Returns a new string between the provided character indexes without modifying the original string
```js
const s = 'this is a string';
const p = s.slice(0, 4); // this 
```

- `includes()`
  - Returns true if the substring is found in the original string

- `match()`
  - Retrives the result of matching a string against a regular expression

- `repeat()`
  - Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

- `replace()`
  - Replaces instances of a substring in the original string

- `startsWith()`
  - Returns true if the string starts with the provided substring

- `toLowerCase()`
  - Converts the string value to lower case

- `toUpperCase()`
  - Converts the string value to upper case

- `substring()`
  - Returns the part of the strin between the start and end indexes

- `split()`
  - Splits a string into an array, delimited by the provided substring

```js
const s = 'abcd';
const p = s.split(''); // [a, b, c, d];

const s2 = 'this is a string';
const p2 = s.split(' '); // [this, is, a, string];
```

- `trim()`
  - Trims whitespace from a string if available

### Numbers
- isNaN()
  - Checks whether a number is NaN (not a number), this can often happen if you try to perform operations on a null, or undefined type

```js
let num;
let num2 = 5;

const p = num - num2;

isNaN(p); // true
```

### Undefined
- Undefined is when an object is not assigned, or hasn't been pointed to a particular location in memory
- Can be null checked with coersion
  - `arr == null`

```js
let arr;
let num;

typeof arr === 'undefined'
```

### Null
- Null is specifically assigned to a variable, it is different to undefined
- Can be checked in several ways

```js
let arr = null;

if (!arr) { ... }
if (arr == null) { ... }
if (arr === null) { ... }
```

### Arrays
- Spread operator (…)
  - Spreads items from other arrays, or objects into another object or array
  - Useful to create a new object from a reference type
```js
const a = [1, 2, 3];
const copyOfA = [...a];

const b = [4, 5, ...a];
```

- find()
  - Returns the value of the first element in the provided array that satisfies the provided testing function
```js
const a = [1, 2, 3, 4, 5];
const found = a.find(o => o > 3);

console.log(found); // 4;
```

- forEach()
  - Iterates over each item of an array, can get the current index and a reference to the original array
```js
const a = [1, 2, 3, 4, 5];

let sum = 0;
a.forEach((item, index, array) => sum += item);
```

- every()
  - Tests whether all elements in the array pass the test implemented by the provided function, returns a boolean
```js
const a = [1, 2, 3, 4, 5];

a.every(i => i < 6); // true;
```

- some()
  - Tests whether at least one element in the array pass the test implemented by the provided function, returns a boolean
```js
const a = [1, 2, 3, 4, 5];

a.some(i => i < 2); // true;
a.some(i => i > 5); // false;
```

- filter()
  - Returns a new array with items that satisfy the condition in the provided function
```js
const a = [1, 2, 'a', 'b', 3, 'c'];

a.filter(i => typeof i === 'number'); // [1, 2, 3];
```

- includes()
  - Determines whether an array includes a certain value among its entries, returning true or false as appropriate
```js
const a = [1, 2, 'a', 'b', 3, 'c'];

a.includes(2); // true;
```

- indexOf()
  - Returns the value of the item at the provided index
```js
const a = [1, 2, 'a', 'b', 3, 'c'];

a.indexOf(2); // 'a';
```

- join()
  - Constructs a string from the values in an array with a provided delimiter
```js
const a = [1, 2, 'a', 'b', 3, 'c'];

a.join('-'); // '1-2-a-b-3-c';
```

- map()
  - Returns a new array with values mutated by the provided function
```js
const a = [1, 2, 'a', 'b', 3, 'c'];

a.map(i => `${i}_abc`); // ['1_abc', '2_abc', 'a_abc', 'b_abc', '3_abc', 'c_abc']
```

- pop()
  - Returns the last pushed item from the array and removes it from the original array
```js
const a = [];
a.push(1);
a.push(2);
a.push(3);

a.pop(); // 3, a === [1, 2]
```

- push()
  - Pushes an item onto the end of the array
```js
const a = [];
a.push(1);
a.push(2);
a.push(3);

// a === [1, 2, 3]
```

- reduce()
  - Reduces the values in an array to a single value with a provided function whose type is specified by the 2nd argument
```js
const a = [1, 2, 3];
a.reduce((prev, current) => prev + current, 0); // 6

const b = ['this', 'is', 'a', 'string'];
b.reduce((prev, current) => `${prev} ${current}`, ''); // this is a string

// a === [1, 2, 3]
```

- reverse()
  - Reverses an array in place
```js
const a = [1, 2, 3];
a.reverse(); // [3, 2, 1]
```

- shift()
  - Returns the first item of an array (the opposite of pop)
  
  - Useful in queue-like operations
```js
const a = [15, , 2, 3];
a.shift(); // 5

```

- unshift()
  - Adds one or more items into the front of the array (the opposite of push)
  - Useful in queue-like operations
```js
const a = [1, 2, 3];
a.unshift(5); // [5, 1, 2, 3]
```

- slice()
  - Returns a shallow copy of a portion of an array into a new array from start to end (optional) indexes
  - Original aray is not modified
```js
const a = [5, 4, 1, 2, 3];
a.slice(2); // [1, 2, 3];
a.slice(2, 3); // [1];
```

- splice()
  - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
```js
const a = [1, 2, 3];
a.splice(1, 0, 5); // [1, 5, 2, 3];
a.splice(3, 1, 7); // [1, 5, 2, 7];
```

### Objects

## The prototype chain & inheritance

- All objects inherit from their prototype - a baseline object
- When you create a new object from its prototype you can inherit its children, or override them

### Can you explain how inheritance works in javascript?
- Javascript has prototypal inheritance
- When it comes to inheritance, javascript only has one construct: objects
- So every object when it's instantiated, inherits all the properties and methods from its prototype
- Every time you create a string, it inherits all of the methods from the String prototype
- The String prototype inherits all the properties and methods from its prototype

### Any implications of this? (i.e. adding methods to entire class at runtime)
- Adding methods or properties to a prototype can be pretty dangerous
- Doing this at runtime can potentially overwrite built-in methods which can lead to cascading issues
- Extending the native prototypes (say Object) is generally caleld monkey patching and breaks encapsulation
- There is no good reason for cluttering built-in types with additional non-standard functionality
- The only good reason for extending a built-in prototype is to backport the features of newer javascript engines, like `Array.forEach`

### What is the prototype chain?
- Almost all objects inherit from `Object` which sits on the top of a prototype chain
- Each object has a private property which holds a link to another object called its `prototype`
- That prototype has a prototype of its own
- ... and so on until an object is reached with `null` as its prototype
- `null` has no prototype, so it's the final link in the `prototype chain`
- The prototype chain is the levels of inheritance that a particular instance has

## Difference between Prototypal and Class inheritance

### Class Inheritance
- A class is like a blueprint — a description of the object to be created
- Classes inherit from classes and create subclass relationships: hierarchical class taxonomies
- Usually instantiated via constructor functions with the `new` keyword
- Javascript's class inheritance uses the prototype chain to write the child `Constructor.prototype` to the parent `Constructor.prototype` for delegation
- Usually `super()` is also called
- Form `single-ancestor parent/child hierarchies`
- `Create the tightest coupling available in OO design`

### Prototypal Inheritance
- `A prototype is a working object instance`. Objects inherit directly from other objects

### Why does this matter?
- Class inheritance creates parent/child object taxonomies as a side-effect
- The tight coupling problem
- The fragile base class problem
- Inflexible hierarchy problem (eventually all evolving hierarchies are wrong for new users)
- The duplication by necessity problem (due to inflexible hierarchies, new use cases are often shoe-horned in by duplicating, rather than adapting existing code)
- The gorilla/banana problem (what you wanted was a banana, but what you got was a gorilla holding the banana, and the entire jungle)

### Can use Object Composition over inheritance
- Compose an object with the properties that you need/want rather than inherit the whole thing

## entries()
  - Returns an array of a given object's own enumerable string property [key, value] pairs, in the same order as that provided by a `for...in` loop
  - `for...in` enumerates properties in the prototype chain
```js
const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(key, value); // a, 'somestring', b, 42
}
```

- keys()
  - Returns an array of a given object's keys
```js
const object1 = {
  a: 'somestring',
  b: 42,
};

for (const k of Object.keys(object1)) {
  console.log(k); // a, b
}
```

## Math
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

## Concurrency Model and the Event Loop

- Event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks
- Different from models in other languages like C and Java

### Stack

- Function calls form a stack of `frames`

### Heap

- Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory

### Queue

- Runtime uses a message queue
- List of messages to be processed
- Each message has an associated function which gets called in order to handle a message
- At some point in the `event loop`, the runtime starts handling the messages on the queue starting with the oldest one
- As usual, the function is called, creating a frame on the `Stack`
- Keeps processing until the stack is empty

### Event Loop

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}

// queue.waitForMessage() waits synchronously for a message to arrive (if one is not already available and awiting to be handled)
```

```js
setTimeout(() => {}, 0);

// 0 here doesn't mean execute immediately, it means there is a 0 millisecond delay before the message is pushed to the queue
// The queue still needs to process everything before it before getting to this setTimeout call
```

- Each message is `processed completely` before any other message is processed
- The event loop model means that it is never blocking, messages can be processed while still responding to other things like user input

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
- The ability for a child function or scope to access a parent function or scope even after it has been executed or `closed over`
- Data privacy is a common use for closures, it can help program to an interface, rather than an implementation
- Can be used to create stateful funcitons whose return values may be influenced by their internal state
- In functional programming they're used for partial application and currying
  - Partial application is the process of applying a function to `some of its arguments`, the partially applied function gets returned for later use
  - It `fixes` one or more arguments inside the returned function, and the returned function takes the remaining parameters as arguments

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

- A way to execute a function after set intervals
- Will continue to keep calling the function until `clearInterval()` is called or the window is closed
- Returns an id that can be used with `clearInterval()`
- Javascript is single-threaded

```js
const i = setInterval(() => {
  // do something
}, 5000);

clearInterval(i);
```

## setTimeout()

- A way to execute a function after a set period of time
- Will only execute once
- Can be cleared before executing with `clearTimeout()`
- Returns an id that can be used with `clearTimeout()`
- Javascript is single-threaded
- Useful for debouncing inputs

```js
const i = setTimeout(() => {
  // do something
}, 5000);

clearTimeout(i);
```

## Recursion

- A repeated application of a recursive function
- Usually a way to process data structures with a function that calls itself
```js
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const t = new TreeNode(0, new TreeNode(1, new TreeNode(2), new TreeNode(3)), new TreeNode(4, new TreeNode(5));

// Sum the values of the tree
const processTree = (node) => {
  const { value, left, right } = node;

  let sum = value;

  if (left) {
    sum += processTree(left);
  }

  if (right) {
    sum += processTree(right);
  }

  return sum;
}
```

## DOM manipulation

- What is the data structure of the DOM?
  - It's a tree
- How can you tell if an image element is loaded on a page?
  - Images have an onload callback that you can implement
- Why do we use alt tags for images?
  - To aid screen readers

```jsx
<div class='myclass'>
  <button class='myclass__button'>Button</button>
  <ul class='myclass__list'></ul>
</div>

const btn = document.querySelector('.myclass__button');
const list = document.querySelector('.myclass__list');
btn.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    list.insertAdjacentHTML('afterend', `<li>${i}</li>`);
  }
});
```

## Regular expressions (regex)

- Used to match character combinations in strings
- Regular experessions are also objects

```js
const re = /ab+c/; // regular expression syntax

const re2 = new RegExp('ab+c');
```

- Many standard functions on objects take regex as arguments
  - `exec()`
  - `test()`
  - `match()`
  - `matchAll()`
  - `search()`
  - `replace()`
  - `replaceAll()`
  - `split()`

```js
function escapeRegExp(s) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
```

- `/g` performs a global search, not just complete after the first match

## Immediately invoked function expressions (IIFE)

- A function that runs as soon as it is defined

```js
(function() {
  // Do something
})();
```

- A design pattern which is also known as `self-executing anonymous function` and contains two major parts:
  - The first is the anonymous function with lexical scope enclosed with the `Grouping Operator ()`. This prevents accessing variables within the IIFE idiom as well as polluting the global scope
  - The second part creates the IIFE `()` through which the javascript engine will directly interpret the function

```js
(function() {
  var aName = 'Barry';
})();

// Variable aName is not accessible from the outside scope
console.log(aName); // Uncaught ReferenceError: aName is not defined
```

## Hoisting

- Hoisting is where variable and function `declarations` are allocated into memory before any code is executed

```js
function catName(name) {
  // Do something
}

catName('Tiger');

// This will also work because of hoisting
dogName('Chloe');

function dogName(name) {
  // Do something
}
```
- `Initializations` are not hoisted, only declarations

```js
console.log(num) // undefined
var num; // declaration
num = 6; // initialization

// Similarly
console.log(num2) // undefined
var num2 = 6; // declaration and initialization
```


## Functional programming

## Higher-order functions

- One that either has a function as a parameter, or returns a function
- Classic example are built-in functions that are used every day to manipulate objects and data structures
- Do some kind of work such as iteration, or transformation
- Often supplied with anonymous functions as callback arguments

```jsx
function applicator(fn, val) {
  return function() {
    fn(val);
  }
}

function speak(s) {
  console.log(s);
}

var sayHello = applicator(speak, 'Hello');
sayHello(); // 'Hello'
```

## Immutability

- `const` is not immutability
- `Immutable data cannot change its structure or the data in it`
- Objects and arrays allow mutation
- We can create immutability in javascript using `pure functions`

### In React/Redux

- State and props are immutable
- Props cannot be changed
- State changes require use of a pure function to trigger
- Reducers are pure functions

## Pure Functions

- Given the same input, will always return the same output
- Produces no side effects

- The value it returns is dependent on the input passed. The returned value will not change as long as the inputs do not change
- It does not change things outside of its scope

```js
const updateLocation = (data, newLocation) => {
  return {
    ...data,
    location: newLocation,
  };
};
```

- Functions that don't affect anything in the outside scope are `pure`
- Function must only take primitives as parameters and not use any variables in its surrounding scope
- All vars created inside are garbage-collected as soon as the function is closed over
- If a reference type is mutated in a function, it is no longer pure

```js
// Impure function
function changeAgeImpure(person) {
  person.age = 25;
  return person;
}

var alex = {
  name: 'Alex',
  age: 30,
};

var changedAlex = changeAgeImpure(alex);
console.log(alex); // { name: 'Alex', age: 25 };
console.log(changedAlex); // { name: 'Alex', age: 25 };
```

```js
// Pure function
function changeAgePure(person) {
  var newPerson = {...person};
  newPerson.age = 25;
  return newPerson;
}

var alex = {
  name: 'Alex',
  age: 30,
};

var changedAlex = changeAgePure(alex);
console.log(alex); // { name: 'Alex', age: 30 };
console.log(changedAlex); // { name: 'Alex', age: 25 };
```

```js
function changeAgeAndReference(person) {
  // Mutates the original object reference
  person.age = 25;

  // Object reference is different now, so essentially a new pointer
  person = {
    name: 'John',
    age: 50
  };
  
  // Return the new object reference
  return person;
}
var personObj1 = {
  name: 'Alex',
  age: 30
};
var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }
```

## Function Composition

- The process of combining two or more functions to produce a new function
- Composing functions together is like snapping together a series of pipes for our data to flow through
- It's like a monad

## First-class functions

- A programming language is said to have first-class functions when functions in that language are treated like any other variable
- An object that supports all of the operations generally allowed to other objects. They can:
  - Be stored in a variable
  - Be passed as arguments to functions
  - Be returned by functions
  - Be stored in some data structure
  - Hold their own properties and methods

## Debounce/throttle

- Allow a function to be delayed for a certain amount of time after an event occurs
- Usually used with an input when we want something to happen every time a key is pressed - search, for example
- With search, we don't want to fire off an API call every time a key is pressed, we want to wait until the user has completed input before firing off an API call
- Debounce just means a single call will occur after a certain amount of time
- Throttle means we just call something once, regardless of how much input there is, if there's a function to call, it's only called once


```jsx
// What we want to do here is to listen for input of any kind
// When input comes in for the first time, use a setTimeout for x ms to fire off some function
// When more input comes in, we need to clear that setTimeout so it doesn't fire
// Then start another setTimeout to fire off some function

function debounce(fn, timeout = 2000) {
  let t;
  return function() {
    // If we have a timeout set here, clear it first
    if (t) {
      // To implement throttle, just return;

      clearTimeout(t);
      // Set this to null, so this won't get hit again until a timeout is set
      t = null;
    }

    t = setTimeout(fn, timeout);
  }
}
```

## Asynchronous programming

- Javascript is single-threaded, so most functions are executed in sequence
- There are ways to handle multi-threaded, or asynchronous operations via Promises and async/await

## Promises

- A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- A proxy for a value not necessarily known when the promise is created
- Can associate handlers with an asynchronous action's eventual success value or failure reason
- Has three states
  - `pending`: initial state, neither fulfilled nor rejected
  - `fulfilled`: meaning the operation completed successfully
  - `rejected`: meaning the operation failed
- Is `thenable`

```jsx
const p = new Promise((resolve, reject) => {
  // If something fails, then call reject here, or if an error fires, it will be thrown
  reject('Reject message')

  // Do something
  resolve('Optional return value');
});

p.then(val => {
  // dosomething
}).catch(e => {
  // On error
})
```

- There's the ability to execute a collection of promises, only returning when all of them have resolved. This is done with `Promise.all([])`

```jsx
const fetchAndDecodeJson = async (url) {
  const r = await fetch(url);
  const content = await r.json();
  return content;
}

const displayContent = async () => {
  const coffee = fetchAndDecodeJson('coffee.json'); 
  const tea = fetchAndDecodeJson('tea.json'); 
  const description = fetchAndDecodeJson('description.json'); 

  const values = await Promise.all([coffee, tea, description]);
  ...
}
```

## Async/await

- A way to "flatten out" execution of asynchronous operations and promises
- Making a function `async` will turn it into an async function that expects some invocation of `await`, if it doesn't have an `await` in it, it will be executed synchronously
- `await`ed functions must return a Promise

```jsx
const firstFunction = () => {
  return new Promise((resolve, reject) => {
    // If something fails, then call reject here, or if an error fires, it will be thrown
    reject('Reject message')

    // Do something
    resolve('Optional return value');
  });
};

const someFunction = async () => {
  const result = await firstFunction();
}

const hello = async () => {
  return greeting = await Promise.resolve('Hello');
}

hell().then(doSomething)
```

## Callback functions

- Javascript runs code sequentially in top-down order
- Some cases that code runs after something else happens and also not sequentially
- Callbacks make sure that a function is not going to be run before a task is completed but will run right after the task is completed

```js
const message = function() {
  console.log('Show this message after 3 seconds');
}

setTimeout(message, 3000);

// With an anonymous function
setTimeout(() => {
  console.log('This is a different message to show after 5 seconds');
}, 5000);
```

## Call, Apply, Bind

- What are call() and apply()
  - Ways of executing a function with a different lexical scope and optional arguments
  - call() is a series of arguments, apply() is an array of items 

### Call
```jsx
// Implement Function.prototype.bind()

// If a function is invoked later, it returns a function
Function.prototype.bind = function(context, ...arguments) {
  const fn = this;  
  return function() {
    fn.call(context, [...arguments]);
  }
}

const foo = function() {
  console.log(this.bar);
}

let baz = foo.bind({ bar: 'Hello' });
baz(); // Hello
```

## Apply

```jsx
// Create a function to turn any function into a promisified function.
// Any function to be promisified will always have a callback as the last argument
// The callback will always have this signature:
//    function(result) {}

/*
  const exampleFn = function(x, y, callback) {};
  const promisedFn = promisify(exampleFn);

  promisedFn().then(...).then(...);
*/

function promisify(fn) {
  // We want to return a function that can be called (promisedFn())
  return function(...args) {
      // We want to make this then-able and chainable (promisedFn().then())
      return new Promise(function (resolve, reject) {
          // The callback will always have this signature, so just resolve it in here
          function cb(result) {
              resolve(result);
          }

          // Call the passed in function with all of the arguments and the callback appended which will resolve straight away
          fn.apply(this, args.concat(cb));
      });
  }
}
```

## Workers
- What is a worker? When would you use one?
  - A way to offload computationally expensive work to a different thread (JS is single-threaded, so it can block rendering, etc.)