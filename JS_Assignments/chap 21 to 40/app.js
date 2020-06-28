//  =============== chap 21--25 ===================//

//  task 1

var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = alert("Good Morning " + firstName + " " + lastName);

//  task 2

var favPhone = prompt("Enter your favoraite Mobile Company with Model Series");
document.write(
  "<br>" +
    "My favorite Mobile is " +
    favPhone +
    "<br>" +
    "Length of string " +
    favPhone.length
);

// task 3

var word = "Pakistan";
document.write(
  "<br><br>" + "String " + word + "<br>" + "Index of 'n': " + word.indexOf("n")
);

// task 4

var word = "Hello World";
document.write(
  "<br><br>" +
    "String " +
    word +
    "<br>" +
    "Last Index of 'l': " +
    word.lastIndexOf("l")
);

// task 5

var word = "Pakistani";
document.write(
  "<br><br>" +
    "String " +
    word +
    "<br>" +
    "Character at Index 3: " +
    word.charAt(3)
);

// task 6

var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fulName = firstName.concat(lastName);
document.write("<br><br>" + "Fullname is : " + fulName);

// task 7
var city = "Hyderabad";
var newCity = city.replace(/hyder/gi, "Islam");
document.write(
  "<br><br>" + "City " + city + "<br>" + "after replacement:" + newCity
);

// task 8

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/and/g, "&");
document.write("<br><br>" + message);

// task 9
var val = "472";
document.write("<br><br>" + "value : " + val);
document.write("<br>" + "Type : " + typeof val);
val = Number(val);
document.write("<br>" + "value : " + val);
document.write("<br>" + "Type : " + typeof val);

// task 10

var input = prompt("Enter word");
document.write("<br><br>" + "User input: " + input);
document.write("<br>" + "Uppercase: " + input.toUpperCase());

// task 11

var input = prompt("Enter word");
var firstchar = input.slice(0, 1).toUpperCase();
var otherchar = input.slice(1);
var titleCase = firstchar.concat(otherchar);
document.write("<br><br>" + "User input: " + input);
document.write("<br>" + "Title Case: " + titleCase);

// task 12

var num = 35.36;
var str = String(num);
var indexOff = str.indexOf(".");
var sclicing1 = str.slice(0, indexOff);
var sclicing2 = str.slice(indexOff + 1);
var result = sclicing1 + sclicing2;
document.write("<br><br>" + "Number: " + num);
document.write("<br>" + "String: " + result);

// task 13

var userName = prompt("Enter user name");
for (var i = 0; i < userName.length; i++) {
  if (
    userName[i] === "@" ||
    userName[i] === "." ||
    userName[i] === "," ||
    userName[i] === "!"
  ) {
    alert("Enter valid user name");
  }
}

// task 14

var A = ["cake", "applepie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC bakery please Enter your order");
flag = false;
for (var i = 0; i < A.length; i++) {
  if (userSearch.toLowerCase() === A[i]) {
    alert(
      "Cookies is available at index " +
        A.indexOf(userSearch.toLowerCase()) +
        " in our Bakery"
    );
    flag = true;
  }
}

if (flag === false) {
  alert("we are sorry " + userSearch + " is not available in our bakery");
}

// task 15

var userPass = prompt("Enter Password");
var alpha = false;
var num = false;

for (var i = 0; i < userPass.length; i++) {
  if (
    (userPass.charCodeAt(i) >= 65 && userPass.charCodeAt(i) <= 90) ||
    (userPass.charCodeAt(i) >= 97 && userPass.charCodeAt(i) <= 122)
  ) {
    alpha = true;
  } else if (userPass.charCodeAt(i) >= 48 && userPass.charCodeAt(i) <= 57) {
    num = true;
  }
}

if (userPass !== null) {
  if (userPass.length < 6) {
    alert("Enter Valid Pasword");
  } else if (
    userPass.slice(0, 1).charCodeAt(0) >= 48 &&
    userPass.slice(0, 1).charCodeAt(0) <= 57
  ) {
    alert("Enter Valid Pasword");
  } else if (alpha === false || num === false) {
    alert("Enter Valid Pasword");
  }
}

// task 16

var university = "University of Karachi";
var splitedWord = university.split("");
document.write("<br><br>");

for (var i = 0; i < splitedWord.length; i++) {
  document.write("<br>" + splitedWord[i]);
}

