// logging.js

// This file handles logging all moderation actions taken by the bot

const fs = require('fs');

const logAction = (action, user) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${action} performed on user: ${user}\n`;

  fs.appendFile('moderation.log', logMessage, (err) => {
    if (err) {
      console.error('Error logging action:', err);
    }
  });
};

module.exports = {
  logAction,
};