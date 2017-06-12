var app = require('express')();
var http = require('http').Server(app);

var proxy = require('express-http-proxy');
var session = require('express-session');

app.set('trust proxy', true)

app.use('/proxy', proxy('orion.iascj.org.br',{ preserveHostHdr: true }), 
    session({
        secret: 'JSESSIONID',
        resave: true,
        saveUninitialized: false,
        cookie: { 
            secure: false,
            httpOnly: true,
            maxAge: 10000000
        }
    })
);

http.listen(3000, function(){
  console.log('listening on *:3000');
});