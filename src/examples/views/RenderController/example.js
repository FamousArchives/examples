define(function(require, exports, module) {
	var Engine   = require("famous/core/Engine");
	var Surface  = require("famous/core/Surface");
	var RenderController = require("famous/views/RenderController");

	var mainCtx = Engine.createContext();
	var renderController = new RenderController();
	var surfaces = [];
	var counter = 0;

	for (var i = 0; i < 10; i++) {
	    surfaces.push(new Surface({
	         content: "test",
	         size: [200, 200],
	         properties: {
	             backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
	             lineHeight: "200px"
	         }
	    }));
	}

	renderController.show(surfaces[0]);

	Engine.on("click", function() {
	    var next = (counter++ + 1) % surfaces.length;
	    this.show(surfaces[next]);
	}.bind(renderController));

	mainCtx.add(renderController);
});
