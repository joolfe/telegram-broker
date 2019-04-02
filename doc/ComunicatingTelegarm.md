
# Comunicating with Telegram

Let's start testing the library, just to remember we are going to give a try to this one [telegram-mtproto](https://www.npmjs.com/package/telegram-mtproto), so first step is to install the dependency using npm like this:

```
npm install --save telegram-mtproto@3.0.6
```

Now we can start using the library, at first stage we will start doing all our code in the `index.js` file and just executing the app as a script, we will refactor and create modules in the future when the application start growing...

## Initializing the client

Having a look to the library docs (I'm afraid the doc is very poor :-() and more concretely to the examples we see that instanciation of `MTProto` client need some configuration objects, the configuration data provided by telegram while registering the application (`api_id` and `api_hash`) and also some technical data like the layer, initConnection... in our code we can create the next object and then instanciate the client like this:

```{js}
const app = {
  app_hash: 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
  api_id: XXXXX
}

const api = {
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : app.api_id
}

const server = {
  dev: true 
}

const client = MTProto({ server, api })

console.log("We are running!");
```

The fields thats appear as sequences of 'X' character are secret fields, we don't want to hardcode this value in our code because will be commit and push to the git repo that can be public like our case so we need a different solution to store this values, for example, having this values in a `config.json` file deliver in the same problem because we need to store this file in some where... for now what we are going to do is a easy solution, this secret values will be read from an environment variable so is a runtime dependency to have this avlues initialized.

Let's create two environment variables with the values with the names `API_ID` and `API_HASH`, in mac is as easy as execute this commands in the terminal:

```
$ export API_ID=80XXXX
$ export API_HASH=xXxXxXxXxXxXxX7793638b2d97
```

To check that variables are correctly setup we can execute a `printenv` command and will see all the environment variables :-).

Well now is time for read environment variables from nodejs code, fortunately is as easy as use `process.env.{variale_name}` so in our code we replace the `app` object definition by:

```
const app = {
  app_hash: process.env.API_HASH,
  api_id: parseInt(process.env.API_ID)
}
```

Note that we should parse the `API_ID` field to int because is waht MTproto expect.

Now it's time to test, if we run `npm start` we should see our wellcome message and no errors.

> You can see the code after execute this steps in this git tag [commit](https://github.com/joolfe/telegram-broker/tree/v0.2/src)

## Authorization flow

Well we have created a telegram client, not too impressive because we have not really communicate yet, to start the communication with telegram we need firt to authenticate, and we will follow this [documentation](https://core.telegram.org/api/auth)

Because we are not going to use the Bot API (remember the reasons in the "telegarm API" page) to authenticate we need a User credential, this is just a real Phone number and a code that is sent via Telegram or SMS to validate this phone.

So the authentication that we are going to implement has two steps, first we will request a method `auth.sendCode` and when we recieve the code in the phone we will use the method `auth.signIn` to login. As result our telegram client is logged in and can execute API calls with a logged session.

So as first step we are going to create a way to ask the code from the program, this code is a variable value and we cannot hardcode in the code or in a config file, as temporal solution we can use the console and we will improve in the future. Lets create a function that do this job but for make it easier let us use a library 

```
$ npm install --save readline
```

Also we need to define a `phone` variable to hold the phone number, again because this is a sensitive field we are going to store the phone number in a environment variable (I don't want telephone spam because i upload some code to github :-P), now that we start having lot of environment variables you can see this this [trick](Improving environment varibale setup)  

So this is the code that we add into the `index.js` file:
 
```
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

```

To test this code we can create a async function to call the method, like this:


```
(async function() {
  console.log("We are running!");

  let code = await askForCode();

  console.log("And the code is: " + code);
})();
```

Then if we run the program with a `$ npm start` we should see something like

```
We are running!
Please enter passcode for +34XXXXXX:
45678 // This have been entered by me manually 
And the code is: 45678
```

> You can see the code after execute this steps in this git tag [commit](https://github.com/joolfe/telegram-broker/tree/v0.3/src)


## Avoid login again and again...


## Fixing random connections errors

Encrypted request failed { Error: MT[406] NETWORK_BAD_REQUEST: http://149.154.167.51/apiw1


> Telegarm Layers: The way that Telegram use for verison the API is claled Layers, when they change the "schema" of the API they release a new layer, in the example of the library the layer number 57 is used but there are several new ones, there exist a pretty web to see the new TL-schemas here https://schema.horner.tj/#!/




