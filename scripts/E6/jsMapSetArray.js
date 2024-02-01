console.log("++++++++++++++ Map +++++++++++++++++++++++");
let mapFn = () => {
  const days = new Map();
  days.set(1, "Sunday");
  days.set(2, "Monday");
  days.set(3, "Tuesday");
  days.set(4, "Wednesday");
  days.set(5, "Thursday");
  days.set(6, "Friday");
  days.set(7, "Saturday");
  return days;
};
console.log("5th day of weeks is : " + mapFn().get(5));

// in js (v,k) is the format, ie value of the map is mapped to first param.
mapFn().forEach((value, key) => {
  console.log(value + "," + key);
});
console.log("-----------------------------");

mapFn().forEach((key, value) => {
  console.log(key + "," + value);
});
console.log("******************************");

mapFn().forEach((key, value) => {
  console.log(value + "," + key);
});

console.log("++++++++++++++ Set +++++++++++++++++++++++");
let setFn = () => {
  const days = new Set();
  days.add("Sunday");
  days.add("Monday");
  days.add("Tuesday");
  days.add("Wednesday");
  days.add("Thursday");
  days.add("Friday");
  days.add("Saturday");
  days.add("Tuesday");
  return days;
};

let vals = setFn();
vals.add("None");
for (let i of vals) {
  console.log(i);
}

console.log("++++++++++++++ Array +++++++++++++++++++++++");
let arrayFn = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days;
};
for (let i of arrayFn()) {
  console.log(i);
}

console.log("5th day of a week :  " + arrayFn()[4]); // index starts from 0
