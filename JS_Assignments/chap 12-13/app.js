// 1
var input = prompt("Enter number");

var typeOfInput = typeof input;

if (typeOfInput === "string") {
  if ((input.charCodeAt(0) >= 65) && (input.charCodeAt(0) <= 90)) {
    alert("Letter is uppercase");
  } else if ((input.charCodeAt(0) >= 97) && (input.charCodeAt(0) <= 122)) {
    alert("Letter is lowercase");
  } else if (typeof Number(input) === "number") {
    alert("Letter is number");
  }
}

// 2

var val1 = +prompt("Entger value one");
var val2 = +prompt("Entger value two");

if (val1 > val2) {
  alert("value one " + val1 + " is Greater");
} else if ("value two " + val2 > val1) {
  alert(val2 + " is Greater");
} else if (val1 === val2) {
  alert("value one " + val1 + " && two " + val2 + " both are equal");
}

// 3
var numb = +prompt("Enter Number");

if (numb < 0) {
  alert("Number is Negative");
} else if (numb === 0) {
  alert("Number is Zero");
} else if (numb > 0) {
  alert("Number is Positive");
}

// 4

var vowel = prompt("Enter single character");

if (vowel.length > 1 || vowel.length<1) {
    alert("Enter correct value!")
} else if (vowel.length === 1) {
  if (
    vowel.toLowerCase() === "a" ||
    vowel.toLowerCase() === "i" ||
    vowel.toLowerCase() === "o" ||
    vowel.toLowerCase() === "u" ||
    vowel.toLowerCase() === "e"
  ) {
    alert("It is vowel");
  }else {
    alert("Not a vowel");
  }
}

// 5

var orignalPass = "password";

var enteredPass = prompt("Enter password");

if (enteredPass.length === 0) {
  alert("Please enter your password");
} else {
  if (enteredPass === orignalPass) {
    alert("Correct! The password you entered matches the original password");
  } else {
    alert("Incorrect password");
  }
}

// 6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}else{
    greeting = "Good evening";
}

7

var timeString = prompt("Enter time");
var time = Number(timeString);

if (
  Number(timeString.slice(0, 2)) >= 0 &&
  Number(timeString.slice(0, 2)) <= 24 &&
  Number(timeString.slice(2, 4)) >= 0 &&
  Number(timeString.slice(2, 4)) <= 60
){
  if(time<0100 && time>=0000){
      alert("12:00 am")
  }else if(time<0200){
      alert("1:00 am")
  }else if(time<0300){
      alert("2:00 am")
  }else if(time<0400){
      alert("3:00 am")
  }else if(time<0500){
      alert("4:00 am")
  }else if(time<0600){
      alert("5:00 am")
  }else if(time<0700){
      alert("6:00 am")
  }else if(time<0800){
      alert("7:00 am")
  }else if(time<0900){
      alert("8:00 am")
  }else if(time<1000){
      alert("9:00 am")
  }else if(time<1100){
      alert("10:00 am")
  }else if(time<1200){
      alert("11:00 am")
  }else if(time<1300){
      alert("12:00 pm")
  }else if(time<1400){
      alert("1:00 pm")
  }else if(time<1500){
      alert("2:00 pm")
  }else if(time<1600){
      alert("3:00 pm")
  }else if(time<1700){
      alert("4:00 pm")
  }else if(time<1800){
      alert("5:00 pm")
  }else if(time<1900){
      alert("6:00 pm")
  }else if(time<2000){
      alert("7:00 pm")
  }else if(time<2100){
      alert("8:00 pm")
  }else if(time<2200){
      alert("9:00 pm")
  }else if(time<2300){
      alert("10:00 pm")
  }else if(time<2400){
      alert("11:00 pm")
  }
}else{
    alert("enter correct time !")
}
