
const { MTProto } = require('telegram-mtproto');

console.log("We are running!");

const phone = {
  num : '+34636640130',
  code: '22222'
}

const api = {
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : 805232
}

const app_hash = 'eafd0e465f73c807b0a97793638b2d97';

const server = {
  dev: true //We will connect to the test server.
}

const client = MTProto({ server, api });

async function connect(){
  
  const { phone_code_hash } = await client('auth.sendCode', {
    phone_number  : phone.num,
    current_number: false,
    api_id        : api.api_id,
    api_hash      : app_hash
  })

  console.log('WOW we get domething? ', phone_code_hash)

/*
  const { user } = await client('auth.signIn', {
    phone_number   : phone.num,
    phone_code_hash: phone_code_hash,
    phone_code     : phone.code
  })
*/
  console.log('WOW signed as ')

}

connect()