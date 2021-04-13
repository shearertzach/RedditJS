const express = require('express')

const app = express()

//Public Folder Setup
app.use(express.static('public'))

//Middleware
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Routes
app.get('/', (req, res) => {
    res.render('home')
})










//Start Server
app.listen(3001, () => {
    console.log('Listening on port localhost:3001')
})