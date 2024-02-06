let posts = [];
pushValues = () => {
  posts.push({ id: 1, title: "Tittle 1" });
  posts.push({ id: 2, title: "Tittle 2" });
  posts.push({ id: 3, title: "Tittle 3" });
  posts.push({ id: 4, title: "Tittle 4" });
  posts.push({ id: 5, title: "Tittle 5" });
  posts.push({ id: 6, title: "Tittle 6" });
  posts.push({ id: 7, title: "Tittle 7" });
  posts.push({ id: 8, title: "Tittle 8" });
};

addPost = () => {
  return new Promise((resolve, reject) => {
    pushValues();
    if (posts.length === 0) {
      reject("No values present!");
    }
    console.log("Pushing to array completed...");
    resolve(posts);
  });
};

getPosts = () => {
  result = "";
  console.log("Printing the array...");
  posts.forEach((element) => {
    result += `id = ${element.id} and title = ${element.title}\n`;
    return result;
  });
};

handleFn = (message) => {
  `ERROR : ${message}`;
};

main = async () => {
  await addPost().then(getPosts, handleFn);
  console.log(result);
};

main();
