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

