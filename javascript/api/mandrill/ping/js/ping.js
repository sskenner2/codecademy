function log(obj) {
  $('#response').text(JSON.stringify(obj));
}

var m = new mandrill.Mandrill('fRuwp8srRLvKI28AEGmLCQ');

var params = {
  "message": {
    "from_email":"sskenner@gmail.com",
    "to":[{"email":"santana@codeblack.nyc"}],
    "subject": "who is?",
    "text": "i am"
  }
};

function sendTheMail() {
  m.messages.send(params, function(res) {
      log(res);
    },  function(err) {
      log(err);
    });
}
