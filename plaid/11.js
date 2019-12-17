// What will the console log when the button is clicked?

const body = document.querySelector('body');
const container = document.querySelector('.container');
const button = document.querySelector('button');

const log = message => () => console.log(message);

body.addEventListener('click', log(1), true);
body.addEventListener('click', log(2));

container.addEventListener('click', log(3), true);
container.addEventListener('click', log(4));

button.addEventListener('click', log(5), true);
button.addEventListener('click', log(6));

// 1, 3, 5, 6, 4, 2
// ^^^ addEventListener with the `capture` argument set to true will execute first, then propagate

// 1, 2, 3, 4, 5, 6

// 2, 4, 6, 5, 3, 1

// 5, 3, 1, 2, 4, 6