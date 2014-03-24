define(function(require, exports, module) {
	var Engine     = require("famous/core/Engine");
	var Surface    = require("famous/core/Surface");
	var Modifier   = require("famous/core/Modifier");
	var GridLayout = require("famous/views/GridLayout");

	var mainCtx = Engine.createContext();

	var grid = new GridLayout({
	    dimensions: [4, 2]
	});

	var surfaces = [];
	grid.sequenceFrom(surfaces);

	for(var i = 0; i < 8; i++) {
	    surfaces.push(new Surface({
	        content: "I am panel " + (i + 1),
	        size: [undefined, undefined],
	        properties: {
	            backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
	            color: "black"
	        }
	    }));
	}

	mainCtx.add(new Modifier({size: [400, 200], origin: [.5, .5]})).add(grid);
});
