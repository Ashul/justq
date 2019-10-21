const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const errorHandler = require('./server/middlewares/errorHandler')
const jwtVerify = require('./server/middlewares/jwt')
const path = require('path')
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist/Queriez'));

app.use(cors())
var uristring = process.env.MONGODB_URI ||'mongodb://localhost/queries'

mongoose.connect(uristring)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Queriz database connected')
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Authenticate Route
app.use(jwtVerify)

// api routes
require('./server/routes/routes')(app);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/Queriez/index.html'));
  });

//global error handlers
app.use(errorHandler)


app.listen(port, () => {
    console.log("App is running on port " + port);
});  
  