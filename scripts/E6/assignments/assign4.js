// -- Object comparision

let obj1 = {
  name: "John",
  age: 23,
  degree: "CS",
};
let obj2 = {
  age: 23,
  degree: "CS",
};

let comparision = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length != keys2.length) {
    console.log("obj1 and obj2 having different no of properties.");
    return false;
  }
  keys1.forEach((k) => {
    if (!obj1.hasOwnProperty(k) && !obj2.hasOwnProperty(k)) {
      return false;
    }
    if (typeof obj1[k] === "object") {
      comparision(obj1[k], obj2[k]);
    } else if (obj1[k] != obj2[k]) {
      return false;
    }
  });

  return true;
};

console.log(
  `The given 2 objects are ${
    comparision(obj1, obj2) == true ? "same" : "not same"
  } `
);

// -----  Check whether an object is an empty.-----

let person1 = {
  name: "John Doe",
  age: 10,
  phone: 1234567892,
};

let student = {};
var str = "Test string";
let nullObj = null;
let isEmpty = (obj3) => {
  if (typeof obj3 != "object" || obj3 == null) {
    return false;
  }

  if (Object.keys(obj3).length === 0) {
    return true;
  }
  return false;
};

console.log(
  `The person1 is ${
    isEmpty(person1) == true ? "not an object or an empty/null" : "not an empty"
  } object`
);
console.log(
  `The student is ${
    isEmpty(student) == true ? "not an object or an empty" : "not an empty"
  } object`
);
console.log(
  `The str is ${
    isEmpty(str) == true ? "not an object or an empty" : "not an empty"
  } object`
);
console.log(
  `The nullObj is ${
    isEmpty(nullObj) == true ? "not an object or an empty" : "not an empty"
  } object`
);
// check for whether the variable having some value

checkForHavingValue = (data) => {
  if (!data) {
    return false;
  }
  return true;
};

let data1 = "Hello Xmindians";
let data2 = "";
let data3 = "";
let data4 = undefined;
let data5 = null;

console.log(
  `data1 ${
    checkForHavingValue(data1) == true
      ? "Having some value"
      : "is null/empty/undefined"
  }`
);
console.log(
  `data2 ${
    checkForHavingValue(data2) == true
      ? "Having some value"
      : "is null/empty/undefined"
  }`
);
console.log(
  `data3 ${
    checkForHavingValue(data3) == true
      ? "Having some value"
      : "is null/empty/undefined"
  }`
);
console.log(
  `data4 ${
    checkForHavingValue(data4) == true
      ? "Having some value"
      : "is null/empty/undefined"
  }`
);
console.log(
  `data5 ${
    checkForHavingValue(data5) == true
      ? "Having some value"
      : "is null/empty/undefined"
  }`
);
