const http = require('http')
const debug = require('debug')('Hercules:index')

const app = require('./app')
const serverPort = 11000

const httpServer = http.createServer(app).listen(serverPort)