// task 17
var userInput = prompt("Enter input");
var lastWord = userInput.charAt(userInput.length - 1);
document.write("<br><br>" + "User input : " + userInput);
document.write("<br><br>" + "Last character of input : " + lastWord);

// task  18

var sentence = "The quick brown fox jumps over the lazy dog";
sentence = sentence.replace(/the/gi, "the");
var count = 0;
var matchWord = "the";
for (var i = 0; i < sentence.length; i++) {
  if (sentence.slice(i, i + 3) === matchWord) {
    count++;
  }
}
document.write("<br><br>" + "Text : " + sentence);
document.write(
  "<br><br>" + "There are " + count + " occurrence(s) of word " + matchWord
);

// document.write("<br><br>");

//  =============== chap 25--30 ===================//

// task 1

var userNum = prompt("Enter number", 3.45214);
document.write("<br><br >" + "number : " + Number(userNum));
document.write("<br>" + "round off value : " + Math.round(userNum));
document.write("<br>" + "floor value : " + Math.floor(userNum));
document.write("<br>" + "ceil value: " + Math.ceil(userNum));

// task 2

var userNum = prompt("Enter number", -3.45214);
document.write("<br><br>" + "number : " + Number(userNum));
document.write("<br>" + "round off value : " + Math.round(userNum));
document.write("<br>" + "floor value : " + Math.floor(userNum));
document.write("<br>" + "ceil value: " + Math.ceil(userNum));

// task 3

var num = -4;
document.write(
  "<br><br>" + "absolute value of: " + num + " is " + Math.abs(num)
);

// task 4

var randomNum = Math.random();
var dice = Math.floor(randomNum * 6 + 1);
document.write("<br><br>" + "Random dice value is : " + dice);

// task 5

var randomNum = Math.random();
var toss = Math.floor(randomNum * 2 + 1);
if (toss === 2) {
  document.write("<br><br>" + "Random coin value is Heads ");
} else if (toss === 1) {
  document.write("<br><br>" + "Random coin value is Tails ");
}

// task 6

var randomNum = Math.random();
var number = Math.floor(randomNum * 100 + 1);
document.write("<br><br>" + "Random  number between 1 to 100 is : " + number);

// task 7

var userWeight = prompt("Enter your weight in kilograms");
userWeight = userWeight.toLowerCase();
userWeightNum = parseFloat(userWeight.slice(0, userWeight.indexOf("k")));
document.write("<br><br>" + "User Weight is : " + userWeightNum + " kilograms");

// task 8

var randomNum = Math.random();
var number = Math.floor(randomNum * 10 + 1);
var userGuess = +prompt("Guess number between 1 to 10");
if (userGuess === number) {
  alert("Bravo! you guest the correct number");
} else {
  alert("Try again !");
}

//  =============== chap 31--34 ===================//

// task1

var currentDaye = new Date();
document.write("<br><br>" + currentDaye);

// task 2

var currentDaye = new Date();
var months = [
  "january",
  "febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agust",
  "September",
  "October",
  "November",
  "December",
];
var currentMonth = currentDaye.getMonth();
document.write("<br><br>" + "Current Month is : " + months[currentMonth]);

// task 3

var currentDaye = new Date();
var months = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var currentDay = currentDaye.getDay();
document.write("<br><br>" + "Current Day is : " + months[currentDay]);

// task 4

var currentDate = new Date();
// var currentDate = new Date("june 14, 2020");  //// date of Sunday
var months = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var currentDay = currentDate.getDay();
if (currentDay === 0 || currentDay === 6) {
  document.write("<br><br>" + "It's Fun day");
} else {
  document.write("<br><br>" + "It's working day");
}

// task 5

var currentDate = new Date();
var day = currentDate.getDate();
if (day >= 1 && day <= 15) {
  document.write("<br><br>" + "First fifteen days of month");
} else if (day >= 16 && day < 31) {
  document.write("<br><br>" + "Last fifteen days of month");
}

// task 6

var currentDate = new Date();
var milliSeconds = currentDate.getTime();
var minutes = (milliSeconds / (1000 * 60)).toFixed(2);

document.write("<br><br>" + "Current Date" + currentDate);
document.write(
  "<br><br>" + "Elasped Milliseconds Since January 1,1970" + milliSeconds
);
document.write("<br><br>" + "Elasped Mintues Since January 1,1970" + minutes);

// task 7

var currentDate = new Date();
var hour = currentDate.getHours();

