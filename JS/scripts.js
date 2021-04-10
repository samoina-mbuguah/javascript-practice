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
alert("Welcome to the Godzilla cafe :)");
var answer=prompt("Would you like some tea?");
if (answer==="Yes") {
  console.log("Your hot cup of tea will be served shortly");
} else {
  console.log("Your cuppa coffee will be served shortly");
}

//Display your test score
var testScore=parseInt(prompt("Please enter your test score: "))
if (testScore>=0 && testScore<=20) {
  console.log("Your test score grade is E");
} else if (testScore>=21 && testScore<=40) {
    console.log("Your test score grade is D");
  } else if (testScore>=41 && testScore<=60) {
    console.log("Your test score grade is C");
  } else if (testScore>=61 && testScore<=80) {
    console.log("Your test score grade is B");
  } else if (testScore>=81 && testScore<=100) {
    console.log("Your test score grade is D");
  }