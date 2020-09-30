const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const { handleEvent } = require('./event-handler/handle-event')
const { lineMiddleware, port } = require('./const/config.const')
const app = express()

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'Hello Line bot API. meow :3',
    server_time: new Date()
  })
})


app.post('/webhook', lineMiddleware , (req, res) => {
  console.log('/webhook')
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