if (hour < 12) {
  alert("It's PM");
} else if (hour >= 12) {
  alert("It's PM");
}

// task 8

var lastDate = new Date("Dec 31, 2020");
document.write("<br><br>" + "Later Date : " + lastDate);

// task 9

var date = new Date();
var _1st_Ramzan = new Date("June 18, 2015");
var diff = ((date - _1st_Ramzan) / (1000 * 60 * 60 * 24)).toFixed(1);
document.write(
  "<br><br>" +
    diff +
    " Days have passed since 1st Ramdan, " +
    _1st_Ramzan.getFullYear()
);

// task 10

var date = new Date();
var refDate = new Date("June 18, 2016");
var diff = ((date - refDate) / 1000).toFixed(1);
document.write(
  "<br><br>" +
    "On reference date :  " +
    refDate +
    ", <br> " +
    diff +
    "  Seconds had been passed since beginning, of " +
    refDate.getFullYear()
);

//  task 11

var date = new Date();
var hour = date.getHours() - 1;
var newDate = new Date();
newDate.setHours(hour);
document.write("<br><br>" + " current date ", date);
document.write("<br><br>" + "one hour ago it was : " + newDate);

//  task 12

var date = new Date();
var year = date.getFullYear() - 100;
var newDate = new Date();
newDate.setFullYear(year);
document.write("<br><br>" + " current date ", date);
document.write("<br><br>" + "100 years back it was : " + newDate);

//  task 13

var date = new Date().getTime();
var userDOB = prompt("Enter Date of Birth *jan 30, 2000*", "Sep 27, 2000");
var dob = new Date(userDOB);
var dobMilli = dob.getTime();
var diff = date - dobMilli;
var age = (diff / (1000 * 60 * 60 * 24 * 30 * 12)).toFixed(2);
var dobYear = dob.getFullYear();

document.write("<br><br>" + "Your age is : " + age);
document.write("<br><br>" + "Your birth year is : " + dobYear);

//  task 14

var date = new Date();
var monthsList = [
  "january",
  "febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agust",
  "September",
  "October",
  "November",
  "December",
];
var userName = "ABC Customer";
var month = date.getMonth();
var units = 290;
var unitCharges = 10;
var latecharge = 350;

var billWithDueDate = units * unitCharges;
var billAfterDueDate = billWithDueDate + latecharge;

document.write("<br>" + "<h1>K-Electric Bill</h1>");
document.write("<br><br>" + "Current Name : " + userName);
document.write("<br>" + "Month : " + monthsList[month]);
document.write("<br>" + "Number of Units : " + units);
document.write("<br>" + "Charges per unit : " + unitCharges);

document.write(
  "<br><br>" + "Net Amount Payable (With due Date) :" + billWithDueDate
);
document.write("<br>" + "Late payment surcharges : " + latecharge);
document.write(
  "<br>" + "Net Amount Payable (after due Date) : " + billAfterDueDate
);

document.write("<br>");

// ====== condition bill calculation Extra Work ======//

var bill;
if (date.getDate() >= 0 && date.getDate() <= 7) {
  bill = units * unitCharges;
} else if (date.getDate() > 7) {
  bill = units * unitCharges + latecharge + " late charges applied";
}

//  =============== chap 35--38 ===================//

// task 1

function CurrentDate() {
  return new Date();
}
var date = CurrentDate();
document.write("<br><br>" + date);

// task 2

var fname = prompt("Enter first Name");
var lname = prompt("Enter Last Name");
function userGreet(fname, lname) {
  name = fname + " " + lname;
  var greet = "good morning! " + name;
  return greet;
}
greeting = userGreet(fname, lname);
document.write("<br><br>" + greeting);

// task 3

var num1 = +prompt("Enter num1");
var num2 = +prompt("Enter num2");
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var result = add(num1, num2);
document.write("<br><br>" + result);

// task 4

var num1 = +prompt("Enter num1");
var operater = prompt("Enter operater");
var num2 = +prompt("Enter num3");
function Calc(num1, operater, num2) {
  if (operater === "+") {
    var result = num1 + num2;
  } else if (operater === "-") {
    var result = num1 - num2;
  } else if (operater === "/") {
    var result = num1 / num2;
  } else if (operater === "*") {
    var result = num1 * num2;
  } else if (operater === "%") {
    var result = num1 % num2;
  }
  return result;
}
var cal = Calc(num1, operater, num2);
document.write(
  "<br><br>" +
    "result of " +
    num1 +
    " " +
    operater +
    " " +
    num2 +
    " is : " +
    cal
);

