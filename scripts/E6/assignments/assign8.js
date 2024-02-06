// async callback fn
var array = [];
addPost = async () => {
  return new  Promise((resolve) => {
    pushValues();
    console.log("Pushing to array completed..");
    resolve(array);
  });
};

pushValues = () => {

  array.push({ id: 1, title: "Tittle 1" });
  array.push({ id: 2, title: "Tittle 2" });
  array.push({ id: 3, title: "Tittle 3" });
  array.push({ id: 4, title: "Tittle 4" });
  array.push({ id: 5, title: "Tittle 5" });
  array.push({ id: 6, title: "Tittle 6" });
  array.push({ id: 7, title: "Tittle 7" });
  array.push({ id: 8, title: "Tittle 8" });
};

getPosts = () => {
  console.log("Printing the array posts.....");
  array.forEach((element) => {
    console.log(`id = ${element.id} and title = ${element.title}`);
  });
};


   addPost().then(getPosts);


   setTimeout(() =>{console.log("-------------- Invoking next function -------------")},300);

// using asyn await function

let posts = [
  { id: 1, title: "A" },
  { id: 2, title: "B" },
  { id: 3, title: "C" },
];

addPost1 = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);
      resolve(posts);
    }, 300);
  });
};

getPosts1 = () => {
  result = "";
  posts.forEach((element) => {
    result += `id = ${element.id} and title = ${element.title}\n`;
    return result;
  });
};

main2 = async () => {
  let post = { id: 4, title: "D" };
  await addPost1(post).then(getPosts1);
  console.log(result);
};

main2();
