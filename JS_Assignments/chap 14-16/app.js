//  1

var Student_List = [];
// var Student_List = Array();

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






// alert(studentsScore);
// document.write(+"<br>")