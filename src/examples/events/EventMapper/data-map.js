define(function(require, exports, module) {
    // import dependencies
    var EventHandler = require('famous/core/EventHandler');
    var EventMapper = require('famous/events/EventMapper');
   
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

    eventHandlerA.trigger('A', {direction : 'x'});  // pipes to eventHandlerB
    eventHandlerA.trigger('A', {direction : 'y'});  // pipes to eventHandlerC
});
