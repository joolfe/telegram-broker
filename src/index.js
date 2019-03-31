
const { MTProto } = require('telegram-mtproto');

const app = {
  app_hash: process.env.API_HASH,
  api_id: parseInt(process.env.API_ID)
}

const api = {
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : app.api_id
}

const server = {
  dev: true //We will connect to the test server.
}

const client = MTProto({ server, api });

console.log("We are running!");