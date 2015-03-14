function log(obj) {
  $('#response').text(JSON.stringify(obj));
}

var m = new mandrill.Mandrill('fRuwp8srRLvKI28AEGmLCQ');

var params = {
  "message": {
    "from_email":"sskenner@gmail.com",
    "to":[{"email":"santana@codeblack.nyc"}],
    "subject": "text email using Mandrill API",
    "html": "<p>yo, *|COOLFRIEND|*, we've been friends for *|YEARS|*.</p>",
    "autotext": true,
    "track_opens": true,
    "track_clicks": true,
    "merge_vars": [
      {
        "rcpt": "santana@igotittoo.org",
        "vars": [
          {
            "name": "COOLFRIEND",
            "content": "tyler"
          },
          {
            "name": "YEARS",
            "content": "5 awesome years"
          }
        ]
      }
    ]
  }
};

function sendTheMail() {
  m.messages.send(params, function(res) {
      log(res);
    },  function(err) {
      log(err);
    });
}
