/**
 * EventHandler
 * ------------
 *
 * EventHandler is a way to broadcast and listen to events.
 *
 * In this example, we pipe the DOM events of the surface to the
 * EventHandler.  When we then click the surface, the event handler
 * receives that event and calls all of the listeners of the "click"
 * event.
 */
define(function(require, exports, module) {
    var Engine       = require('famous/core/Engine');
    var EventHandler = require('famous/core/EventHandler');
    var Surface      = require('famous/core/Surface');

    var mainContext = Engine.createContext();
    
    var surface = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["red-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    var eventHandler = new EventHandler();

    surface.pipe(eventHandler);

    eventHandler.on('click', function() {
        alert('Click from the event handler');
    });

    mainContext.add(surface);
});
