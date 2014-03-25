define(function(require, exports, module) {
	var Engine  = require("famous/core/Engine");
	var Surface = require("famous/core/Surface");

	var mainCtx = Engine.createContext();

	var surface = new Surface({
	    size: [true, true],
	    content: "Hello World",
	    classes: ["red-bg"]
	});


	mainCtx.add(surface);
});
