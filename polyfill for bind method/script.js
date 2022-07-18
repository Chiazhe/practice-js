let person = { firstName: "Steve", lastName: "Roger" };

function printPerson(location, movie) {
  console.log(
    this.firstName + " " + this.lastName + " from " + location + " in " + movie
  );
}

let printBind = printPerson.bind(person, "America");
printBind("Avengers");

Function.prototype.customBind = function (...args) {
  let obj = this;
  return function (...args2) {
    obj.call(...args, ...args2);
  };
};

let printCustomBind = printPerson.customBind(person, "America");
printCustomBind("Avengers");
