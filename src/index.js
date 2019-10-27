import express from 'express'
import { app, lineMiddleware } from './const/config.const' 
const app = express()

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'Hello Line bot API.',
    server_time: new Date()
  })
})


app.post('/webhook', lineMiddleware , (req, res) => {
  console.log('/webhook')
  res.end()
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
