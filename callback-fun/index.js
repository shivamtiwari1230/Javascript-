function printMessage() {
  console.log("Mujhe callback function ke through call kiya gaya!");
}

function executeCallback(cb) {
  cb(); // Yahan jo function pass hoga, use call kar diya
}
executeCallback(printMessage);


function add(a, b) {
  return a + b;
}

function cb(callback) {
  return callback(2, 4)
}
console.log(cb(add)
);


const square = (num) => num * num;

const nums = [2,4,6]
function myFn(callback) {
    const squareArr = []
    for(let i = 0; i < nums.length; i++){
        let res = callback(nums[i])
        squareArr.push(res)
    }
    return squareArr
}

console.log(myFn(square));


