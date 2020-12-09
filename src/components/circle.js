// import using require
const Shape = require("./shape");

// declare class
class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea(r) {
    return (22 / 7) * r * r;
  }
}

module.exports = Circle;
// export class using module.exports
