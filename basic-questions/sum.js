let myArray =[1,2,3,4,5,6]

function sumNumbers(numbers){
    let sum = 0;
    for(let i = 0; i <= 5; i++){
        sum = sum + numbers[i]
    }

    return sum
}
 let result = sumNumbers(myArray)
 console.log(result);
 