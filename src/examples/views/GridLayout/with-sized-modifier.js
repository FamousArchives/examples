/**
 * GridLayout with sized modifier
 * ------------------------------
 * 
 * GridLayouts will respect their parents size.  When placed behind
 * a modifier with a set size, the layout will expand to that size
 * instead of filling the full window.
 *
 * In this example, we see a GridLayout behind a sized Modifier.
 */
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
	        size: [undefined, 100],
	        properties: {
	            backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
	            color: "black",
	            lineHeight: '100px',
	            textAlign: 'center'
	        }
	    }));
	}

	mainCtx.add(new Modifier({size: [400, 200], origin: [.5, .5]})).add(grid);
});
