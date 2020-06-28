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
