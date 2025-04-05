
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 300);
  });
  

  function handleFulfilledA(){
    console.log("promise fullfilled");
    
  };

  function handleRejectedA(){
    console.log("promise rejected");
    
  }

  myPromise
    .then(handleFulfilledA)
    .catch(handleRejectedA)
    // .then(handleFulfilledB, handleRejectedB)
    // .then(handleFulfilledC, handleRejectedC);



  

const myPromise1 = new Promise((resolve, reject) => {
    setInterval(() => {
        reject("fullfilled")
    },300)

});

myPromise1
.then((val) => {
console.log(`Promise ${val}`);
})

.catch((error) => {
    console.log("Error caught:", error);
  });


// -----------------------------------------------------------------

// Promise Chaining

const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);

});

myPromise3

.then((result) => {
    console.log(result);
    
    return result * 2;

}).then((result) => {
    console.log(result);
    
    return result * 2;

}).then((result) => {
    console.log(result);
    
    return result * 2;
})



