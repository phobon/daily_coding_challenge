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