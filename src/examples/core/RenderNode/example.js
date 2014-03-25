define(function(require, exports, module) {
	var Engine     = require("famous/core/Engine");
	var RenderNode = require("famous/core/RenderNode");
	var Surface    = require("famous/core/Surface");
	var Modifier   = require("famous/core/Modifier");
	var Transform  = require("famous/core/Transform");

	var mainCtx = Engine.createContext();

	var node = new RenderNode();
	var node2 = new RenderNode();

	var surface = new Surface({
	    size: [200, 200],
	    content: "Hello World",
	    classes: ["red-bg"],
	    properties: {
	        lineHeight: "200px",
	        textAlign: "center"
	    }
	});

	var surface2 = new Surface({
	    size: [200, 200],
	    content: "Secondary",
	    classes: ["grey-bg"],
	    properties: {
	        lineHeight: "200px",
	        textAlign: "center"
	    }
	});

	var modifier = new Modifier({
	    transform: Transform.move(Transform.rotateZ(Math.PI/4),[200, 100, 0]),
	    opacity: [0.6]
	});

	node.add(surface);
	node2.add(modifier).add(surface2);

	mainCtx.add(node);
	mainCtx.add(node2);
});
