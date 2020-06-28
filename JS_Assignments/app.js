//   ======== chapter 1 ================ //

// 1
alert("Hello user");

//2
alert("Error! please enter valid password");

// 3
alert("welcome to JS land... \nhappy coding");

//4
alert("welcome to JS land");

alert("Prevent this page to create addition dialogs");

// 5 created on web browser
alert("i can create JS alert through my web browser");






//   ======== chapter 2 ================ //

// 1
var username;

// 2
var myName = "Abdullah Jamshed";

// 3
var message = "Hello World";
alert(message);

// 4

var name = "student";
var age = "19 years old";
var course = "certified mobile applicatgion developer";

alert(name);
alert(age);
alert(course);

// 5
var food = "DANIAL";

alert(
  food.slice(0, 6) +
    "\n" +
  food.slice(0, 5) +
    "\n" +
    food.slice(0, 4) +
    "\n" +
    food.slice(0, 3) +
    "\n" +
    food.slice(0, 2) +
    "\n" +
    food.slice(0, 1)
);

// 6

var email = "example@gmail.com";
alert("my email address is " + email);

// 7

var book = "A smarter way to learn JavaScript";
alert("i am trying to learn " + book);

// 8

document.write("i can writ HTML through javascript");





//   ======== chapter 3 ================ //

// 1

var age = 20;
alert("i am 20 year old");

// 2
var nTime = 14;
alert("you visit our webiste " + nTime + " time");

// 3
var birthYear = 2000;
document.write("my birth year is " + birthYear);
document.write("<br>data type of birth year is " + typeof birthYear);

// 4

var name = "Jhon Doe";
var title = "T-shirts";
var quatity = "5";

document.write(
  "<br><br>" +
    "<b>" +
    name +
    "</b>" +
    " ordered " +
    "<b>" +
    quatity +
    title +
    "</b>" +
    "(s) on xyz.com"
);








//   ======== chapter 4 ================ //

// 1

var var1, var2, var3;

// 2

// legal var
var $legalVariable;
var _legalVariable;
var legalVariable_1;
var legalVariabl12;
var legalVariable;

// illegal var

var alert;
// var 1legalVariable;
// var legal Variable;
// var @legalVariable;
// var legal-Variable;

// 3

document.write(
  "<h1>Rules for naming JS variables</h1>" +
    "<br>" +
    "variable name can contain only letters, numbers, dollar signs, and underscores. For example $my_1stVariable " +
    "<br><br>" +
    "Variables must begin with a Dollar sign($), underscore(_) or letter. For example $name, _name or nam" +
    "<br><br>" +
    "Variable names are case Sensitive" +
    "<br><br>" +
    "Variable names should not be JS keyword"
);








//   ======== chapter 5 ================ //

//  1
var num1 = +prompt("enter number", 0);
var num2 = +prompt("enter number", 0);
fnum = num1 + num2;
document.write("Sum of " + num1 + " & " + num2 + " is " + fnum);

// 2
var num1 = +prompt("enter number", 0);
var num2 = +prompt("enter number", 0);
fnum = num1 / num2;
document.write(
  "<br><br>" + "Divsion of " + num1 + " & " + num2 + " is " + fnum
);

var num1 = +prompt("enter number", 0);
var num2 = +prompt("enter number", 0);
fnum = num1 - num2;
document.write(
  "<br><br>" + "subraction of " + num1 + " & " + num2 + " is " + fnum
);

var num1 = +prompt("enter number", 0);
var num2 = +prompt("enter number", 0);
fnum = num1 * num2;
document.write(
  "<br><br>" + "multyply of " + num1 + " & " + num2 + " is " + fnum
);

var num1 = +prompt("enter number", 0);
var num2 = +prompt("enter number", 0);
fnum = num1 % num2;
document.write(
  "<br><br>" + "modules of " + num1 + " & " + num2 + " is " + fnum
);

// 3

// var val ;
// var res = val.valueOf()
// document.write("<br><br>"+res)

var val = 2;
var res = val.valueOf();
document.write("<br><br> Value after variable declaration is: " + res);

val++;

var res = val.valueOf();
document.write("<br><br> Value after after increment is: " + res);

val += 7;
document.write("<br><br>Value after addition is:" + val.valueOf());

val--;
document.write("<br><br>Value after decrement is:" + val.valueOf());

val = val % 3;
document.write("<br><br>the reminder is:" + val.valueOf());

// 4

