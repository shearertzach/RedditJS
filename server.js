require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const Post = require('./models/post');

var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const app = express()

//Middleware
const exphbs = require('express-handlebars')

app.use(cookieParser());

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressValidator())

var checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }

    next();
};
app.use(checkAuth);

require('./data/reddit-db')

require('./controllers/posts.js')(app)
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);
require('./controllers/replies.js')(app);



//Routes




//Start Server
app.listen(3000, () => {
    console.log('Listening on port localhost:3000')
})

module.exports = app
