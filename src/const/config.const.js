const { Client, middleware } = require('@line/bot-sdk')
const port = process.env.PORT || 5000
const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET
}
const lineClient = new Client(config)
const lineMiddleware = middleware(config)

module.exports = {
  port,
  lineClient,
  lineMiddleware
}
