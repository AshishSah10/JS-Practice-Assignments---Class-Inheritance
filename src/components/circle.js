// import using require
let Shape = require('./shape.js');

// declare class
class Circle extends Shape{
  calculateArea(r){
    return (22/7)*r*r;
  }
}

module.exports = Circle();
// export class using module.exports