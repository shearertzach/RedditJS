const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const Post = require('./models/post');


const app = express()

//Middleware
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressValidator())

require('./controllers/posts.js')(app)
require('./data/reddit-db')

//Routes
app.get('/posts/new', (req, res) => {
    res.render('posts-new')
})




//Start Server
app.listen(3000, () => {
    console.log('Listening on port localhost:3000')
})

module.exports = app
