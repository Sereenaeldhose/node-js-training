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