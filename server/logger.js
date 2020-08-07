const pino = require('pino');

// setting up logger
const l = pino({
    level: process.env.LOG_LEVEL || 'debug',
    name: process.env.APP_ID || ''
});

module.exports = l;