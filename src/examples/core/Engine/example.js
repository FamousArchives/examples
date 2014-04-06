/**
 * Engine
 * ------
 *
 * The Famo.us Engine is responsible for managing the requestAnimationFrame loop,
 * creating Famo.us contexts, and listening to DOM events on the window. The
 * Engine is a JavaScript singleton: there is only one instance per app.
 *
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");

    var mainContext = Engine.createContext();

    var surface = new Surface({
        size: [undefined, 200],
        properties: {
            background : 'red',
            fontSize : '24px',
            textAlign : 'center'
        }
    });

    mainContext.add(surface);

    // listen on window resize
    Engine.on("resize", function() {
        surface.setContent(
            'dimensions:' + '<br>' +
            'width : ' + window.innerWidth  + 'px ' + '<br>' +
            'height: ' + window.innerHeight + 'px'
        );
    });

    // listen on click
    Engine.on("click", function(event){
        surface.setContent(
            'click position:' + '<br>' +
            'x :' + event.clientX + 'px ' + '<br>' +
            'y :' + event.clientY + 'px'
        );
    });

    // exectute function on next requestAnimationFrame cycle
    Engine.nextTick(function() {
        surface.setContent("Try resizing the device/window or clicking somewhere!");
    });
});
