/**
 * Context inside of an existing element
 * -------------------------------------
 *
 * Instead of creating a new div for the context, you can also
 * using an existing HTML element for your context by passing
 * a reference to it when you create the context. 
 */
define(function(require, exports, module) {
	var Engine  = require("famous/core/Engine");
	var Surface = require("famous/core/Surface");

	var el = document.createElement('div');
	el.id = 'testId';
	el.className = 'testClass';
	document.body.appendChild(el);

	var mainContext = Engine.createContext(el);

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
