// async callback fn
var array =[];
addPost = (id,title,callback)=>{
    array.push({id:id,title:title});
    console.log("Pushing to array completed..");
    callback(array);
    console.log("Process completed..");
}

getPosts = (array) =>{
console.log("Printing the array posts.....");
array.forEach(element => {
    console.log(`id = ${element.id} and title = ${element.title}`);
});
}

addPost(1,"Title 1", getPosts);
addPost(2,"Title 2", getPosts);
addPost(3,"Title 3", getPosts);

console.log("-------------- Invoking next function -------------");

// using asyn await function

let posts = [
  { id: 1, title: "A" },
  { id: 2, title: "B" },
  { id: 3, title: "C" },
];

addPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);
      resolve(posts);
    }, 300);
  });
};

getPosts = () => {
  result = "";
  posts.forEach((element) => {
    result += `id = ${element.id} and title = ${element.title}\n`;
    return result;
  });
};

main = async () => {
  let post = { id: 4, title: "D" };
  await addPost(post).then(getPosts);
  console.log(result);
};

main();
