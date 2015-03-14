>> SYNTAX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
if (/* some condition */) {
  // do something / code block
} else if (/* some other condition */) {
  // do something else / another code block
} else { // otherwise
  // do something else else / last code block
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
isNaN('string'); // => true
isNaN('NaN'); // => true
isNaN(undefinged); // => true
isNaN(13); // => false

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
swtich ( /*some expression*/ ) {
  case 'option1':
    // do something 1
    break;
  case 'option2':
    // do something 2
    break;
  case 'option3':
    // do something 3
    break;
  default:
    // if no match found do the default
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Complete lines 3 and 4!

var iLoveJavaScript = ;
var iLoveLearning = ;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var getReview = function (movie) {
  switch(movie) {
    case 'Toy Story 2':
      return "Great story. Mean prospector.";
    case 'Finding Nemo':
      return "Cool animation, and funny turtles.";
    case 'The Lion King':
      return "Great songs.";
    default:
      return "I don't know!";
  }
};
