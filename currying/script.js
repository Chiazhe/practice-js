// With closure
function x(v1) {
  return function y(v2) {
    console.log(v1 * v2);
  };
}

let multiplyByTwoWithClosure = x(2);
let multiplyByThreeWithClosure = x(3);
multiplyByTwoWithClosure(5);
multiplyByThreeWithClosure(5);

// With bind method
function multiply(v1, v2) {
  console.log(v1 * v2);
}

let multiplyByTwoWithBind = multiply.bind("", 2);
let multiplyByThreeWithBind = multiply.bind(this, 3);
multiplyByTwoWithBind(7);
multiplyByThreeWithBind(7);
