/* eslint-disable require-jsdoc */
/* eslint-disable strict */
const EventEmitter = require('events');


class Myemitter extends EventEmitter{

        log(msg){


            this.emit('event',{id:"123",msg});
            
        }


}

module.exports = Myemitter;