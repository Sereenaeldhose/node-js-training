const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

// split the string
const myName1 = "Oluwatobi Sofela";

console.log([...myName1]);

// slipt nthe array and assign values
const numbers = [1, 3, 5, 7, 10, 200, 90, 59];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(`Sum  = ${addNumbers(...numbers)}`);
