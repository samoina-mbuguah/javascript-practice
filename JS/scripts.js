// var height=prompt("Please enter your height in meters: ");
// var weight=prompt("Please enter your weight in kilograms:");
// newHeight=parseInt(height * height);
// newWeight=parseInt(weight);

// let BMI=(newWeight/newHeight);
// if (BMI<18.5) {
//   console.log("Your BMI indicates that you may be underweight.");
// } else if (BMI>=18.5 && BMI<=24.9) {
//   console.log("Your BMI is within the healthy range");
// } else {
//   console.log("Your BMI indicates that you may be overweight");
// }

// // coffee and tea cafe
// alert("Welcome to the Godzilla cafe :)");
// var answer=prompt("Would you like some tea?");
// if (answer==="Yes") {
//   console.log("Your hot cup of tea will be served shortly");
// } else {
//   console.log("Your cuppa coffee will be served shortly");
// }

// //Display your test score
// var testScore=parseInt(prompt("Please enter your test score: "))
// if (testScore>=0 && testScore<=20) {
//   console.log("Your test score grade is E");
// } else if (testScore>=21 && testScore<=40) {
//     console.log("Your test score grade is D");
//   } else if (testScore>=41 && testScore<=60) {
//     console.log("Your test score grade is C");
//   } else if (testScore>=61 && testScore<=80) {
//     console.log("Your test score grade is B");
//   } else if (testScore>=81 && testScore<=100) {
//     console.log("Your test score grade is D");
//   }

//   // Display prompts depending on the weather using logical operators
//   var temperature = prompt("What is the temperature today?");
//   var raining = true;
//   if (temperature<0) {
//     console.log("Bruh, unataka kushika pneumonia? Wear a jacket");
//   } else if(temperature<15 && raining===true) {
//     console.log("Carry a jacket and an umbrella");
//   } else if(temperature<25) {
//     console.log("Have a beautiful day today :)")
//   } else {
//     console.log("Keep cool today!")
//   }

//   //Practice using arrays
//   let total=1;
//   let numbers=[3, 6, 9, 12]
//   numbers.map(function(number) {
//   total+=number;
//     });
//   console.log(number);  

//   //using names to uppercase. doesn't work because i did not return a value, and did not assign array to arrays.map
//   //let arrays=["kim", "sam", "jay"];
//   // toUpper=function(array) {
//   //   return array.toUpperCase();
//   // };
  

// // this works
//   // let arrays=["kim", "sam", "jay"];
//   // arrays=arrays.map(function (array) {
//   //   return array.toUpperCase();
//   // });

// //ian's way returns an error
// //  let arrays=["kim", "sam", "jay"];
// //  let arraysNew=arrays.map(function(arrayNew) {
// //    return array.toUpperCase();
// //  })

// //doesnot work, new array name assign returns undefined
// // let arrays=["kim", "sam", "jay"];
// // let nuArrays=arrays.map(function(nuArray) {
// //   return nuArray.toUpperCase();
// // });

// //This works, don't assign or use a let hapo kwa newArrays, it says undefined(guess because by default .map creates a new array). also, in the function, it uses from the old array, the (array), an argument, which must be the same in the function.
// // let arrays=["kim", "sam", "jay"];
// // newArrays=arrays.map(function (array) {
// //     return array.toUpperCase();
// //   });

// // //This works too, no let for new array
// // let arrays=["kim", "sam", "jay"];
// // nuArrays=arrays.map(function(nuArray) {
// //   return nuArray.toUpperCase();
// //  });

// //  //works
// // let numbers=[3, 6, 9, 12]
// // nuNumbers=numbers.map(function(number) {
// //   return number+1;
// // })

// // //using .forEach. below code does not work bcz numer is undefined
// // // let digits=[1, 2, 3, 4, 5]
// // // digits.forEach(function(digit) {
// // //   digit=digit+1;
// // // })

// // //works using forEach, (no new array, so you have to console.log.) also, total+=digit takes value of right operand, where total=0, adds it to a variable, in this case digit at index 0 which is 1, then reassigns to a whole new variable so that total is 1. repeats over thru the loop so console.log will give 15.
// // let total=0
// // let digits=[1, 2, 3, 4, 5];
// // digits.forEach(function(digit) {
// //   total+=digit;
// // });
// // console.log(total)

// // //arrow functions
// // // let people = []
// // // let brothers = ['jake','stanley','Ken']

// // // brothers.forEach(name=>{names.push(name)
// // // })

// // // console.log(people)

// // //derived from function Ian sent above. forEach name in brothers array, we want to push to new array called people. works
// // let people = []
// // let brothers = ['jake', 'stanley', 'Ken']

// // brothers.forEach(function (brother) {
// //   people.push(brother)
// // })

// // console.log(people)

// // //forEach
// // var numbers = [1,2,3,4,5];
// // var doubledNumbers = [];
// // numbers.forEach(function(number) {
// //   doubledNumbers.push(number * 2);
// // });
// // alert(doubledNumbers);

// // //can be replaced with .map() method as below
// // var numbers = [1,2,3,4,5];

// // var doubledNumbers = numbers.map(function(number) {
// // return number * 2;
// // });

// // alert(doubledNumbers);

  $(document).ready(function() {
    $("button.light").click(function() {
      $("body").removeClass();
      $("body").addClass("light-theme");
    });

  $("button.dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });
});
