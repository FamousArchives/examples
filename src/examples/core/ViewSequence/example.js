define(function(require, exports, module) {
	var Engine       = require("famous/core/Engine");
	var Surface      = require("famous/core/Surface");
	var Modifier     = require("famous/core/Modifier")
	var ViewSequence = require("famous/core/ViewSequence");

	var mainCtx = Engine.createContext();

	var viewSequence = new ViewSequence();

	for(var i = 0; i < 8; i++) {
	    viewSequence.push(new Surface({
	        content: "I am panel " + (i + 1),
	        size: [200, 200],
	        properties: {
	            backgroundColor: "hsl(" + (i * 306 / 8) + ", 100%, 50%)",
	            color: "black",
	            textAlign: "center",
	            lineHeight: "200px"
	        }
	    }));
	}

	var counter = 0;
	setInterval(function() {
	    viewSequence.index = counter++ % (viewSequence.array.length - 1)
	}, 1000);

	mainCtx.add(new Modifier({origin: [.5, .5]})).add(viewSequence);
});
