const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'List all available commands',
  execute(message, commandList) {
    const embed = new MessageEmbed()
      .setTitle('List of Available Commands')
      .setDescription(commandList.map(cmd => `**${cmd.name}**: ${cmd.description}`).join('\n'));
    message.channel.send(embed);
  },
};