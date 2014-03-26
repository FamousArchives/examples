/**
 * EventFilter with piping
 * -----------------------
 *
 * EventFilter provides a way to define a function that 
 * can decide whether or not to propogate events downwards.
 *
 * In this example, we pipe all events from eventHandlerA to
 * the an EventFilter.  This filter will only propogate events
 * if the data's 'msg' property is 'ALERT!'.  Because we change
 * the msg that is broadcast every click, you can see that the
 * alert occurs every other click.
 */
define(function(require, exports, module) {
    var Engine       = require('famous/core/Engine');
    var EventHandler = require('famous/core/EventHandler');
    var EventFilter  = require('famous/events/EventFilter');

    var eventHandlerA = new EventHandler();
    var eventHandlerB = new EventHandler();
   
    var myFilter = new EventFilter(function(type, data) {
        return data && (data.msg === 'ALERT!');
    });

    eventHandlerA.pipe(myFilter).pipe(eventHandlerB);
    eventHandlerB.on('A', function(data){
        alert('piped message: ' + data.msg);
    });

    var currentMsg = 'ALERT!';

    Engine.on('click', function() {
        eventHandlerA.trigger('A', {msg: currentMsg});
        currentMsg = currentMsg === 'ALERT!' ? 'chickenDogStar': 'ALERT!';
    });
});
