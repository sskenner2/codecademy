function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

var m = new mandrill.Mandrill('fRuwp8srRLvKI28AEGmLCQ');

m.users.ping(function(res) {
    log(res);
    }, function(err) {
    log(err);
    });
