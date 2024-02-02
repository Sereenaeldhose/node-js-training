const person = {
  Name: "Johney",
  Age: 40,
  Cars: [
    {
      name: "Ford",
      models: ["mustang", "Fiest", "Mustang"],
    },
    {
      name: "BMW",
      models: ["320", "X3", "X5"],
    },
    {
      name: "Fiat",
      models: ["500", "panda"],
    },
  ],
};

function details(){
    const keys = Object.keys(person);
    var availableCarDetails = "";
    keys.forEach((key) => {
      if (Array.isArray(person[key])) {
        person[key].forEach((element) => {
          availableCarDetails += ` ${element["name"]} with models ${element["models"]} `;
        });
      }
     return availableCarDetails;
    });
console.log(
  `${person["Name"]} ${
    person["Age"]
  } years old having the following cars`+ availableCarDetails);
}

details();

