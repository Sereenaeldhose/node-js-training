// callback fns
// Asynchronous call back eg.
function greet(name, myFunction) { // myFunction = sayName
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name); // sayName(name)
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
setTimeout(greet, 2000, 'John', sayName);


console.log("----------------");
// Synchronous call back eg.
function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
      if (callback(number)) {
        results.push(number);
      }
    }
    return results;
  }
  
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
  });
  
  console.log(oddNumbers);

  // In the above code set the filter fn will call first because we are added a 2000ms time delay for the first fn. 
  // filter fn is passing a fn as arg which calculate odd numbers and which is written at the time of calling the filter fn like in the eg. 
  //means no separate fn body.
  // greet fn is also passing a fn as arg but the arg fn have separate fn body.