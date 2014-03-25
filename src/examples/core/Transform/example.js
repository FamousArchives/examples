define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");
	var Transform = require("famous/core/Transform");

	var mainCtx = Engine.createContext();

	var transform = new Modifier({
	    transform: Transform.thenMove(Transform.rotateZ(Math.PI * 0.25),[200, 100, 0]),
	    opacity: [0.6]
	});

	var surface = new Surface({
	    size: [200, 200],
	    content: "Hello World",
	    classes: ["red-bg"],
	    properties: {
	        lineHeight: "200px",
	        textAlign: "center"
	    }
	});

	mainCtx.add(transform).add(surface);
});
