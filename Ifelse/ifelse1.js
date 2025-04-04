let weather = "rainy"

if(weather === "rainy"){
    console.log("it's raining, unbrella le jaana bhai");
    
} else if(weather === "cloudy"){
    console.log("jacket le ja bhai");
    
}else{
    console.log("sunny h ji aaj to");
    
}



let numberofGuest = 4;
let pizzaSize;

if(numberofGuest <= 2){
    pizzaSize = "small";
    
} else if(numberofGuest <= 5){
    pizzaSize = "medium";
    
}else{
    pizzaSize = "large";
}
console.log(pizzaSize);


function gradeMarks(marks){
    if(marks >= 90){
        return "you got a A grade"
    } else if(marks >= 80){
        return "you got a B grade"
    }else{
        return "you got a F grade"
    }
}
console.log(gradeMarks(82));
