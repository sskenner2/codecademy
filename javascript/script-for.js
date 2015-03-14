/*jshint multistr:true */

>> SYNTAX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
for (initialization; condition; increment) {
  // statements/code block
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (var i = start; i < end; i++) {
  // statements/code block
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var cars = [];
var i = 0;
var text = "";

cars = ["BMW","Volvo","Saab","Ford"];

for (;cars[i];) {
    text += cars[i] + "<br>";
    i++;
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
  if (text[i] === "E") {
    // If we find it, add characters up to
    // the length of my name to the array
    for(var j = i; j < (myName.length + i); j++) {
      hits.push(text[j]);
    }
  }
}

if (hits.length === 0) {
  console.log("Your name wasn't found!");
} else {
  console.log(hits);
}

>> loops >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
http://webcheatsheet.com/javascript/loops.php#break&continue

>> for loops
console.log("<h1>Multiplication table</h1>");
console.log("<table border=2 width=50%");

for (var i = 1; i <= 9; i++ ) {   //this is the outer loop
  console.log("<tr>");
  console.log("<td>" + i + "</td>");

   for ( var j = 2; j <= 9; j++ ) { // inner loop
        console.log("<td>" + i * j + "</td>");
    }

   console.log("</tr>");
}

console.log("</table>");

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var total = 0;
var even = 0;

for ( x = 1, y = 1; x <= 10; x++, y++ ) {
  if ( ( y % 2 ) == 0 ) {
    even = even + y;
  }
  total = total + x;
}

console.log( "The total sum: " + total + "<br>");
console.log( "The sum of even values: " + even );



