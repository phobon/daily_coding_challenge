// What will get printed to the console?

var number = 24;

setTimeout(function() {
  console.log(number);
}, 0);

number = 5;

// None of these

// `undefined`

// + 5
// ^^^ setTimeout is executed after everything on the call stack. If this wasn't in a setTimeout, then 24 would be the result

// 24