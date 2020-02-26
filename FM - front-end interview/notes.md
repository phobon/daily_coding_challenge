# Interviewing for Frontend Engineers

- What do you like about your current job?
  - Learning environment?
  - People are friendly?
  - Very rewarding
- What sort of things are you looking for in your next role?
  - Apply with intention - I want to work at this company and here's why
- Which companies have appealing engineering cultures? What makes it appealing?

## About your Resume
- One page
- Skills
- Experience
- Technology familiarity
- Education
- Accomplishments

## Phone Call
- What do you do currently?
- What are some projects you've worked on recently?
  - What they were
  - Challenges you came across
  - How you overcame them
- What are you looking for in your next role?
  - I want to have a big impact with my work
  - Solve challenging problems
- Why do you want to work for _____?
  - Understand the company you're applying for
- What is your availability for the next steps?
  - Have your calendar open
  - Be prepared here

## Preparing Interview Questions
- How many steps are in the interview process? How long does it generally take?
- How big is your engineering team?
- Which team would I be interviewing for?
- What is the culture like?
- Who are your competitors?
- What sort of projects would I work on?

## Prescreen Javascript Questions
- What is the difference between const, let and var?
  - Var is hoisted to the top, let and const aren't
  - Const can't be pointed to a different bit of memory
  - Let you can change the pointer
- Explain prototypical inheritance
  - All objects inherit from their prototype - a baseline object
  - When you create a new object from its prototype you can inherit its children, or override them
- What is 'this' mean in javascript?
  - Current scope you're in which can change, but if there is no scope then it's the global context usually
  - It's the global context of everything that's available to access - all the objects and functions that are available to you that aren't locally defined
- What is the data structure of the DOM?
  - It's a tree
- What is a Stack? What is a Queue? How would you create those data structures in Javascript?
  - Stack is a list of objects that is last-in, first out. So you can push something onto a stack and pop things off the top
  - A queue is a first-in-first-out list of objects that you can enqueue and dequeue
  - You can create a stack using an array, array inherits `push` and `pop`
  - Queue, you can implement using an array, and use `push` and `shift` to dequeue
- How can you tell if an image element is loaded on a page?
  - Images have an unload callback that you can implement
- What are call() and apply()
  - Ways of executing a function with a different lexical scope and optional arguments
  - call() is a series of arguments, apply() is an array of items 
- What is event delegation?
  - When an event is bubbled up from the calling context
  - Event listeners are really expensive, so you don't want to have events firing constantly
  - Better to have one event handler and have events bubble up than have 60+
  - Performance reasons
- What is a worker? When would you use one?
  - A way to offload computationally expensive work to a different thread (JS is single-threaded, so it can block rendering, etc.)

## Code Test Overview
- Make your code as readable as possible
  - Comment your code
  - Don't over complicate the architecture
- Don't import too many libraries
- If you have time, add unit tests
- Ask questions!

## Giving & Evaluating a Code Test
- Make the problem as straightforward as possible
- Be honest with the time constraints
- Have a code review checklist
- Average
  - Application starts properly
  - 3/5 requirements complete
- Good
  - Code is well documented
  - All requirements are complete
  - No errors are thrown in the console
- Exceptional
  - Modular architecture designed for extensibility
  - Create unit and integration tests

## Big-O
- Longest amount of time a function will take to execute - the worst-case scenario of input
- Big omega - best case
- Big theta - average case
- Big O - worst case
  - O(1): constant time
  - O(n): linear time
  - O(n^2): exponential time
- If you're iterating over a dataset, and every time you iterate, you're reducing the number of elements it's O(log n)
  - Find an element in a tree: O(log in)
- Trick: Look at the number of loops (n, n^2, n^3)

## Phone Screen Overview
- Ask questions
  - Helpful or dismissive?
  - Outgoing and friendly?
  - Vet out during the phone screen
- Talk out your solution
  - Use your brain - talk out your solution
  - Here's how I'm thinking about a problem
- Get comfortable with the environment
  - Codepen, codetest, etc.
  - Understand the environment you're going to be coding in

## On-site Preparation
- Practice writing code without a computer
  - Do things on a piece of paper first
  - Can be more flexible
- Go over general sample problems
  - Practice doing them without a computer
  - Learn how to break down a problem (daily coding challenges)
  - You're going to get stuck, and won't know what to do next
- Ask your friends to test you
- Try to ask what the style of technical questions will be
  - HTML/CSS building something?
  - High level component design?
  - Algorithmic questions

## On-site Interview Overview

### Strings
- Primitive type
- Useful methods
  - .split()
  - .toLowerCase()
  - .substring()
  - .startsWith() - wasn't around til a couple of years ago
- Strings are immutable - when you change it, you're creating another string
- Turn a string into an array, manip, then change back

### Arrays
- How to make an array
  - Object.entries() (might need polyfilling)
  - Array.from()
  - [...item]
- Useful Methods
  - .isArray()
  - .filter() => array
  - .reduce() => anything you want
  - .concat() => array
  - .join() => 
  - .pop() => item from array
  - .push() => null
  - .map() => array

### Scope
- .call() - executes function
- .apply() - executes function
- .bind() - partial application, returns the function

### Timing (debounce)

- How to schedule things in javascript
  - setInterval() - continuously perform something after x ms
  - setTimeout() - perform something after x ms
  - requestAnimationFrame() - timing in UI
- Debounce to throttle input

### Trees

- Binary trees have data, a left and a right leaf
- Order of children is from left to right [0, 1, 2, 3]
- Parent.children is an array of items

### Rendering

- Lean into knowing how the rendering engine of a browser works
- If we're doing it in javascript - requestAnimationFrame()
  - Every time there's a render, there's a call to requestAnimationFrame()
- All browsers render @ 60fps

### Promises
- A promise to return something eventually

# Result
- Probably going to fail
- Interviews are half luck
- Sometimes you'll get the right question on the right day with the right interviewer
- Sometimes it's just not your day
- Ask for feedback where possible