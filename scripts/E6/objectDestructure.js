const profile = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com",
};

const { firstName: firstName, lastName: lastName, website: website } = profile;
console.log(`The values are ${firstName},${lastName} and ${website}`);

// if provide the name like this if the variable name is not match with the obj then undefined will return
const { firstName1, lastName1, website1 } = profile;
console.log(`The values are ${firstName1},${lastName1} and ${website1}`);

// if provide the name like this if the variable name is not match with the obj then undefined will return
const {
  firstName: firstName2,
  lastName: lastName2,
  website: website2,
} = profile;
console.log(`The values are ${firstName2},${lastName2} and ${website2}`);

// Rest operator.  you can call the sort(), map(), forEach(), or pop() method on a rest parameter.
function printMyName(...value) {
  return value;
}

// Invoke the printMyName function while passing two arguments to its parameters:
console.log(`My name is ${printMyName("Oluwatobi", "Sofela")}`);
