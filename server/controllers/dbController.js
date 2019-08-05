const mongoose = require('mongoose')
const debug = require('debug')('Hercules:db')

const dbURL = 'mongodb://localhost/Hercules'

exports.config = function dbConfig() {
  mongoose.connect(
    dbURL,
    { useNewUrlParser: true, useCreateIndex: true },
  )
  debug(`db mongoose connect to ${dbURL}`)

  // When successfully connected
  mongoose.connection.on('connected', () => {
    debug(`Mongoose default connection open to ${dbURL}`)
  })

  // If the connection throws an error
  mongoose.connection.on('error', (err) => {
    debug(`Mongoose default connection error: ${err}`)
  })

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    debug('Mongoose default connection disconnected')
  })

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      debug('Mongoose default connection disconnected app terminated')
      process.exit(0)
    })
  })
}
