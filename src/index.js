
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

(async function() {
  console.log("We are running!");

  let code = await askForCode();

  console.log("And the code is: " + code);
})();

