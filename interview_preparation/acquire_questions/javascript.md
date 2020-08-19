# Javascript

## Basics

Are you used to ES5 or ES6?
- I'd mostly use ES6 where possible, a lot of libraries are written to target previous specs, so mostly I'd write JS in ES6, and then transpile it for older browser support. I've done quite a bit in typescript, which is a superset of ES6, so I'm pretty comfortable with transpiling for the most part

What are some major differences between C# and javascript? What's similar?
- C# is a statically-typed language, javascript is a dynamically-typed
- Both are garbage-collected
- javascript has prototypal inheritance, C# has traditional inheritance

What's the difference between =, == and ===?
- = is used for assignment, so assigning a variable a value or object
- == is coerced equality, so javascript will try to coerce the type of value to compare, for example if you did `'25' == 25` it would return true because it would coerce the number 25 to a string
- === is strict equality, so javascript will not try to coerce the type of value to compare, so `'25' === 25` would return false

Good/bad points of each?
- Doing a null/undefined check on something is useful with == (x == null)
- Usually I'd use === for all types of equality because coersion is generally not what you want

How can you check the type of a variable? (typeof, instanceof)
- In javascript, you can do `typeof variable` which will return a string descriptor of the primitive type
- So if you did `typeof { a: 25 }` it would return `Object`

What is the threading model in javascript?
- Javascript is single-threaded, so everything runs synchronously via the event loop

What DOES run asynchronously?
- Callbacks are a type of asynchronous code
- `Promises` are asynchronous
- `async/await` is also run asynchronously

What is a closure?
- The ability for a child function or scope to access a parent function or scope even after it has been executed or `closed over`
- Data privacy is a common use for closures, it can help program to an interface, rather than an implementation
- Can be used to create stateful funcitons whose return values may be influenced by their internal state
- In functional programming they're used for partial application and currying
  - Partial application is the process of applying a function to `some of its arguments`, the partially applied function gets returned for later use
  - It `fixes` one or more arguments inside the returned function, and the returned function takes the remaining parameters as arguments

```js
// Take a simple function that adds two numbers together
const add = (a, b) => a + b;

// Now if you wanted to write a function that adds 10 to any number
const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};

const add10 = partialApply(add, 10);
add10(5);
```

## Patterns

What is a Immediately-Invoked Function Expression, or IIFE
- It's a function that is not hoisted, but executed as soon as it's defined

```js
(function() {
  // do something
})()
```


## OO

Can you explain how inheritance works in javascript?
- Javascript has prototypal inheritance
- When it comes to inheritance, javascript only has one construct: objects
- So every object when it's instantiated, inherits all the properties and methods from its prototype
- Every time you create a string, it inherits all of the methods from the String prototype
- The String prototype inherits all the properties and methods from its prototype

Any implications of this? (i.e. adding methods to entire class at runtime)
- Adding methods or properties to a prototype can be pretty dangerous
- Doing this at runtime can potentially overwrite built-in methods which can lead to cascading issues
- Extending the native prototypes (say Object) is generally caleld monkey patching and breaks encapsulation
- There is no good reason for cluttering built-in types with additional non-standard functionality
- The only good reason for extending a built-in prototype is to backport the features of newer javascript engines, like `Array.forEach`

What is the prototype chain?
- Almost all objects inherit from `Object` which sits on the top of a prototype chain
- Each object has a private property which holds a link to another object called its `prototype`
- That prototype has a prototype of its own
- ... and so on until an object is reached with `null` as its prototype
- `null` has no prototype, so it's the final link in the `prototype chain`
- The prototype chain is the levels of inheritance that a particular instance has

## Framework

What are global variables? Would you recommend using them?
- Global variables are those whose lexical scope is the Window object
- Can be created by declaring a `var` outside of a function
- Generally shouldn't use the global scope

Have you used any modern modular design patterns? (Module systems) AMD, SystemJS etc

## Script loaders?

What javascript libraries have you used/do you recommend?

## Typescript? Advantages? Disadvantages?

## Infrastructure
- Have you had any experience with NPM or Node? What are they? Dev tooling or server?
- What third party libraries have you used? Do you recommend any? (Jquery, angular, lowdash)

## Questions
- Do you have any questions for me about our code base and practices?