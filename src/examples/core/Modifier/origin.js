define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");

	var mainCtx = Engine.createContext();

	var originMod = new Modifier({
		origin: [.5, .5]
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


	mainCtx.add(originMod).add(surface);
});
