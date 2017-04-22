const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp() {
        return new Date().toISOString();
      },
      formatter(options) {
        return `${options.timestamp()} - ${options.level.toUpperCase()} - ${options.message}`;
      },
    }),
  ],
});

module.exports = logger;
