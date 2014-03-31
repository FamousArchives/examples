/**
 * Modifier with opacity
 * ---------------------
 *
 * Modifiers have opacity
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var opacity = new Modifier({
        opacity: .5
    });

    var surface = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["famousTestSurface"],
        properties: {
            color: "white",
            backgroundColor: "#3cf"
        }
    });

    mainContext.add(opacity).add(surface);
});
