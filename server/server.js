// Import libraries
const http = require('http')
const express = require('express') // backend framework for our node server.
const session = require('express-session') // library that stores info about each connected user
const mongoose = require('mongoose') // library to connect to MongoDB
const path = require('path') // provide utilities for working with file and directory paths

const api = require('./api')

/*
// Server configuration below
const mongoConnectionURL = process.env.ATLAS_SRV
const databaseName = 'hantoa-personal'
// connect to mongodb
mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`))
*/

const app = express() // create express server
app.use(express.json()) // process POST requests

// set up a session (to store login data)
app.use(
  session({
    secret: 'session-secret',
    resave: false,
    saveUninitialized: false,
  })
)

app.use('/api', api) // connect user-defined routes

// load the compiled react files for /index.html and /bundle.js
const reactPath = path.resolve(__dirname, '..', 'client', 'dist')
app.use(express.static(reactPath))

// for all other routes, render index.html and let react router handle it
app.get('*', (req, res) => {
  res.sendFile(path.join(reactPath, 'index.html'))
})

// For server issues
app.use((err, req, res, next) => {
  const status = err.status || 500
  if (status === 500) {
    console.log('The server errored when processing a request!')
    console.log(err)
  }
  res.status(status)
  res.send({
    status: status,
    message: err.message,
  })
})

const port = process.env.PORT || 3000
const server = http.Server(app)

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
