define(function(require, exports, module) {
	var Engine  = require("famous/core/Engine");
	var Surface = require("famous/core/Surface");

	var mainCtx = Engine.createContext();

	var surface = new Surface({
	    size: [undefined, undefined],
	    properties: {
	        backgroundColor: "#3cf",
	        color: "white",
	        fontSize: "50px",
	        paddingTop: "50px",
	        textAlign: "center"
	    }
	});

	mainCtx.add(surface);

	Engine.on("click", function() {
	    surface.setContent("Click");
	});

	Engine.on("mousemove", function() {
	    surface.setContent("The mouse is moving");
	});

	Engine.on("resize", function() {
	    surface.setContent("The window is being resized");
	});

	Engine.nextTick(function() {
	    surface.setContent("This message was scheduled for the next animation tick");   
	});
});
