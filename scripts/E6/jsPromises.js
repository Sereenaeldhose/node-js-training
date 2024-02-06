let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failure");
  }
});

//handling promise
p.then((message) => {
  console.log("this is then  " + message);
}).catch((message) => {
  console.log("this is catch  " + message);
});

console.log("-----------------------------------");

//#################################################
//#################################################

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
console.log("++++++++++++++++++++++");

//#################################################
//#################################################

const promiseA = new Promise((success, failure) => {
  // any name can be given
  success(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// o/p like below
//-----------------------------------
//++++++++++++++++++++++
//immediate logging
//this is then  success
//asynchronous logging has val: 777
//foo and bar and bar again and again and again

//#################################################
//#################################################

myDisplayer = (message) => {
  console.log("Result = " + message);
};

getPromise = () => {
  return new Promise(function (myResolve, myReject) {
    let x = 200;
    setTimeout(function () {
      if (x == 200) {
        myResolve("Value Matches");
      }
      myReject("Value Not Matching");
    }, 300);
  });
};

getPromise().then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

//#################################################
//#################################################

getOddNumbers = () => {
  return new Promise((success, failure) => {
    let limit = 50000;
    var odd_numbers = [];
    for(i = 0; i<=limit ; i++){
        if (i % 2 != 0) {
            odd_numbers.push(i);
        }
    }
    success(odd_numbers,limit);
  });
};

getSum = (numbers) => {
    var sum = 0;
    numbers.forEach(element => {
        sum += element;
        
    });
    return sum ;
}
getOddNumbers()
  .then((odd_numbers) => getSum(odd_numbers))
  .then((sum) => console.log(`Sum of Odd Numbers = ${sum}`));


  // o/p will be

// -----------------------------------
// ++++++++++++++++++++++
// immediate logging
// this is then  success
// asynchronous logging has val: 777
// Sum of Odd Numbers = 625000000
// foo and bar and bar again and again and again
// Result = Value Matches