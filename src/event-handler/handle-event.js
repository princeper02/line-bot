const handleEvent = (event) => {
  console.log('---------------- event ---------------------')
  console.log(event)
  console.log('---------------- event ---------------------')

  switch (event.type) {
    case 'message':
      const message = event.message
      switch (message.type) {
        case 'text':
          return handleText(message, event.replyToken, event.source)
        case 'image':
          return handleImage(message, event.replyToken)
        case 'video':
          return handleVideo(message, event.replyToken)
        case 'audio':
          return handleAudio(message, event.replyToken)
        case 'location':
          return handleLocation(message, event.replyToken)
        case 'sticker':
          return handleSticker(message, event.replyToken)
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`)
      }
      
    case 'postback':
      let data = event.postback.data
      if (data === 'DATE' || data === 'TIME' || data === 'DATETIME') {
        data += `(${JSON.stringify(event.postback.params)})`
      }
      return replyText(event.replyToken, `Got postback: ${data}`)

    case 'beacon':
      return replyText(event.replyToken, `Got beacon: ${event.beacon.hwid}`)

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`)
  }
}

module.exports = { handleEvent }