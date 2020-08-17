# Technical Interview Process
---

## Phone Screen

Have questions prepared

+ What is the culture like in the office?
+ Is there a lot of diversity?
+ Are there opportunities for continuing education?
+ How is the work/life balance?

## Technical Phone Interview

Front-end developer position

+ Questions are usually based around HTML, CSS and Javascript
  + Knowledge of DOM manipulation with Javascript
    + Add, remove and alter HTML elements in the DOM
  + CSS
    + Specificity
    + Positioning
    + Display properties (block vs inline)
    + Responsive layouts with Flexbox and Grid
  + Accessbility
    + Semantic HTML elements (nav, header, section, alt)
    + ARIA attributes (role, labelled-by, label, is your modal visable or hidden)
  + Javascript (ES6, async/await)
+ Technical questions like
  + Can you define a promise?
  + What is a closure?
  + How would you visually hide an element in the UI so it's still accessible for screen readers?
  + Why do we use alt tags for images?
  + How can we make our web applications more performant?

## On Problem Solving

1. Understand the problem

+ Clarify the problem, reiterate to the interviewer
+ 'I have a graph with a cycle in it and I need to find the broken edge and remove it. Is this correct?'

2. List functional requirements

+ Things your solution absolutely has to include will help to understand the problem, and don't get sidetracked
+ Infinite scroll
  + Users must see their friends photos in reverse chronological order (the most recent first)
  + We want to reduce the time to first paint, so lazy loading is a good option
  + We want to request a maximum of 30 photos at a time

3. List possible solutions

+ Data structures? Benefits and drawbacks?
+ Speak out loud and write down a few possible paths you can take
+ Choose the solution you're most comfortable coding
+ If it's not the most performant or optimal solution, that's ok - state that out loud
+ Brute-force - optimise later

4. Optimise your solution

+ If you have time, optimise
+ Can you remove the nested for-loop and look for an O(n log n) solution?
+ Explicitly state you recognise this solution isn't performant and would have liked to refactor if time allowed

5. Test your solution