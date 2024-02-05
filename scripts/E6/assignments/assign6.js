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


// Another way

 displayPerson = () =>{
   // const { name: fullName, age:age1, address: { city: current_city, country: nation = "India" } } = person  or 
   const { name: fullName, age:age1, address: { city: current_city, country: nation = "USA" } } =  {
    name: "David",
    age: 30,
    address: {
      city: "Delhi",
      country: "India",
    }
}
    console.log(
        `Person Info : \n Name = ${fullName} \n Age = ${age1} \n Address = \n City : ${current_city} \n Country : ${nation}`
      );

 }
 displayPerson();