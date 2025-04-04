// comparator function
// (a, b) => a - b



let num = [551, 22, 3, 13, 5, 6, 7, 8, 229];
num.sort((a, b) => a - b)
console.log(num);



 // reverse a number 
 function revNum(num) {
    return Number(num.toString().split("").reverse().join("")
    )
}
console.log(revNum(23));


function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse
}
// console.log(reverseString("Tiwari"));