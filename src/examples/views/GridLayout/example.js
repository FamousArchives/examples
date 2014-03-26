/**
 * GridLayout
 * -------------
 * 
 * GridLayout is a layout which divides a context into several evenly-sized grid cells.
 * If dimensions are provided, the grid is evenly subdivided with children
 * cells representing their own context, otherwise the cellSize property is used to compute 
 * dimensions so that items of cellSize will fit.
 *
 * In this example, we make a 4x2 grid with 8 surfaces with varying hues. 
 */
define(function(require, exports, module) {
	var Engine     = require("famous/core/Engine");
	var Surface    = require("famous/core/Surface");
	var GridLayout = require("famous/views/GridLayout");

	var mainContext = Engine.createContext();

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
	            color: "black",
	            lineHeight: window.innerHeight / 2 + 'px',
	            textAlign: 'center'
	        }
	    }));
	}

	mainContext.add(grid);
});
