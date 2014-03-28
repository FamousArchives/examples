/**
 * Surface
 * ---------
 *
 * Surface is the main renderable in Famo.us.  When
 * you create a Surface, it creates a div that will
 * and sets the content, classes, and CSS properties
 * of the div.  When the surface is added into the
 * render tree, the div is added to the DOM and becomes
 * viewable.
 *
 * In this example, we create a single surface with
 * some properties set and add it into the render tree.
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");

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

    mainContext.add(surface);
});
