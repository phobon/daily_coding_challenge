// Implement debounce

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

const fn1 = debounce(() => console.log('debounce'));
fn1();
fn1();
fn1();
fn1();
fn1();