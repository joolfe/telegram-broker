# Introduction

The main Objectives of this project is to learn the telegram API and discover a way to use from a server, instead just read the documentation we are going to focus in develop a server that will do some usefull stuff :-).

## Our goal
There are lot of "offer" or "deals" channels that proclaim to have the best offers of internet, indeed there are lot of work behind this channels but when you start to add this channels to your telegram client later or soon you become overwhelmed with all the messages and normally you never find what you need, use the Search in telegram in the channels can help but at the end is also a pain...

So what we are going to implement is a "offer broker" for telegram, the mission of this product/application is to read the message from the offers channels and filter the offers that really are interesting for us.

This will be an interactive app, so we can change the channels, the filters and offcourse store the filter result in some kind of database so can be listed, ordered and filter...

## Requeriments/Objectives
Let us make a list of the posibble requeriments in our product so we can follow this list in the development process:

### Using telegram
- Login as a user in telegram (phone number)
- Get a channel id
- Joain a channels or list of channels 
- Read messages from a channel (pooling or subscribing)

### Filtering offers
- We don't want to see all the offers only some offers should be take into account and stored.
- We need filters like regular expresion to filter the interesting offers.
- We need to extract some info from the offer so can be displayed in a beautifull list.

### Configuration
- We need to provide the user to connect to telegram (phonenumber) in startup maybe?
- We need the hability to setup the channels that will be used.
- Also we need to define the filters that will be applied to the messages.

