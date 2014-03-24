define(function(require, exports, module) {
	var Engine     = require("famous/core/Engine");
	var Surface    = require("famous/core/Surface");
	var Scrollview = require("famous/views/Scrollview");

	var mainCtx = Engine.createContext();

	var scrollview = new Scrollview();
	var surfaces = [];

	scrollview.sequenceFrom(surfaces);

	for (var i = 0, temp; i < 40; i++) {
	    temp = new Surface({
	         content: "Surface: " + (i + 1),
	         size: [undefined, 200],
	         properties: {
	             backgroundColor: "hsl(" + (i * 360 / 40) + ", 100%, 50%)",
	             lineHeight: "200px",
	             textAlign: "center"
	         }
	    });

	    temp.pipe(scrollview);
	    surfaces.push(temp);
	}

	mainCtx.add(scrollview);
});
