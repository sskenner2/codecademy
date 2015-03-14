>> SYNTAX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//initialization

while (condition) {
  // statements/code block
  // increment
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var i = start;

while (i < end) {
  // statements/code block
  i++
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//
var loop = function (j) {
//use j as final conditional statement in the while loop.
  var i = 0;

  while(i < j) {
    // Your code goes here!
    console.log ("I'm looping!");
    i ++;
  }
};

loop (3)  // or any other number.

//
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
  console.log("Heads! Flipping again...");
  var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
//
understand = true;

while(understand){
  console.log("I'm learning while loops!");
  //Change the value of 'understand' here!
  understand = false;
}
//
var bool = true;

wh  ile(bool){
    console.log("Less is more!");
    bool = false;
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var i=0;

while (i<=10) //Output the values from 0 to 10
{
  console.log(i + "<br>")
  i++;
}

var month_array = new Array();

month_array[0] = "January";
month_array[1] = "February";
month_array[2] = "March";
month_array[3] = "April";
month_array[4] = "May";
month_array[5] = "June";
month_array[6] = "July";
month_array[7] = "August";
month_array[8] = "September";
month_array[9] = "October";
month_array[10] = "November";
month_array[11] = "December";

console.log('<select name="day">');
var i = 1;
while ( i <= 31 ) {
   console.log('<option value=' + i + '>' + i + '</option>');
    i++;
}
console.log('</select>');

console.log('<select name="month">');
var i = 0;
while ( i <= 11 ) {
   console.log('<option value=' + i + '>' + month_array[i] + '</option>');
   i++;
}
console.log('</select>');

console.log('<select name="year">');
var i = 1900;
while ( i <= 2005 ) {
   console.log('<option value=' + i + '>' + i + '</option>');
   i++;
}
console.log('</select>');