// task 5

var num = +prompt("Square root of :", 5);
function Sq(num) {
  var sq = num ** 2;
  return sq;
}

var square = Sq(num);
document.write("<br><br>" + "Square of " + num + " is : " + square);

// task 6

var num = +prompt("Factorial of :", 5);
var mul = num;
function factorial(num) {
  for (var i = num - 1; i >= 1; i--) {
    mul *= i;
  }
  return mul;
}
var res = factorial(num);
document.write("<br><br>" + "Factorial of " + num + " is " + res);

// ****** With Recurssive Function ***********//

var num = +prompt("Factorial of :", 5);
function Fac(num) {
  if (num === 1) {
    return 1;
  }
  return num * Fac(num - 1);
}
res = Fac(num);
document.write("<br><br>" + "Factorial of " + num + " is " + res);

// task 7

var num1 = +prompt("counting from :", 5);
var num2 = +prompt("too :", 50);
function counting(start, end) {
  document.write("<br><br>" + "Counting from " + num1 + " too " + num2);
  for (var i = start; i <= end; i++) {
    document.write("<br>" + i);
  }
}
counting(num1, num2);

// task 8

var base = +prompt("Enter Base");
var perpendicular = +prompt("Enter perpendicular");

function Hypo(base, perpen) {
  function Square(num) {
    return num ** 2;
  }
  var hypotenuse = Square(base) + Square(perpendicular);
  return hypotenuse;
}
var res = Hypo(base, perpendicular);
document.write("<br><br>" + "Hypotenuse<sup>2</sup> = " + res);

// task 9

var width = 45;
var height = 30;

function Area(width, height) {
  var area = width * height;
  return area;
}

Area(35, 20);
Area(width, height);

document.write(
  "<br><br>" +
    "Area of width " +
    width +
    "and " +
    " height " +
    height +
    " is : " +
    Area(width, height)
);

// task 10

var palindrome = prompt("Enter a palindrome word", "civic");
function Palindrome(word) {
  var revWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    revWord += word[i];
  }
  if (revWord === word) {
    return alert(word + " is a palindrome word");
  } else {
    return alert(word + " is not a palindrome word");
  }
}
Palindrome(palindrome);

// task 11

var sentence = "the quick brown fox";
function Sentence(sentence) {
  var splitWord = sentence.split(" ");
  for (var i = 0; i < splitWord.length; i++) {
    var word = splitWord[i];
    word = word[0].toUpperCase() + word.slice(1);
    splitWord[i] = word;
  }
  var joinedSen = splitWord.join(" ");
  return joinedSen;
}

Sentence(sentence);

// task 12

var sentence = "Web Development Tutorial";
function Sentence(sentence) {
  var splitWord = sentence.split(" ");
  var wordLen = 0;
  var word;
  for (var i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length > wordLen) {
      wordLen = splitWord[i].length;
      var word = splitWord[i];
    }
  }
  return word;
}

Sentence(sentence);

// task 13

//  *****************  Case-Sensitive   ******************//

var sentence = "JSResourceS.com";
var letter = "o";
function LetterCount(sentence, letter) {
  var count = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence.slice(i, i + 1) === letter) {
      count++;
    }
  }
  return count;
}

var res = LetterCount(sentence, letter);
document.write(
  "<br><br>" +
    "letter " +
    letter +
    " is " +
    res +
    " time in " +
    sentence +
    " (Case Senstive Find)"
);

//  ***************** non Case-Sensitive   ******************//

var sentence = "JSResOurceS.com";
var letter = "o";
function LetterCount(sentence, letter) {
  var count = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence.slice(i, i + 1).toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

var res = LetterCount(sentence, letter);
document.write(
  "<br><br>" +
    "letter " +
    letter +
    " is " +
    res +
    " time in " +
    sentence +
    " (Non Case Senstive Find)"
);

// task 14

var radius = 20;

function calcCircumference(radius) {
  var res = 2 * Math.PI * radius;
  return res;
}

function calcArea(radius) {
  var res = Math.PI * radius ** 2;
  return res;
}

var circum = calcCircumference(radius);
var areaofCircle = calcArea(radius);
document.write("<br><br>" + "The circumference is " + circum.toFixed(2));
document.write("<br><br>" + "The area is " + areaofCircle.toFixed(2));
