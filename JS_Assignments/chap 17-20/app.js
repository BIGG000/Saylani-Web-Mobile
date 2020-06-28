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