const teas = ["Green tea", "Black tea", "oolong tea", "White tea", "Herbal tea"]


teas.push("Chamomile tea");

// Remove  "Oolong tea" from the list of teas.
teas.splice(2, 1)
// console.log(teas);

const index = teas.indexOf("oolong tea");
if(index > -1){
teas.splice(index, 1)  
}
// console.log(teas);


// filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal tea");
// console.log(caffeinatedTeas);


// Use a for loop to pint each type of tea in the array.
const tea = teas.forEach((e) => {
    // console.log(e); 
})


// Use a for loop to create a new array with all tea names in uppercase
 const uppercase = [] ;
 for(let i =0; i < teas.length; i++){
    uppercase.push(teas[i].toLocaleUpperCase());
 }


 // Use a for loop to find the tea name with the most characters.
 const longestTea = "";
 for(let i = 0; i < teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i]
    }
 }

 // Use a for loop to reverse the order of teas in the array.
 const reverseArray = []
for(let i = teas.length - 1; i >= 0; i--){
reverseArray.push(teas[i])
}

