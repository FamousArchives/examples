/**
 * EventFilter with subscription
 * -----------------------------
 *
 * EventFilter provides a way to define a function that 
 * can decide whether or not to propogate events downwards.
 *
 * In this example, eventHandlerB is subscribed to all events coming
 * out of the filter and the filter is subscribed to all events
 * coming out of eventHandlerA.  This filter will only propogate events
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

    eventHandlerB.subscribe(myFilter);
    myFilter.subscribe(eventHandlerA);
    eventHandlerB.on('A', function(data){
        alert('subscribed message: ' + data.msg);
    });

    var currentMsg = 'ALERT!';

    Engine.on('click', function() {
        eventHandlerA.trigger('A', {msg: currentMsg});
        currentMsg = currentMsg === 'ALERT!' ? 'chickenDogStar': 'ALERT!';
    });
});
