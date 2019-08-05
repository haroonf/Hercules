const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('Hercules:app')

//connect the DB
const dbController = require('./controllers/dbController')
dbController.config()
debug('app configured the db')

//create express app
const app = express()

app.use(express.static(path.join(__dirname, '.', 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

const routineRoute = require('./routes/routineRouter')

app.use('/routine', routineRoute)

module.exports = app
