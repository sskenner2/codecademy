>> SYNTAX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//initialization
do {
  // statements/code block
  // increment
} while (condition);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var i = start;

do {
  // statements/code block
  // increment
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var i = 1;
var text = 0;

do {
  text += i;
  i++;
} while (i < 10);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var loopCondition = false;

do {
  console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);
