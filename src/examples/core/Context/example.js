/**
 * Context
 * -------
 *
 * A context is the root of the render tree.  In order for something to
 * be rendered, it either needs to be added directly to the context or
 * something that is already added to the context.  While it is possible
 * to have multiple contexts, it is not endorsed as overuse can lead to
 * performance issues.
 *
 * In HTML, the default behavior is that the new context is added to the
 * body tag as a new div.  Every renderable that is added to the context
 * will be represented by a new tag inside of that div.
 *
 * In this example, we create a context and add a surface to it so that
 * the surface will be rendered on the screen.
 * 
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
