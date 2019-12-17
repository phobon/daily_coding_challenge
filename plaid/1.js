const SPEED = 1;

let position = {
  x: 0,
  y: 0,
};

function animate() {
  position.x += SPEED;
  SPEED += 1;

  window.requestAnimationFrame(animate);
}

// `animate` calls itself which will cause a stack overflow

// the `SPEED` constant gets overwritten in the `animate` function
// ^^^ Cannot reassign const variables

// `position.x` is out of scope in the `animate` function