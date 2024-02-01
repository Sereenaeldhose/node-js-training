// normal object -- each key:value is called properties.
var vehicles = {
  name: "BMW",
  type: "Car",
  capacity: "5 Seater",
  properties: {
    colour: "Black",
    model: "12/K/89",
  },
  getNameWithModel: function () {
    return this.name + " " + this.properties.model;
  },
};

// arrow function
let carDetails = () => {
  // object using constructor
  let car = new Object();

  (car.colour = "no"), (car.model = "no");

  if (vehicles.hasOwnProperty("properties")) {
    car.model = vehicles.properties.model;
    car.colour = vehicles.properties.colour;
  }

  car.description =
    "This is a " +
    vehicles.name +
    " of " +
    car.model +
    " model, it is a " +
    vehicles.capacity +
    " vehicle with " +
    car.colour +
    " colour";
  // can call the function inside the global object
  car.description1 =
    "This is a " +
    vehicles.getNameWithModel() +
    " model, it is a " +
    vehicles.capacity +
    " vehicle with " +
    car.colour +
    " colour";

  // no further alteration is possible after we freeze or seal
  Object.freeze(car); // no change
  Object.seal(car); // no new property can be added
  car.colour = "Blue";
  car.seater = "7";
  return car;
};

let carDetail = carDetails();
console.log("The car details are " + carDetail.description);
console.log("The car details 2 are " + carDetail.description1);
