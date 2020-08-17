function jumpingOnClouds(c) {
  // This reads like a recursive problem to solve
  // Start with 0 then traverse a path until it either can be solved, or can't be solved
  // Prefer jumps of 2 rather than 1 to try and get things done as quickly as possible
  // The only jumps that can't win the game are ones where n+1 and n+2 === 1
  // We could store all of these in an array and check each jump to see whether it will take us to a node that we can't get off and avoid them
  const result = [];
  const jump = (a, r, count, current = 0) => {
      const plus1 = a[current + 1];
      const plus2 = a[current + 2];

      if (plus1 == null && plus2 == null) {
          // We've reached the end, so push the total
          r.push(count);
          return;
      }

      // Check whether we can traverse to +2
      if (plus2 === 0) {
          jump(a, r, count + 1, current + 2);
      }

      if (plus1 === 0) {
          jump(a, r, count + 1, current + 1);
      }
  };

  jump(c, result, 0);

  let min = result[0];
  for (const r of result) {
      if (min > r) {
          min = r;
      }
  }

  return min;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));