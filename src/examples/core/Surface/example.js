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
