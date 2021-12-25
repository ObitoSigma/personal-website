const mongoose = require('mongoose')

const ExampleSchema = new mongoose.Schema({
    title: String,
    type: String,
})

module.exports = mongoose.model('example', ExampleSchema)
