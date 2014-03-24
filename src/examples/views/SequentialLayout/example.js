define(function(require, exports, module) {
	var Engine           = require("famous/core/Engine");
	var Surface          = require("famous/core/Surface");
	var SequentialLayout = require("famous/views/SequentialLayout");

	var mainCtx = Engine.createContext();

	var sequentialLayout = new SequentialLayout();
	var surfaces = [];

	sequentialLayout.sequenceFrom(surfaces);

	for (var i = 0; i < 10; i++) {
	    surfaces.push(new Surface({
	         content: "Surface: " + (i + 1),
	         size: [200, 200],
	         properties: {
	             backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
	             lineHeight: "200px",
	             textAlign: "center"
	         }
	    }));
	}

	mainCtx.add(sequentialLayout);
});
