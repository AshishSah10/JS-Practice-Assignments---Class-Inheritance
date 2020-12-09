// import using require
const Shape = require("./shape").Shape;

// declare class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea(r) {
    return (22 / 7) * r * r;
  }
}

module.exports = Circle;
// export class using module.exports
