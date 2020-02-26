// Given a function like this, how would I turn it into a promise

// function returnApple(callback) {
//   setTimeout(() => {
//     callback('f');
//   }, 500);
// }

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('f');
//   }, 2000);
// });

// p.then(f => console.log(f));

// Create a sleep function that takes one parameter (time) and will wait "time" ms

/*
  async function run() {
    await sleep(500);
    console.log('hello');
    await sleep(500);
    console.log('world');
  }
*/

function sleep(time) {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return p;
}

async function run() {
  await sleep(500);
  console.log('hello');
  await sleep(500);
  console.log('world');
}

run();