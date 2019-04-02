# Utils

## Telegram API viewer

## Telegram API tester

## Improving environment varibale setup

Indeed is very easy to setup an environment variable with a command in the temrinal

```
$ export VARIABLE="value"
```

But this environment variables are deleted as soon as you close the terminal, one option is to setup as permanent by if you have lot of development maybe you end with tons of environment variables what make very dificult to list them and review, so an alternative is to avoid execute this commands one by one creating a bash script.

Let us create a file called for exmaple `envSetUp.sh` and we will add the next code inside

```
#!/bin/bash

export PHONE_NUMBER="+34XXXXXXX"
export API_HASH="XXXXXX465f73c80XXXXXX38X2XXX"
export API_ID="80XXXX"
```

We save and to avoid use sudo all the time we can change the file permisison with this simple command

```
$ chmod 700 envSetUp.sh
```

Now each time that we need to setup our environment we just have to execute this

```
$ . ./envSetUp.sh
```

And all the environment varibales will be initialized :-)

> Note: Don´t forget to ignore this file in your git config to avoid upload to the git repo by mistake and reveal all your secrets!


