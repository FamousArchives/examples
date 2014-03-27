/**
 * Modifier
 * --------
 *
 * Modifiers are nodes that can be added to the render tree
 * to affect the physical position and look of their children.
 *
 * In this example we can see the surfaces is translated 200
 * pixels right and 100 pixels down because it sits below the
 * modifier in the render tree.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var transform = new Modifier({
        transform: Transform.translate(200, 100, 0)
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

    mainContext.add(transform).add(surface);
});
