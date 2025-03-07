 if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this // Current Object ki taraf point karta hai

        for(let i = 0; i < originalArr.length; i++){
            userFn(originalArr[i], i)
        }
    }
 }
 


 if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result = []

        for(let i = 0; i < this.length; i++){
            if(userFn(this[i])){
                result.push(this[i]);
            }
        }

        return result
    }
 }
 
 
 const arr = [1,2,3,4,5,6];

 // Error: .forEach function does not exist on arr variable
 // Real Signature ko samjo - No return, function input, value, index

 const ret = arr.myForEach(function (value, index){
    console.log(`Value at index ${index} is ${value}`);
    
 });



 // filter 
 // Signature: Return - new array | input: userFn
 // agar user ka function true return karta hai toh current value ko new array mai

const n3 = arr.myFilter((e) => e % 2 == 0);
console.log(n3);
