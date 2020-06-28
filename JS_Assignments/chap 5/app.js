//  1
var num1 = +prompt("enter number",0);
var num2 = +prompt("enter number",0);
fnum = num1+num2;
document.write("Sum of "+num1+" & "+num2+" is "+fnum);


// 2
var num1 = +prompt("enter number",0);
var num2 = +prompt("enter number",0);
fnum = num1/num2;
document.write("<br><br>"+"Divsion of "+num1+" & "+num2+" is "+fnum);



var num1 = +prompt("enter number",0);
var num2 = +prompt("enter number",0);
fnum = num1-num2;
document.write("<br><br>"+"subraction of "+num1+" & "+num2+" is "+fnum);

var num1 = +prompt("enter number",0);
var num2 = +prompt("enter number",0);
fnum = num1*num2;
document.write("<br><br>"+"multyply of "+num1+" & "+num2+" is "+fnum);


var num1 = +prompt("enter number",0);
var num2 = +prompt("enter number",0);
fnum = num1%num2;
document.write("<br><br>"+"modules of "+num1+" & "+num2+" is "+fnum);



// 3

// var val ;
// var res = val.valueOf()
// document.write("<br><br>"+res)

var val = 2;
var res = val.valueOf();
document.write("<br><br> Value after variable declaration is: "+res);

val++;

var res = val.valueOf();
document.write("<br><br> Value after after increment is: "+res);

val += 7;
document.write("<br><br>Value after addition is:"+val.valueOf());

val--;
document.write("<br><br>Value after decrement is:"+val.valueOf());

val = val%3; 
document.write("<br><br>the reminder is:"+val.valueOf());



// 4

var cost = 600;
var quantity = 5;
document.write("<br><br>"+"total cost to buy "+quantity+" ticket of movie is "+(quantity*cost)+" PKR ")


// 5
document.write("<br><br>"+5+ " X "+1+" = "+(5)+"<br>");
document.write(5+ " X "+2+" = "+(10)+"<br>");
document.write(5+ " X "+3+" = "+(15)+"<br>");
document.write(5+ " X "+4+" = "+(20)+"<br>");
document.write(5+ " X "+5+" = "+(25)+"<br>");
document.write(5+ " X "+6+" = "+(30)+"<br>");
document.write(5+ " X "+7+" = "+(35)+"<br>");
document.write(5+ " X "+8+" = "+(40)+"<br>");
document.write(5+ " X "+9+" = "+(45)+"<br>");
document.write(5+ " X "+10+" = "+(50)+"<br>");

// var table = 5
// for(var i=0;i<=10;i++){
//     document.write(table+ " X "+i+" = "+(table*i)+"<br>");
// }


// 6

var temC = 24;
var temF = 75;

var temInCelsius = (temF-32)*(5/9);
var temInfer = (temC*(5/9))+32;

document.write("<br><br>"+temC+"C is "+temInfer+ " F" );
document.write("<br><br>"+temF+"F is "+temInCelsius+ " C" );


// 7


var price1 = 600;
var price2 = 304;
var quant1 = 6;
var quant2 = 2;
var shiping = 45;

document.write("<br><br>"+"price of item1 is "+price1);
document.write("<br>"+"quatitiy of item1 is "+quant1);
document.write("<br>"+"price of item2 is "+price2);
document.write("<br>"+"quatitiy of item2 is "+quant2);

var total = (price1*quant1)+(price2*quant2)+shiping;
document.write("<br>"+"total cost is"+total);


// 8

var totalMarks = 850;
var obtainedMarks = 683;
var percentage = (obtainedMarks*100)/totalMarks;


document.write("<br><br>"+"total marks is "+totalMarks);
document.write("<br><br>"+"obatained marks is "+obtainedMarks);
document.write("<br><br>"+"percentage is "+percentage+"%");


// 9
var dollerinPak = 104.80;
var saudiRiyal = 28;
var riyals = 25;
var dollers = 10;

var totalcurrency = ((dollerinPak*dollerinPak)+(saudiRiyal*riyals));
document.write("<br><br>"+"total currency is : "+totalcurrency +"PKR");

// 10


// var num = 89;
// num =num + 45;
// num = num * 5;
// num = num / 3;
// num = num - 54;
// document.write("<br><br>"+"final number is  "+num);


var num = 500;
num = (((num+89)/(2*2))-46)
document.write("<br><br>"+"final number is  "+num)

// 11

var birthYear = 1990;
var currentYear = 2018;
var age = currentYear-birthYear;
document.write("<br><br>"+"your age is : "+age);


// 12


var radius = 20;
var pie = 3.142;
var cirrcum = (2*pie*radius);
var area = pie*(radius**2);

document.write("<br><br>"+"Radius of circle is : "+age);
document.write("<br><br>"+"circumfrence of circel is: "+cirrcum);
document.write("<br><br>"+"Area of circel is: "+area);


// 13

var snack = "choclate chip"
var cage = 20;
var eage = 65;
var amountperday = 2;
var totalReq = (eage-cage)*((amountperday*30)*12)
document.write("<br><br>"+"you will need "+totalReq+snack+"to last you until the rip old age 0f "+eage);