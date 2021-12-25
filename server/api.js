const express = require('express')

// Import models
const Example = require('./models/example')

const router = express.Router()

router.get('/examples', (req, res) => {
  Example.findById(req.query.title).then((example) => res.send(example))
})

router.get('/examples', (req, res) => {
  Example.find({}).then((examples) => res.send(examples))
})

router.post('/example', (req, res) => {
  const newExample = new Example({
    title: req.body.title,
    type: req.body.type,
  })

  newExample.save().then((example) => res.send(example))
})

module.exports = router
