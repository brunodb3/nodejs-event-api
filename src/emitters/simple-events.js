/**
 *  simple-events.js
 *    - this is the simple-events emitter class
 *
 **************************************************************************************************/

// global imports - here we import the native NodeJS events module
const EventEmitter = require('events')

// extending the EventEmitter class
class SimpleEmitter extends EventEmitter { }

// instancing the class
const simpleEmitter = new SimpleEmitter()

// listening for events
// event
simpleEmitter.on('event', () => {
  // using time and timeEnd to log the time the event took to run
  console.time('event on simple-events')
  console.timeEnd('event on simple-events')
})
// another-event
simpleEmitter.on('another-event', () => {
  // using time and timeEnd to log the time the event took to run
  console.time('another-event on simple-events')
  console.timeEnd('another-event on simple-events')
})

// exporting as a module (using CommonJS format)
module.exports = simpleEmitter
