/*var a = 4;

var b = "4";

var c = true;

var d = 4;

var e;

if (a != b){
    console.log('heeeeeey');
} else {
    console.log('Dang');
}
// you can also run multiple ifs and it will keep checking
if (a != b) {
    console.log('heeeeeey');
} */
/*if(){

}
if(){

}*/

//&& operator can be used in place of a nested if statement

//loops where you want it to print for the length of how many items in the list

/*let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++){
    console.log(names.length[i]);
}*/

//remainders
/*for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        console.log (i);
    }
}*/

// while loops
/*let a = 110;

while (a < 10) {
    console.log(a);
    a++;
}

do {
    console.log(a);
} while (a < 10)*/

var points = 0;
var pointsReset = false; 

for(var i = 0; i < 101 && points < 290; i++){
    if(points == 125 && pointsReset === false){
      points = 25;
      pointsReset = true;
    }else if(i % 2 === 0){
      points = points + 5
    }else if(i % 2 !== 0){
      points = points + 3
    }
        console.log("Turns:" + i + "Score:" + points);
    
}

//How to create a multiplication table with a for loop

var input = 3
var num = parseInt(input[0]);

for(num = 1; num <= 10; num++) {
    var result = num * input;
    console.log(`${input} x ${num} = ${result}`);
}
// another way to create a multiplication table
for(var i=1; i<=10; i++) {
    console.log(num +" x " + i + " = " + (num*i) );
}

//While loop that Check to see if userNumber is between 1 and 100. 
//If it is, create a while loop that prints all integers starting with userNumber to 100.
//If not, print "Your number was not between 1 and 100."


var input = 9 //userNumber input
var userNumber = 9;

//write your code here

if(userNumber < 0 && userNumber > 100){
   console.log("Your number is not between 1 and 100");
}while(userNumber <= 100){
        console.log(userNumber++);
}

//How to check if myGrade is passingGrade


var myGrade = 90;
var passingGrade = 70;

if(myGrade >= passingGrade){
    console.log("true");
}if(myGrade >= 90){
    console.log("true");
}else{
    console.log(false);
}

//write a for loop that prints every "x" amount of numbers
//example is for every 3rd number
for (i = 0; i <=99; i+=3){
    console.log(i);
}
//second example
for(var i = 0; i <= 99; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

