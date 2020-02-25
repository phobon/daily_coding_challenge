// This problem was asked by Google.

// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

// For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

// You may also use a list or array to represent a set.

// If we have a set that's small, then figure out what the different power sets are
// {} = {{}}
// {1} = {{}, {1}}
// {1, 2} = {{}, {1}, {2}, {1, 2}}
// {1, 2, 3} = {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}
// {1, 2, 3, 4} = {{}, {1}, {2}, {3}, {4}, {1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4}, {3, 4}, {1, 2, 3}, {1, 2, 4}, {1, 3, 4}, {2, 3, 4}, {1, 2, 3, 4}}

// Always start with an empty object, or array
// Every number in the set is its own object, or array
// The original object or set is included at the end
// Then iterate through the set to create sets that are smaller than the whole set

function powerSet(set) {
  if (set.length === 0) {
    return [set];
  }
  if (set.length === 1) {
    return [[], [...set]]
  }

  // Initialise the power set
  const ps = [
    []
  ];

  // Add each single item
  for (const s of set) {
    ps.push([s]);
  }

  // Add the entire set.
  ps.push([...set]);

  return ps;
}

console.log(powerSet([]));
console.log(powerSet([1]));
console.log(powerSet([1, 2]));
console.log(powerSet([1, 2, 3]));