var express = require('express');  //grab the express module we downloaded

var app = express();  //actually creates an express app.  Used to configure the server.

//tells the app to use express' static file functionality and tells it to use public folder.
app.use(express.public('public'));

//listen to port (5500) and accept requests
app.listen(5500, function(){

})
