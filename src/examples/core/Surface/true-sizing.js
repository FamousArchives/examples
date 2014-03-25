/**
 * Surface with true sizing
 * ------------------------
 *
 * A surface can have it's size set to true.  What this means
 * is that the size of the surface will be equal to the size
 * of the content it holds.
 *
 * This example shows this property in action.
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
