define(function(require, exports, module) {
	var Engine          = require("famous/core/Engine");
	var Surface         = require("famous/core/Surface");
	var ScrollContainer = require("famous/views/ScrollContainer");

	var mainCtx = Engine.createContext();
	var scrollContainer = new ScrollContainer({
	    look: {
	        size: [400, 300]
	    }
	});

	var surfaces = [];
	scrollContainer.sequenceFrom(surfaces);
	for (var i = 0, temp; i < 10; i++) {
	    temp = new Surface({
	         content: "Surface: " + (i + 1),
	         size: [undefined, 200],
	         properties: {
	             backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
	             lineHeight: "200px",
	             textAlign: "center"
	         }
	    });

	    temp.pipe(scrollContainer);
	    surfaces.push(temp);
	}

	mainCtx.add(scrollContainer);
});
