const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'logs.json');

function log(message, level = 'info', stack = 'fullstack', pkg = 'app') {
  const logEntry = {
    timestamp: new Date().toISOString(),
    message,
    level,
    stack,
    package: pkg
  };

  fs.appendFile(logFilePath, JSON.stringify(logEntry) + '\n', (err) => {
    if (err) {
      console.error('Logging failed:', err);
    }
  });
}

module.exports = log;
