// Can directly assign values to variables instead of getting the value based on index.
const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;
console.log(`The values are ${firstName},${lastName} and ${website}`);

// Direct array destructuring
const [fName, lName, wsite] = ["Sereena", "Eldhose", "testwebsite.com"];
console.log(`The values are ${fName},${lName} and ${wsite}`);

// seperate variable declaration and assignment
let firstName1, lastName1, website1;

[firstName1, lastName1, website1] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(`The values are ${firstName1},${lastName1} and ${website1}`);

//Rest operator. assign values to a single variable

const [firstName2, ...otherValues] = profile;
console.log(`The values are ${firstName2} and ${otherValues}`);

// extract a purticula index value. use , to skip the variables.

const [, , website3] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(`The website is ${website3}`);

// Setting default values. Tobi and CodeSweetly are the default values
const [firstName4 = "Tobi", website4 = "CodeSweetly"] = ["Oluwatobi"];
console.log(`The values are ${firstName4} and ${website4}`);

const [firstName5 = "Tobi", website5 = "CodeSweetly"] = [
  "Oluwatobi",
  "test.com",
];
console.log(`The values are ${firstName5} and ${website5}`);

// swaping
let firstName6 = "Oluwatobi";
let website6 = "CodeSweetly";

[firstName6, website6] = [website6, firstName6];
console.log(`The values are ${firstName6} and ${website6}`);

// params should be inside [] else the object itself assign to firstName7 only
getUserInfo = ([firstName7, lastName7, website7]) => {
  console.log(
    `User Info : \n Name = ${firstName7} ${lastName7}\n Website = ${website7}`
  );
};
// params should be inside [] else the object itself assign to firstName7 only
getUserInfoWrongMethod = (firstName8, lastName8, website8) => {
  console.log(
    `User Info : \n Name = ${firstName8} ${lastName8}\n Website = ${website8}`
  );
};

function getUserBioWithDefault([firstName9] = ["default Value"]) {
  console.log(`My name is ${firstName9}.`);
}

getUserInfo(profile);
getUserInfoWrongMethod(profile);
getUserBioWithDefault();
