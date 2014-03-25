define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");
	var Transform = require("famous/core/Transform");

	var mainCtx = Engine.createContext();

	var transformOne = new Modifier({
		transform: Transform.rotateZ(.7),
		origin: [.5, .5]
	});

	var transformTwo = new Modifier({
	    transform: Transform.identity
	});

	var surface = new Surface({
	    size: [50, 50],
	    content: "Small",
	    classes: ["grey-bg"],
	    properties: {
	        textAlign: 'center',
	        lineHeight: '50px'
	    }
	});

	var surfaceTwo = new Surface({
	    size: [200, 200],
	    content: "Hello World",
	    classes: ["red-bg"],
	    properties: {
	        textAlign: 'center',
	        lineHeight: '200px'
	    }
	});

	var temp = mainCtx.add(transformOne)
	temp.add(surface)
	temp.add(transformTwo).add(surfaceTwo);
});
