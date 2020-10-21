# LINE webhook demo

This is a sample for webhook demo.

## Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/louis70109/line-webhook-demo)

## LINE account

- Got A LINE Bot API devloper account
  Make sure you already registered, if you need use LINE Bot.

- Go to LINE Developer Console
  - Close auto-reply setting on "Messaging API" Tab.
  - Setup your basic account information. Here is some info you will need to know.
    - Callback URL: `https://{NGROK_URL}/v1/webhooks/line`
    - Verify your webhook.
    - Enable bot join group button.
- You will get following info, need fill back to `.env` file.
  - Channel Secret
  - Channel Access Token (You need to issue one here)

## Modify environment variables

When you deploy success, please copy LINE Bot channel `access token` and `secret` to environment variable:

```
CHANNEL_ACCESS_TOKEN
CHANNEL_SECRET
```

## Migrate LINE Bot webhook url

Use following command:

```bash
 curl -X PUT "https://api.line.me/v2/bot/channel/webhook/endpoint" -H "Content-Type: application/json" -H "Authorization: Bearer TOKEN" -d '{"endpoint": "https://ENDPOINT_URL/v1/webhooks/line"}'
```

In this case, you need to change `TOKEN` ➡️ your LINE Bot `access_token` and `ENDPOINT_URL` ➡️ `Heroku URL`

Then, you can change `v1` to `v2`, and you would see your Bot just echo `Hello World` 😆

Version detail:

- v1: echo bot
- v2: just echo "Hello World"

Enjoy it!

## License

MIT
