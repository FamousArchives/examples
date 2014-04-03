/**
 * Surface with true sizing
 * ------------------------
 *
 * A surface can have its size set to "true".  This will size the surface
 * according to the size of its contents.
 *
 * In this example, a surface is created that is sized to its textual content.
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");

    var mainContext = Engine.createContext();

    var surface = new Surface({
        size: [true, true],
        content: "Hello World",
        classes: ["red-bg"]
    });

    mainContext.add(surface);
});
