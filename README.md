# Twilio App v0.0.1 #

The purpose of this project is to hide my real phone number from ads that I post on Craigslist.  Unsurprisingly, I've noticed that the more my number ends up online, the more spam calls and texts I get.

I used Twilio to create a disposable phone number and added funds to my account to cover sent / received texts.

You must run this on a server when you are expecting incoming texts to your Twilio number.  The application requires PostgreSQL to store conversations and messages and uses the 'twilio-app' database.  The application also currently pulls information like your Twilio accountSid and authToken from a secrets.js file which you must create inside the server folder.  The structure of secrets.js is as follows:

module.exports = {
  accountSid: 'XXXXXXXXXXXXXXX',
  authToken: 'XXXXXXXXXXXXXX',
  myNumber: '+1XXXXXXXXXX',
  twilioNumber: '+1XXXXXXXXXX'
};

## How it works: ##
I provide Craigslist with a disposable phone number created by Twilio.  Any texts sent to that number are then posted to /api/messages/twilio (this must be configured on Twilio).  Since I typically  run the server in the background on my desktop, I use ngrok to tunnel to localhost and provide the ngrok server address to Twilio.
Opening the browser to the localhost address will show incoming messages in real time and provide a chat interface to respond to those messages through the disposable Twilio number.
The first message from a new number is always forwarded to your personal number.  Any subsequent forwarding can be enabled or disabled via the interface.

The application is currently not very customizable, but future improvements are planned.