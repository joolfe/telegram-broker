# Getting started

I´m going to supose that all the concepts related with node.js are known if you are reading this tutorial so if i miss some explanation just get a try to Google ;-).

We should have installed:
- Nodejs
- npm

To get started just follow this steps:

## Initializating the project
We have create a git project and clone the repo, inside the repo folder `/telegram-broker` lets create a `/src` folder where we are going to put all our js code and inside this folder we are going to init the node project using npm so just execute:

```
npm init
```

Npm wizard will ask for some parameters like project name, license... finally we will get a very simple file `package.json` that will be our start point.

To finish the setup we will create a file ´index.js´ (or the name that we have choose for the main file while following the npm wizard steps) and add a simple log inside to see that everything is working. 

```
console.log("Hello telegram!");
```

Now if we execute:

```
npm start
```

We should see in the terminal a `Hello telegram!` message, good job! :-)

You can see the code after execute this steps in this git tag [commit](https://github.com/joolfe/telegram-broker/tree/v0.1/src)

## Registering a telegram APP

To use telegram API we need some keys that identify our app, we just follow the step described in the [telegram documentation](https://core.telegram.org/api/obtaining_api_id), is basically login into the telegram core web and register a new application.

As result we will obtain some needed info for connect to the API like the api_id and api_hash, for now just save this values in somewhere secure, we will use it in the future.

