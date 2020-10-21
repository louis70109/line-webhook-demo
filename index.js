require('dotenv').config();
const express = require('express');
const app = express();
const line = require('@line/bot-sdk');

const port = process.env.PORT || 5000;

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

app.post('/v1/webhooks/line', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

app.post('/v2/webhooks/line', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(wrongHandleEvent)).then((result) =>
    res.json(result)
  );
});

const client = new line.Client(config);
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text,
  });
}

function wrongHandleEvent(event) {
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'Hello World',
  });
}
app.listen(port, () => console.log(`http listening on port ${port}!`));
