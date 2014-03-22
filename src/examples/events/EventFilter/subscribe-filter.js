define(function(require, exports, module) {
    // import dependencies
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

    eventHandlerA.trigger('A', {msg: 'chickenDogStar'});
    eventHandlerA.trigger('A', {msg: 'ALERT!'});
});
