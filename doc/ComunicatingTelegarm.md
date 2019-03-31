
# Comunicating with Telegram

Let's start testing the library, just to remember we are going to give a try to this one [telegram-mtproto](https://www.npmjs.com/package/telegram-mtproto), so first step is to install the dependency using npm like this:

```
npm install --save telegram-mtproto@2.2.8
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

You can see the code after execute this steps in this git tag [commit](https://github.com/joolfe/telegram-broker/tree/v0.2/src)

## Authorization flow

// poner el link a telegarm


Note:
Telegarm Layers: The way that Telegram use for verison the API is claled Layers, when they change the "schema" of the API they release a new layer, in this moment seems like the last layer is the number 18 but in the exmaple use the numer 57, maybe because is a way to say "The latest one". We will do the same.




