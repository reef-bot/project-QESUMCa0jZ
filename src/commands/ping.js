const { Client, Message } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Ping command to check bot latency',
  execute(message) {
    message.channel.send(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms.`);
  },
};