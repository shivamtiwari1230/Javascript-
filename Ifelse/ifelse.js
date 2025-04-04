// You just need to implement the isLeapYear function
function isLeapYear(year) {
    if(year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0)){
      return "Leap Year"
    } else{
      return "Not a Leap Year"
    }
      // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
    }
console.log(isLeapYear(1900));



    // You just need to implement the trafficLightAction function
function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  
     switch (color.toLowerCase()) {
          case "red":
              return "Stop";
          case "yellow":
              return "Slow Down";
          case "green":
              return "Go";
          default:
              return "Invalid Color"; 
      }
  }

  console.log(trafficLightAction("green"));
  
