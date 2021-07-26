const helper = require('./helper');
const messagingApi = require('./messaging_api');
const readline = require('readline');

const displayMessages = {};

// Read from terminal/console
const terminal = readline.createInterface({
  input: process.stdin,
});

// on every click of new line
terminal.on('line', (text) => {
  const username = process.env.NAME;
  const id = helper.getRandomInt(100000);
  displayMessages[id] = true;

  const message = { id, text, username };
  messagingApi.sendMessage(message);
});

function displayMessage(message) {
  console.log(`> ${message.username}:: ${message.text}`);
  displayMessages[message.id] = true;
}

async function getAndDisplayMessages() {
  const messages = await messagingApi.getMessages();

  for (const message of messages) {
    const messageAlreadyDisplayed = message.id in displayMessages;
    if (!messageAlreadyDisplayed) {
      displayMessage(message);
    }
  }
}

function pollMessages() {
  setInterval(getAndDisplayMessages, 3000); // polling after 3000ms or 3sec
}

function streamMessages() {}
