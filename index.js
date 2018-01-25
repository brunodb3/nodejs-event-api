/**
 *  index.js
 *    - this is the main entry file for the application
 *
 **************************************************************************************************/

// relative imports - here we import the event emitters
const moreEvents = require('./src/emitters/more-events')
const simpleEvents = require('./src/emitters/simple-events')

// emitting events
// we can emit events on both emitters
simpleEvents.emit('event')
// even with the same event name
moreEvents.emit('event')

// using a timeout to emit another-event
setTimeout(() => {
  moreEvents.emit('another-event')
  simpleEvents.emit('another-event')
}, 1000);
