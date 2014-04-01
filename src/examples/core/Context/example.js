/**
 * Context
 * -------
 *
 * A context is the root of the render tree.  In order for a Famo.us node to
 * be rendered, it either needs to be added to the context or added to
 * a node that has been added the context.
 *
 * In HTML, the new context is added to the body tag as a <div> with class
 * 'famous-container'. Renderables added to the context will be child nodes of
 * this container.
 *
 * In this example, we create a context and add a Famo.us surface to it so that
 * the surface will be rendered on the screen.
 * 
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");

    var mainContext = Engine.createContext();

    var surface = new Surface({
        size: [200, 200],
        properties: {background : 'red'}
    });

    mainContext.add(surface);
});
