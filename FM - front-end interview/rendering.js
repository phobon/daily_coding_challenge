// Create a function to move an element. The function arguments are, distance, duration, and the element to move

/*
  function moveElement(duration, distance, element) {}
*/

// We could just do this in CSS with something like:
// @keyframes movesomething {
//   from { left: 0px }
//   to { left: 100px }
// }
// element {
//   animation: movesomething duration hold-end;
// }

// In javascript, we'd look into using the style - transform: translate() probably in a requestAnimationFrame callback
// So, if we're given a duration, we might want to find out how many frames we can move in that time:
  // seconds = (duration / 1000)
  // frames = seconds * 60
// Once we have the number of frames that we're going to move, we need to figure out how far we move per frame
// distancePerFrame = distance / frames

// Once we have that distance, we can probably do a recursive call to requestAnimationFrame()

function moveElement(duration, distance, element) {
  // Given a duration in ms, figure out how many frames we've got to work with
  const seconds = duration / 1000;
  const frames = seconds * 60;

  // Once we have the number of frames we're going to move, figure out how far to move per frame
  const distancePerFrame = distance / frames;

  // Now that we have that, we can recursively call requestAnimationFrame()
  let frameCount = 1;
  function move() {
    const distance = frameCount * distancePerFrame;
    element.style.transform = `translateX(${distance}px);`;
    frameCount++;

    if (frameCount <= frames) {
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);
}

function moveElement(duration, distance, element) {
  const start = performance.now();

  function move(currentTime) {
    const elapsed = currentTime - start;

    // How much time has been spent, vs how much time we want to spend
    const progress = elapsed / duration;

    // progress is a ratio, so multiply that by the distance
    const amountToMove = distance * progress;

    element.style.transform = `translateX(${amountToMove}px);`;
    if (amountToMove < distance) {
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);
}