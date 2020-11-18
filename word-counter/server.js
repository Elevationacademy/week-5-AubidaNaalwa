const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const urllib = require('urllib')
const api = require('./routes/api')


const app = express()




app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Connecting to "api", i.e our routes
app.use('/', api)

// Running the server
const port = 3002

app.listen(port, function () { console.log('Running on ' + port) })