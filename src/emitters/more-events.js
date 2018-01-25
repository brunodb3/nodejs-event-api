/**
 *  more-events.js
 *    - this is the more-events emitter class
 *
 **************************************************************************************************/

// global imports - here we import the native NodeJS events module
const EventEmitter = require('events')

// extending the EventEmitter class
class MoreEmitter extends EventEmitter { }

// instancing the class
const moreEmitter = new MoreEmitter()

// listening for events
// event
moreEmitter.on('event', () => {
  // using time and timeEnd to log the time the event took to run
  console.time('event on more-events')
  console.timeEnd('event on more-events')
})
// another-event
moreEmitter.on('another-event', () => {
  // using time and timeEnd to log the time the event took to run
  console.time('another-event on more-events')
  console.timeEnd('another-event on more-events')
})

// exporting as a module (using CommonJS format)
module.exports = moreEmitter
