const person = {
  name: "John",
  age: 45,
  address: {
    city: "Newyork",
    country: "USA",
  },
};

printPersion = ({ name, age, address: { city: city, country: country } }) => {
  console.log(
    `Person Info : \n Name = ${name} \n Age = ${age} \n Address = \n City : ${city} \n Country : ${country}`
  );
};

printPersion(person);
