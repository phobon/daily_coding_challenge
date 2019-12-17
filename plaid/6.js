// Why does `rectangle.getArea()` return `6`?

const rectangle = {
  height: 2,
  width: 3,
  getArea() {
    return this.height * this.width;
  }
};

rectangle.getArea() // 6

// `getArea` is called as a property of `rectangle`, therefore `this` is a reference to `rectangle`

// `getArea` is declared on the `rectangle` object, therefore `this` is bound to `rectangle`
// ^^^

// `rectangle.getArea()` actually returns `NaN` because `this` is undefined