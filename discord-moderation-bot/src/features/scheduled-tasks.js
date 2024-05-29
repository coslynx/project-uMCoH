// scheduled-tasks.js

const schedule = require('node-schedule');

// Function to schedule a moderation task
function scheduleModerationTask(taskName, taskTime, taskFunction) {
  schedule.scheduleJob(taskName, taskTime, taskFunction);
}

module.exports = {
  scheduleModerationTask,
};