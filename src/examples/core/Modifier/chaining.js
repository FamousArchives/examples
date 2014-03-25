define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");
	var Transform = require("famous/core/Transform");

	var mainCtx = Engine.createContext();

	var transformOne = new Modifier({
	    transform: Transform.translate(200, 0, 0)
	});

	var transformTwo = new Modifier({
	    transform: Transform.translate(0, 200, 0)
	});

	var surface = new Surface({
	    size: [200, 200],
	    content: "Hello World",
	    classes: ["red-bg"],
	    properties: {
	        textAlign: 'center',
	        lineHeight: '200px'
	    }
	});

	mainCtx.add(transformOne).add(transformTwo).add(surface);
});
