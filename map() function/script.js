Array.prototype.mymap = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

const double = function (val) {
  return 2 * val;
};

let arr = [0, 2, 4, 6, 8]

console.log(arr.mymap(double))
