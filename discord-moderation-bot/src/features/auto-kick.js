// auto-kick.js

// Dependencies: None

const Discord = require('discord.js');

module.exports = {
  name: 'auto-kick',
  description: 'Automatically kicks users who violate server rules consistently',
  execute(message, member) {
    if (member.violations >= 3) {
      member.kick('Consistent violation of server rules');
      message.channel.send(`${member.user.tag} has been kicked for consistent rule violations.`);
    }
  }
};