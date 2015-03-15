function log(obj) {
  $('#response').text(JSON.stringify(obj));
}

var m = new mandrill.Mandrill('fRuwp8srRLvKI28AEGmLCQ');

var params = {
  "message": {
    "from_email":"sskenner@gmail.com",
    "to":[ { "email":"santana@codeblack.nyc"}, {"email":"santana@igotittoo.org"} ],
    "subject": "HTML send e-mizzle",
    "html":"*|COOLFRIEND|* <p>regular <b>BOLD</b> and <i>ITALICS</i> e-mizzle</p> *|YEARS|*",
    "auto_text": true,
    "track_opens": true,
    "track_clicks": true,
    "merge_vars": [
      {
        "rcpt": "santana@igotittoo.org",
        "vars": [
          {
            "name": "COOLFRIEND",
            "content": "s@igotittoo"
          },
          {
            "name": "YEARS",
            "content": "5 awesome years"
          }
        ]
      },
      {
        "rcpt": "santana@codeblack.nyc",
        "vars": [
          {
            "name": "COOLFRIEND",
            "content": "s@codeblack"
          },
          {
            "name": "YEARS",
            "content": "10 sick years"
          }
        ]
      }
    ]
  }
};

function sendTheMail() {
  m.messages.send(params, function(res) {
    log(res);
  }, function(err) {
    log(err);
  });
}
