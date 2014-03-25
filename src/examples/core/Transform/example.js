/**
 * Transform
 * ---------
 *
 * Transform is a class that helps create the proper matricies that 
 * describe physical transformations such as:
 *
 * - Translation
 * - Rotation
 * - Scale
 * - Skew
 *
 * Transform is generally used with Modifiers so that child elements
 * can be affected by the physical transformations that are applied
 * to them.
 *
 * In this example we see a surface that is rotated PI/4 clockwise and the
 * is translated 200px right and 100px down.
 */
define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");
	var Transform = require("famous/core/Transform");

	var mainContext = Engine.createContext();

	var transform = new Modifier({
	    transform: Transform.thenMove(Transform.rotateZ(Math.PI/4),[200, 100, 0])
	});

	var surface = new Surface({
	    size: [200, 200],
	    content: "Hello World",
	    classes: ["red-bg"],
	    properties: {
	        lineHeight: "200px",
	        textAlign: "center"
	    }
	});

	mainContext.add(transform).add(surface);
});
