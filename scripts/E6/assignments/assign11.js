let tasks = [];
let task = new Object();
let message =
  "Choose one option to process \n 1. Create Task \n 2. Update Task \n 3. Delete Task \n 4. List Tasks  > ";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// process
processOption = (option) => {
  return new Promise(async (resolve) => {
    switch (option.trim()) {
      case "1":
        try {
          await createOrUpdateTask("Enter Task >");
        } catch (err) {
          console.log(err);
        }
        break;
      case "2":
        try {
          await createOrUpdateTask("Enter Task Details to Update >");
        } catch (err) {
          console.log(err);
        }
        break;
      case "3":
        await deleteTask("Enter Task Id to Remove >");
        break;
      case "4":
        listTask();
        break;
      default:
        console.log("Invalid Option!");
        break;
    }
    main();
  });
};

// getting input from the user
getUserInput = (message) => {
  return new Promise((resolve) => {
    readline.question(message, (value) => {
      resolve(value);
    });
  });
};

// both create and update uses same fn
createOrUpdateTask = async (message) => {
  let value = await getUserInput(message);
  if (!validateInput(value)) {
    throw "Invalid Input, Please provide a valid json";
  } else {
    task = JSON.parse(value);
    // check for the object is already there then update.
    if (tasks.filter((t) => t.id === task.id).length > 0) {
      tasks[task.id - 1].id = task.id;
      tasks[task.id - 1].tittle = task.tittle;
      console.log("Successfully Updated Task !");
    } else {
      tasks.push(task);
      console.log("Successfully Created Task !");
    }
    console.log(tasks.length);
  }
};

validateInput = (value) => {
  try {
    JSON.parse(value);
    return true;
  } catch (err) {
    return false;
  }
};

listTask = () => {
  tasks.forEach((element) => {
    console.log(element);
  });
};

deleteTask = async (message) => {
  let taskid = await getUserInput(message);
  tasks.splice(Number(taskid) - 1, 1);
  console.log("Successfully Deleted Task !" + taskid);
};

// main fn
main = async () => {
  let option = await getUserInput(message);
  await processOption(option);
};

// calling main fn
main();
