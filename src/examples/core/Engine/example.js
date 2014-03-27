/**
 * Engine
 * ------
 *
 * Engine is the core component of Famo.us.  It is responsible
 * for managing the requestAnimationFrame loop, creating contexts,
 * listening to global events, and more.
 *
 * In this example we can see it being used to create a context,
 * listening to window events, and managing functions to be run on
 * various engine ticks.
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");

    var mainCtx = Engine.createContext();

    var surface = new Surface({
        size: [undefined, undefined],
        classes: ['red-bg'],
        properties: {
            color: "white",
            paddingTop: "100px",
            textAlign: "center"
        }
    });

    mainCtx.add(surface);

    Engine.on("click", function() {
        surface.setContent("Click");
    });

    Engine.on("resize", function() {
        surface.setContent("The window is being resized");
    });

    Engine.nextTick(function() {
        surface.setContent("This message was run on the next animation tick");   
    });
});
