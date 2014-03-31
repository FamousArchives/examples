/**
 * EventHandler triggering
 * -----------------------
 *
 * This example shows the most basic functionality of EventHandler.
 * First, we register a function to be run on the "ILikeToEat" event.
 * When the event handler gets the surface click, we trigger "ILikeToEat", 
 * which will call all of the register listeners resulting in the alert.
 */
define(function(require, exports, module) {
    var Engine       = require('famous/core/Engine');
    var EventHandler = require('famous/core/EventHandler');
    var Surface      = require('famous/core/Surface');

    var mainContext = Engine.createContext();
    
    var surface = new Surface({
        size: [200, 200],
        content: "Click Me",
        classes: ["red-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    var eventHandler = new EventHandler();

    surface.pipe(eventHandler);

    eventHandler.on('click', function() {
        eventHandler.trigger('ILikeToEat', {food: 'Apple and bananas'});
    });

    eventHandler.on('ILikeToEat', function(data) {
        alert(data.food);
    });

    mainContext.add(surface);
});