var cost = 600;
var quantity = 5;
document.write(
  "<br><br>" +
    "total cost to buy " +
    quantity +
    " ticket of movie is " +
    quantity * cost +
    " PKR "
);

// 5
document.write("<br><br>" + 5 + " X " + 1 + " = " + 5 + "<br>");
document.write(5 + " X " + 2 + " = " + 10 + "<br>");
document.write(5 + " X " + 3 + " = " + 15 + "<br>");
document.write(5 + " X " + 4 + " = " + 20 + "<br>");
document.write(5 + " X " + 5 + " = " + 25 + "<br>");
document.write(5 + " X " + 6 + " = " + 30 + "<br>");
document.write(5 + " X " + 7 + " = " + 35 + "<br>");
document.write(5 + " X " + 8 + " = " + 40 + "<br>");
document.write(5 + " X " + 9 + " = " + 45 + "<br>");
document.write(5 + " X " + 10 + " = " + 50 + "<br>");

// var table = 5
// for(var i=0;i<=10;i++){
//     document.write(table+ " X "+i+" = "+(table*i)+"<br>");
// }

// 6

var temC = 24;
var temF = 75;

var temInCelsius = (temF - 32) * (5 / 9);
var temInfer = temC * (5 / 9) + 32;

document.write("<br><br>" + temC + "C is " + temInfer + " F");
document.write("<br><br>" + temF + "F is " + temInCelsius + " C");

// 7

var price1 = 600;
var price2 = 304;
var quant1 = 6;
var quant2 = 2;
var shiping = 45;

document.write("<br><br>" + "price of item1 is " + price1);
document.write("<br>" + "quatitiy of item1 is " + quant1);
document.write("<br>" + "price of item2 is " + price2);
document.write("<br>" + "quatitiy of item2 is " + quant2);

var total = price1 * quant1 + price2 * quant2 + shiping;
document.write("<br>" + "total cost is" + total);

// 8

var totalMarks = 850;
var obtainedMarks = 683;
var percentage = (obtainedMarks * 100) / totalMarks;

document.write("<br><br>" + "total marks is " + totalMarks);
document.write("<br><br>" + "obatained marks is " + obtainedMarks);
document.write("<br><br>" + "percentage is " + percentage + "%");

// 9
var dollerinPak = 104.8;
var saudiRiyal = 28;
var riyals = 25;
var dollers = 10;

var totalcurrency = dollerinPak * dollerinPak + saudiRiyal * riyals;
document.write("<br><br>" + "total currency is : " + totalcurrency + "PKR");

// 10

var num = 89;
num =num + 45;
num = num * 5;
num = num / 3;
num = num - 54;
document.write("<br><br>"+"final number is  "+num);

var num = 500;
num = (num + 89) / (2 * 2) - 46;
document.write("<br><br>" + "final number is  " + num);

// 11

var birthYear = 1990;
var currentYear = 2018;
var age = currentYear - birthYear;
document.write("<br><br>" + "your age is : " + age);

// 12

var radius = 20;
var pie = 3.142;
var cirrcum = 2 * pie * radius;
var area = pie * radius ** 2;

document.write("<br><br>" + "Radius of circle is : " + age);
document.write("<br><br>" + "circumfrence of circel is: " + cirrcum);
document.write("<br><br>" + "Area of circel is: " + area);

// 13

var snack = "choclate chip";
var cage = 20;
var eage = 65;
var amountperday = 2;
var totalReq = (eage - cage) * (amountperday * 30 * 12);
document.write(
  "<br><br>" +
    "you will need " +
    totalReq +
    snack +
    "to last you until the rip old age 0f " +
    eage
);






//   ======== chapter 6-9 ================ //

// 1

var num = prompt("enter num");

document.write("Result: <br>"+"the value a is: "+num+ " <br>");


document.write("the value ++a is: "+(++num)+ " <br>");
document.write("Now the value ++a is: "+num+ " <br>");

// num++;
document.write("the value a++ is: "+(num++)+ " <br>");
document.write("Now the value a is: "+num+ " <br>");

// --num;
document.write("the value --a is: "+(--num)+ " <br>");
document.write("Now the value a is: "+num+ " <br>");

// num--
document.write("the value a-- is: "+(num--)+ " <br>");
document.write("Now the value a is: "+num+ " <br>");


// 2
var a = 2;
var b = 1;

var result = --a - --b + ++b + b--;
//            1  -  0  +  1  +  1 

document.write("Now a is: "+a+ " <br>"); 
document.write("Now a is: "+b+ " <br>"); 
document.write("Now result is: "+result+ " <br>"); 


