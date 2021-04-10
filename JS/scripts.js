var height=prompt("Please enter your height in meters: ");
var weight=prompt("Please enter your weight in kilograms:");
newHeight=parseInt(height * height);
newWeight=parseInt(weight);

let BMI=(newWeight/newHeight);
if (BMI<18.5) {
  console.log("Your BMI indicates that you may be underweight.");
} else if (BMI>=18.5 && BMI<=24.9) {
  console.log("Your BMI is within the healthy range");
} else {
  console.log("Your BMI indicates that you may be overweight");
}

// coffee and tea cafe
var answer=confirm("Would you like some tea?");
if (answer="Yes") {
  console.log("Your hot cup of tea will e served shortly");
} else {
  console.log("Your cuppa coffee will be served shortly");
}