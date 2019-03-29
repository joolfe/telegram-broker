# Telegram API

Telegram has a wide and open collection of APIs and tools to let us connect with Telegram servers and comunicate using telegram, also a good documentations and examples. 
If we have a look to the [telegram page](https://core.telegram.org/) we can see that there are three options to use the API:
- Bot API: Designed to develop a bot, is easy and avoid the use of the MTProto, but dont allow to do all the things that we need.
- TDLib: A proxy library to use MTproto without to worry about low level details,as telegram docs say "TDLib can be easily used with any programming language that is able to execute C functions." and even has official bindings to Java (using JNI) and C# (using C++/CLI).
- Telegram API: The API that expose the method that can be used to implement a client fro telegram.

# What should we use?

The **Bot API** looks very interesting, we can design our server as a telegram bot that recieve the message like any other user and then filter the offers :-) but after reading the documentation we found some limits [related with the bots](https://core.telegram.org/bots) because a bot only can recieve message from channels that is memeber in admin mode, because we are not the owners of the offers channels this API is discarded :-(.

The **TDLib** is a good option to donñt implement all the MTProto but we need to use in our project Nodejs as our server and don't seem to exist any binding for this...

So at the edn we are going to use the **Telegram API** directly, well not exactly directly...

# Looking for a library

Create the code to comunicate using the MTproto is itself a project, we will take care about how to handle encription, connections, error handling... so we are going to use a existing and well tested library for node.js that avoid us to do all this stuff.

Having a look into [stackoverflow](https://stackoverflow.com/questions/46898262/how-to-receive-my-own-telegram-messages-in-node-js-without-bot) we quickly found some options, and digging a little more and taking into account the number of downloads of the library, last commit date, issues... we finally have a library candidate https://github.com/zerobias/telegram-mtproto.


Note:
MTProto: or Mobile Telegram Protocol, is the protocol designed by telegram for transmit message in a secure way over the network, its describe how to encrypt, the message format, the headers, how to open connections...