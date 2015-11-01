var events = require('events'),
    util = require('util'),
    EventEmitter = events.EventEmitter;

var Emitter = module.exports = exports = function NexmoNotifierConstructor () {
    EventEmitter.call(this);
};

util.inherits(Emitter, EventEmitter);