// 3
var userName = prompt("enter your name","user");
alert("welcome "+userName);

// 4 question not available


// 5

var table = prompt("enter table",5);

document.write("<br>"+table+" X " + 1 + " = "+ table*1+ "<br>");
document.write("<br>"+table+" X " + 2 + " = "+ table*2+ "<br>");
document.write("<br>"+table+" X " + 3 + " = "+ table*3+ "<br>");
document.write("<br>"+table+" X " + 4 + " = "+ table*4+ "<br>");
document.write("<br>"+table+" X " + 5 + " = "+ table*5+ "<br>");
document.write("<br>"+table+" X " + 6 + " = "+ table*6+ "<br>");
document.write("<br>"+table+" X " + 7 + " = "+ table*7+ "<br>");
document.write("<br>"+table+" X " + 8 + " = "+ table*8+ "<br>");
document.write("<br>"+table+" X " + 9 + " = "+ table*9+ "<br>");
document.write("<br>"+table+" X " + 10 + " = "+ table*10+ "<br>");



// 6
var sub1 = prompt("enter subject name","english");
var sub2 = prompt("enter subject name","math");
var sub3 = prompt("enter subject name","urdu");


var Msub1 = +prompt("enter subject marks of "+sub1);
var Msub2 = +prompt("enter subject marks of "+sub2);
var Msub3 = +prompt("enter subject marks of "+sub3);

var totalMarks = 100;
var obtainedMarks = Msub1+Msub2+Msub3;

document.write("<br><br>"+"<table><tr><th>Subjects</th><th>Total Marks</th><th>Obatined Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+Msub1+"</td><td>"+((Msub1*100)/100)+"%"+"</td></tr></tr><tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+Msub2+"</td><td>"+((Msub2*100)/100)+"%"+"</tr><tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+Msub3+"</td><td>"+((Msub3*100)/100)+"%"+"<tr><td></td><th>"+300+"</th><th>"+obtainedMarks+"</th><th>"+((obtainedMarks*100)/300)+"%"+"</th></tr>+</table>");






//   ======== chapter 9-11 ================ //

// 1

var city = prompt("Enter city name","Karachi");

if(city.toLowerCase() === "karachi"){
    alert("Welcome to city of lights");
}


// 2

var gender = prompt("Enter your gender","male");
if(gender==="female"){
    alert("Hello"+" ma'am");
}
else if(gender.toLowerCase()==="male"){
    alert("Hello"+" sir");
}



// 3


var color = prompt("Enter color","red");

if(color.toLowerCase()==="red"){
    document.write("<br>"+"Must stop"+"<br>");
}else if(color.toLowerCase()==="yellow"){
    document.write("<br>"+"Ready to Move"+"<br>");
}else if(color.toLowerCase()==="green"){
    document.write("<br>"+"Move Now"+"<br>");
}

// 4

var fuel = +prompt("Enter Quantity");
if(fuel<=0.25){
    alert("Please refill the fuel in your car");
}

// 5

var a = 4; 
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}

var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
}

if (c === 13){ 
    alert("condition 2 is true"); 
} 

if (++c < 14){ 
    alert("condition 3 is true"); 
}

if(c === 14){ 
    alert("condition 4 is true"); 
}


var materialCost = 20000; var laborCost = 2000;
var totalCost = materialCost + laborCost; 

if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}

if (true){ 
    alert("True"); } 

if (false){ 
    alert("False"); 
}

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}

// 6

var sub1 = +prompt("enter Marks of Subject");
var sub2 = +prompt("enter Marks of Subject");
var sub3 = +prompt("enter Marks of Subject");
var totalMarks = 300;
var Total = sub1+sub2+sub3;
var percentage = (Total/totalMarks)*100;
var Grade;
var Remarks;
if(percentage>=80&percentage<=100){
    Grade = "A-one"
    Remarks = "Excellent"
}else if(percentage>=70){
    Grade = "A"
    Remarks = "Good"
}else if(percentage>=60){
    Grade = "B"
    Remarks = "You need to improve"
}else if(percentage<60){
    Grade = "fail"
    Remarks = "Sorry"
}
document.write("<br>"+"Total marks: "+totalMarks+"<br>");
document.write("<br>"+"Obtained marks: "+Total+"<br>");
document.write("<br>"+"Percentage: "+percentage+"%<br>");
document.write("<br>"+"Grade: "+Grade+"<br>");
document.write("<br>"+"Remarks: "+Remarks+"<br>");

// 7

