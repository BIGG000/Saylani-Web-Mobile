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

7

var screetNum = 7;
var guess = +prompt("Enter number");
if(guess===screetNum){
    document.write("<br>"+"Bingo! Correct answer"+"<br>");
}else if(++guess === screetNum){
    document.write("<br>"+"Close enough to the correct answer"+"<br>");
}

8

var num = +prompt("Enter num");

if(num!==0 & num%3===0){
            document.write("<br>"+num+" is divisible by 3"+"<br>");
    }else{
                document.write("<br>"+num+" is not divisble by 3"+"<br>");
        }
        
        
        
9

var num = +prompt("Enter num");
if(num%2!==0){
    document.write("<br>"+num+" is not a even number"+"<br>");
}else if(num%2===0){
    document.write("<br>"+num+" is a even number"+"<br>");
}


10

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
