/**
 * EventMapper
 * ------------
 *
 * EventMapper is a way to route events to various EventHandlers
 * based on the type of the event.
 *
 * In this example, we pipe all events from eventHandlerA to
 * the an EventMapper.  This filter will decide whether to send
 * the event to eventHandlerB or eventHandlerC based on the
 * direction property of the data sent along with the event.
 */
define(function(require, exports, module) {
    var Engine       = require('famous/core/Engine');
    var EventHandler = require('famous/core/EventHandler');
    var EventMapper  = require('famous/events/EventMapper');
   
    var eventHandlerA = new EventHandler();
    var eventHandlerB = new EventHandler();
    var eventHandlerC = new EventHandler();
      
    var myMapper = new EventMapper(function(type, data) {
        return (data && (data.direction === 'x')) ? eventHandlerB : eventHandlerC;
    });

    eventHandlerA.pipe(myMapper);

    eventHandlerB.on('A', function(data){
        alert('B direction : ' + data.direction);
    });
    eventHandlerC.on('A', function(data){
        alert('C direction : ' + data.direction);
    });

    var currentDirection = 'x';
    Engine.on('click', function() {
        eventHandlerA.trigger('A', {direction : currentDirection});
        currentDirection = currentDirection === 'x' ? 'y' : 'x';
    });
});