var screetNum = 7;
var guess = +prompt("Enter number");
if(guess===screetNum){
    document.write("<br>"+"Bingo! Correct answer"+"<br>");
}else if(++guess === screetNum){
    document.write("<br>"+"Close enough to the correct answer"+"<br>");
}

// 8

var num = +prompt("Enter num");

if(num!==0 & num%3===0){
            document.write("<br>"+num+" is divisible by 3"+"<br>");
    }else{
                document.write("<br>"+num+" is not divisble by 3"+"<br>");
        }
        
        
        
// 9

var num = +prompt("Enter num");
if(num%2!==0){
    document.write("<br>"+num+" is not a even number"+"<br>");
}else if(num%2===0){
    document.write("<br>"+num+" is a even number"+"<br>");
}


// 10

var tem = +prompt("enter temperature")
if(tem>=40){
    document.write("<br>"+"It is too hot outside.”"+"<br>");
}else if(tem>=30){
    document.write("<br>"+"“The Weather today is Normal”"+"<br>");
}else if(tem>=20){
    document.write("<br>"+"Today’s Weather is cool."+"<br>");
}else if(tem<10){
    document.write("<br>"+"OMG! Today’s weather is so Cool.”"+"<br>");
}


var val1 = +prompt("enter value one");
var oper = prompt("enter operater")
var val2 = +prompt("enter value two");
var result;

if(oper==="+"){
    result = val1 + val2;
}else if(oper==="-"){
    result = val1 - val2;
}else if(oper==="%"){
    result = val1 % val2;
}else if(oper==="*"){
    result = val1 * val2;
}else if(oper==="%"){
    result = val1 % val2;
}
alert(result)

        document.write("<br>"+""+"<br>");








//   ======== chapter 12-13 ================ //

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







//   ======== chapter 14-16 ================ //


//  1

var Student_List = [];
// var Student_List = new Array();

var stringArray = ["name", "age", "contact", "education"];
var numberArray = [1, 23, 44, 54];
var booleanArray = [true, false, true, true, false];

var mixArray = ["arham", false, 3, "moiz", 1, "kashif", 54, , true, 54];

var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write(
  "<h2>Qualification</h2><br>" +
    "1)" +
    qualifications[0] +
    "<br>" +
    "2)" +
    qualifications[1] +
    "<br>" +
    "3)" +
    qualifications[2] +
    "<br>" +
    "4)" +
    qualifications[3] +
    "<br>" +
    "5)" +
    qualifications[4] +
    "<br>" +
    "6)" +
    qualifications[5] +
    "<br>" +
    "7)" +
    qualifications[6] +
    "<br>" +
    "8)" +
    qualifications[7]+
    "<br>"
);


var names = ["arham","moiz","fahad"];
var score = [467,380,489];

document.write("Score of "+names[0]+" is "+score[0]+" Percentage is "+((score[0]/500)*100)+"%<br>");
document.write("Score of "+names[1]+" is "+score[1]+" Percentage is "+((score[1]/500)*100)+"%<br>");
document.write("Score of "+names[2]+" is "+score[2]+" Percentage is "+((score[2]/500)*100)+"%<br>");

// 9


var colors = ["orange","red","blue","green"];
document.write("<br>Colors"+"<br>"+colors+"<br>"+"<br>");

var userColor = prompt("Do you wants to add to the start","white");
colors.unshift(userColor);
document.write("Color in beginning"+"<br>"+colors+"<br>"+"<br>");

var userColor = prompt("Do you wants to add to the end","black");
colors.push(userColor);
document.write("Color in end"+"<br>"+colors+"<br>"+"<br>");

var userColor = prompt("Do you wants to add to the start","brown");
colors.unshift(userColor);
var userColor = prompt("Do you wants to add to the start","yellow");
colors.unshift(userColor);
document.write("Two Colors in beginning"+"<br>"+colors+"<br>"+"<br>");


colors.shift();
document.write("Colors after remove first one"+"<br>"+colors+"<br>"+"<br>");


colors.pop()
document.write("Colors after remove last one"+"<br>"+colors+"<br>"+"<br>");

var indexNum = +prompt("Enter index",2);
var colorName = prompt("Enter Color Name","grey");
colors.splice(indexNum,1,colorName);
document.write("Colors after Adding new color "+"<br>"+colors+"<br>"+"<br>");


var indexNum = +prompt("Enter index",2);
var numbOfcolrs = +prompt("Number of color want to delete!",2);
colors.splice(indexNum,numbOfcolrs);
document.write("Colors after delete colors "+"<br>"+colors+"<br>"+"<br>");

