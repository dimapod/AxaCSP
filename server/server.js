var express = require('express')
  , path = require('path')
  , http = require('http')
  , expressJwt = require('express-jwt')
  , jwt = require('jsonwebtoken');

var secret = 'this is the secret secret secret 12356';

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3300);
  app.use(express.static(path.join(__dirname, '../app')));
  app.use(express.bodyParser());
  app.use('/rest', expressJwt({secret: secret}));
});

app.use(function(err, req, res, next){
    if (err.constructor.name === 'UnauthorizedError') {
        res.send(401, 'Unauthorized');
    }
});

app.post('/authenticate', function (req, res) {
    //TODO validate req.body.username and req.body.password
    //if is invalid, return 401
    if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
        res.send(401, 'Wrong user or password');
        return;
    }

    var profile = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        id: 123
    };

    // We are sending the profile inside the token
    var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

    res.json({ token: token });
});


require('./rest')(app);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


module.exports=server;