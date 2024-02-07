// Guess gaming...

console.log("WELCOME TO GUESS THE NUMBER GAME!!");

let score = 0;
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// getting input from the user
getUserInput = () => {
  return new Promise((resolve, reject) => {
    readline.question("Please Enter a Number!", (number) => {
      if (!validateInput(number)) {
        reject(`Invalid Input ${number}`);
      } else {
        resolve(number);
      }
    });
  });
};

// validate the user input
validateInput = (number) => {
  if (isNaN(number) || number <= 0 || number > 7) {
    console.log("Please provide a valid number between 1 to 6!");
    return false;
  }
  return true;
};

// process the user input
processUserInput = (number) => {
  return new Promise((resolve) => {
    let randomNumber = Math.trunc(Math.random() * 6); // random num btw 0 to 6
    if (number == randomNumber) {
      console.log(
        `Yahoo! The number you entered(${number}) and the random number(${randomNumber}) is same! you got 2 poins!`
      );
      score += 2;
      return resolve();
    }
    if (number - randomNumber == 1) {
      console.log(
        `The number you entered(${number}) is 1 number different than the random number(${randomNumber})! you got 1 poins!`
      );
      score += 1;
      return resolve();
    }
    if (number != randomNumber) {
      console.log(
        `Sorry! The number you entered(${number}) and the random number(${randomNumber}) is not same! you got 0 poins!`
      );
      return resolve();
    }
  });
};

// handle error if invalid input
handleError = (message) => {
  console.log(`ERROR : ${message}`);
};

// choice in n or any invalid choice
closeFn = () => {
  readline.on("close", function () {
    console.log("THANK YOU FOR PLAYING !!!");
  });
  readline.close();
};

// get user input for continue the game or exit
continueOrExit = () => {
  console.log(`Total score secured is ${score} !`);
  console.log("-------------------------------------------");
  readline.question("Do you want to continue [y/n] ?", (choice) => {
    if (choice !== "n" && choice !== "y") {
      console.log("Invalid Choice Received!");
      closeFn();
    } else {
      console.log(`Your choice is ${choice === "n" ? "No" : "Yes"}`);
      if (choice === "n") {
        closeFn();
      } else {
        main();
      }
    }
  });
};

// the main function
main = async () => {
  let num = await getUserInput().catch(handleError);
  if (num) {
    await processUserInput(num);
  }
  await continueOrExit();
};

// main fn call
main();
