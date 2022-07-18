// Calculate area, diameter and circumference

const radius = [5, 21, 2, 9, 15];

const calculate = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * Math.PI * radius;
};

const circumference = function (radius) {
  return 2 * radius;
};

console.log("Area: " +calculate(radius, area))
console.log("Diameter: " +calculate(radius, diameter))
console.log("Circumference: " +calculate(radius, circumference))
