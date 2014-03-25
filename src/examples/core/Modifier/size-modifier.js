define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");
	var Transform = require("famous/core/Transform");

	var mainCtx = Engine.createContext();

	var sizeMod = new Modifier({
	    size: [50, 50]
	});

	var surface = new Surface({
	    size: [undefined, undefined],
	    content: "Hello World",
	    classes: ["red-bg"],
	    properties: {
	        color: "white",
	        backgroundColor: "black"
	    }
	});

	mainCtx.add(sizeMod).add(surface);
});
