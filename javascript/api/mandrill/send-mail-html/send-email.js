function log(obj) {
  $('#response').text(JSON.stringify(obj));
}

var m = new mandrill.Mandrill('fRuwp8srRLvKI28AEGmLCQ');

var params = {
  "message": {
    "from_email":"sskenner@gmail.com",
    "to":[ { "email":"santana@codeblack.nyc"} ],
    "subject": "HTML send e-mizzle",
    "html":"<p>regular <b>BOLD</b> and <i>ITALICS</i> e-mizzle</p>",
    "auto_text": true,
    "track_opens": true,
    "track_clicks": true
  }
};

function sendTheMail() {
  m.messages.send(params, function(res) {
    log(res);
  }, function(err) {
    log(err);
  });
}
