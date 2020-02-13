/* eslint-disable require-jsdoc */
/* eslint-disable strict */
const EventEmitter = require('events');

class Myemit extends EventEmitter{};

const myemit = new Myemit()
myemit.on('event',_=>console.log("action fired!"))

myemit.emit('event')