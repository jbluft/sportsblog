const express = require("express");
let session = require('express-session');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const LocalStrategy = require("passport-local");
const passportLocalMongoose   = require("passport-local-mongoose")




// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
// app.set('view engine', 'handlebars')

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sportspicks");

// Start the API server
app.listen(PORT, function() {console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false
}));
    app.use(passport.initialize());
    app.use(passport.session());

});
