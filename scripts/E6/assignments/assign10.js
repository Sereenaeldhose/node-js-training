
let url = "https://jsonplaceholder.typicode.com/users";

fetchNamesFromJson = async() => {
  let jsonData =[], names=[];
    const response =  await fetch(url);
    if (!response.ok) {
      throw("Failed to Fetch Data!");
    }
  jsonData = await response.json();
  console.log("Names from the json : ");
  jsonData.forEach(element => {
   names.push(element.name);
  });
  console.log(names.sort());
};

fetchNamesFromJson();