var studentsScore = [159,285,221,377,345,120]
studentsScore.sort();
document.write("Array after Sorting"+"<br>"+studentsScore+"<br>"+"<br>");



var cities = ["karachi","islamabad","quetta","peshawer","lahore"];
var selectedCities = cities.slice(0,3)
document.write("Array Of selected Cities"+"<br>"+selectedCities+"<br>"+"<br>");

var words = ["this" , "is", "my", "cat!"];
var joinedWords = words.join(" ");
alert(joinedWords);

var List = [];
var Item = prompt("Enter item name","keyboard");
List.push(Item);
var Item = prompt("Enter item name","mouse");
List.push(Item);
var Item = prompt("Enter item name","printer");
List.push(Item);
var Item = prompt("Enter item name","usb");
List.push(Item);

document.write("<br>"+"Devices"+"<br>"+List+"<br>");

var outed = List.shift();
document.write("<br>"+"Out:"+"<br>"+outed+"<br>");
var outed = List.shift();
document.write("<br>"+"Out:"+"<br>"+outed+"<br>");
var outed = List.shift();
document.write("<br>"+"Out:"+"<br>"+outed+"<br>");
var outed = List.shift();
document.write("<br>"+"Out:"+"<br>"+outed+"<br>");


var List2 = [];
var Item2 = prompt("Enter item name","keyboard");
List2.push(Item2);
var Item2 = prompt("Enter item name","mouse");
List2.push(Item2);
var Item2 = prompt("Enter item name","printer");
List2.push(Item2);
var Item2 = prompt("Enter item name","usb");
List2.push(Item2);

document.write("<br>"+"Devices"+"<br>"+List2+"<br>");

var outed2 = List2.pop();
document.write("<br>"+"Out:"+"<br>"+outed2+"<br>");
var outed2 = List2.pop();
document.write("<br>"+"Out:"+"<br>"+outed2+"<br>");
var outed2 = List2.pop();
document.write("<br>"+"Out:"+"<br>"+outed2+"<br>");
var outed2 = List2.pop();
document.write("<br>"+"Out:"+"<br>"+outed2+"<br>");








//   ======== chapter 17-20 ================ //


// 1
var emptyMultiArray = [[], [], []];
// 2
var multiArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

document.write("<br><br>");
// 3

for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

document.write("<br><br>");

// 4
var table = +prompt("Table of", 3);
var len = +prompt("lenght of table", 15);
for (var i = 1; i <= len; i++) {
  document.write(table + " X " + i + " = " + table * i + "<br>");
}

document.write("<br><br>");

// 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

document.write("<br><br>");


// 6

var counting = [];
for (var i = 1; i <= 15; i++) {
  counting.push(i);
}
document.write(counting + "<br>");

var rcounting = [];
for (var i = 10; i >= 1; i--) {
  rcounting.push(i);
}
document.write(rcounting + "<br>");

var even = [];
for (var i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    even.push(i);
  }
}
document.write(even + "<br>");

var odd = [];
for (var i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    odd.push(i);
  }
}
document.write(odd + "<br>");

var series = [];
for (var i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}
document.write(series + "<br>");

document.write("<br><br>");




// 7
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Search for bakery item ", "cookie");
var match = false;
for (var i = 0; i < items.length; i++) {
  if (search.toLowerCase() === items[i]) {
    alert(items[i] + " is available at index number " + i);
    match = true;
    break;
  }
}

if (match === false) {
  alert("We are sorry " + search + " is not available in our bakery");
}



// 8
var listNum = [23, 45, 54, 26, 12, 76, 34];
var greatestNum = listNum[0];
for (var i = 0; i < listNum.length; i++) {
  if (listNum[i] > greatestNum) {
    greatestNum = listNum[i];
  }
}
document.write("Array items "+listNum+"<br>");
document.write("The largest number is "+greatestNum)

document.write("<br><br>");


// 9
var listNum = [23, 45, 54, 26, 12, 76, 34];
var smalltestNum = listNum[0];
for (var i = 0; i < listNum.length; i++) {
  if (listNum[i] < smalltestNum) {
    smalltestNum = listNum[i];
  }
}
document.write("Array items "+listNum+"<br>");
document.write("The Smallest number is "+smalltestNum)

document.write("<br><br>");


// 10
var num = [];
for (var i=1; i<=20;i++){
    num.push((5*i));
}
document.write(num);




document.write("<br><br>");
