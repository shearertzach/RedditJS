const mongoose = require('mongoose')
const assert = require('assert')

const url = "mongodb://localhost/reddit-db"

mongoose.Promise = global.Promise
mongoose.connect(
    url,
    {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
    },
    function(db, err) {
        console.log('Connected Successfully to Database')
    }
)

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"))
mongoose.set('debug', true)

module.exports = mongoose.connection