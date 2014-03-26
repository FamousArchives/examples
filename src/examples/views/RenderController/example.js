/**
 * RenderController
 * -------------------
 *
 * RenderController is a dynamic view that can show or hide
 * different renerables with transitions.
 *
 * In this example, we iterate through a collection of 10
 * surfaces on click events.
 */
define(function(require, exports, module) {
	var Engine           = require("famous/core/Engine");
	var Modifier         = require("famous/core/Modifier");
	var Surface          = require("famous/core/Surface");
	var RenderController = require("famous/views/RenderController");

	var mainContext = Engine.createContext();
	var renderController = new RenderController();
	var surfaces = [];
	var counter = 0;

	for (var i = 0; i < 10; i++) {
	    surfaces.push(new Surface({
	         content: "Surface: " + (i + 1),
	         size: [200, 200],
	         properties: {
	             backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
	             lineHeight: "200px",
	             textAlign: 'center'
	         }
	    }));
	}

	renderController.show(surfaces[0]);

	Engine.on("click", function() {
	    var next = (counter++ + 1) % surfaces.length;
	    this.show(surfaces[next]);
	}.bind(renderController));

	mainContext.add(new Modifier({origin: [.5, .5]})).add(renderController);
});
