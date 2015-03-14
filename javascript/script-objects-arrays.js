
>> SYNTAX - objects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
OBJ LITERAL NOTATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var myObject = {
    key: value,
    key: 'string',
    key: num
  }

  var emptyObj = {};

OBJ CONSTRUCTOR >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var myOj = new Object();
>> add keys to obj:
  myObj["name"] = "string";
  myObj.name = "string";

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var phonebookEntry = {};

  phonebookEntry.name = 'O M';
  phonebookEntry.number = '### ### ####';
  phonebookEntry.phone = function() {
    console.log('blah' + this.name + '' + 'blah');
  }
  phonebookEntry.phone();

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var names = ["tyler", "marla", "narrator", "bob"];

  for (var i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i]);
  }

>> PROJECT - contact list >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");

>> PROJECT - FizzBuzz >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (i = 1; i < 21; i++) {
  //console.log(i);
  if (i % 3 || i % 5 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

