
const { MTProto } = require('telegram-mtproto');
const { Storage } = require('mtproto-storage-fs');
const readline = require('readline');

const app_cfg = {
  api_hash: process.env.API_HASH,
  api_id: parseInt(process.env.API_ID)
}

const api = {
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : app_cfg.api_id
}

const app = {
  storage: new Storage('./session.json')
};

const server = {
  dev: false,
  webogram: true
}

const client = MTProto({ server, api, app });

const phone_number = process.env.PHONE_NUMBER

const askForCode = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input : process.stdin,
      output: process.stdout
    });

    rl.question('Please enter passcode for ' + phone_number + ':\n', (num) => {
      rl.close();
      resolve(num);
    });
  })
};

async function connect(){

  const { phone_code_hash } = await client('auth.sendCode', {
    phone_number  : phone_number,
    current_number: false,
    api_id        : app_cfg.api_id,
    api_hash      : app_cfg.api_hash
  })

  console.log('Wow we get something? ', phone_code_hash)

  let phone_code = await askForCode();

  console.log('We have the phone code:', phone_number);

  const { user } = await client('auth.signIn', {
    phone_number   : phone_number,
    phone_code_hash: phone_code_hash,
    phone_code     : phone_code
  })

  console.log('Wow we are signed as ', user)

}

(async function() {
  console.log("We are running!");

  await connect();

  console.log("And now we are running!");
})();

