# Twilio App v0.0.1

Unsurprisingly, I've noticed that the more my real phone number ends up online, the more spam calls and texts I get. The idea behind this app was to use a disposable phone number for ads that are posted online (e.g. Craigslist), and provide an easy way to respond to incoming messages to that disposable number.

This application must be run on a server when incoming texts to your Twilio number are expected. The application requires PostgreSQL to store conversations and messages and uses the 'twilio-app' database. The application also currently pulls information like your Twilio accountSid and authToken from a secrets.js file which must be created inside the server folder. Alternatively, you can use Node process.env environment variables to store this information. The structure of the secrets.js file is as follows:

module.exports = {
  accountSid: 'XXXXXXXXXXXXXXX',
  authToken: 'XXXXXXXXXXXXXX',
  myNumber: '+1XXXXXXXXXX',
  twilioNumber: '+1XXXXXXXXXX'
};

## Typical Use Scenario:

I post a new ad on Craigslist and use my disposable Twilio phone number for contact purposes. Any texts sent to that number are then posted to my application by Twilio (this process must be configured through Twilio). Since I typically run the server in the background on my desktop, I use ngrok to tunnel to localhost and provide the ngrok server address to Twilio.
Opening the browser to the localhost address will show incoming messages in real time and provide a chat interface to respond to those messages through the disposable Twilio number. As it is currently setup, the first message from a new number is always forwarded to your real number so you don't need to be watching for incoming messages. Any subsequent forwarding can be enabled or disabled via the chat interface.

The application is currently in a bare-bones but functional state.  I'll probably add new features the more I use it.
