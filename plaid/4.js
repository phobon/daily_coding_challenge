// In the example below, `console.log(x)` logs `undefined`. Why is `x` undefined?

console.log(x) // undefined
var x = 1;

// `var x` is out of scope within the `log` function

// `var x` is hoisted, but the value of `x` is assigned after `console.log(x)`
// ^^^

// there is no reference to `var x` when `console.log(x)` is called