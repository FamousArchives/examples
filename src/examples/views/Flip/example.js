/**
 * Flip
 * ----------
 *
 * Flip is a view that has a front and a back surfaces
 * and exposes an interface for changing it's orientation.
 *
 * In this example, we toggle between the front and the
 * back on every click event.
 */
define(function(require, exports, module) {
	var Engine   = require('famous/core/Engine');
	var Surface  = require('famous/core/Surface');
	var Modifier = require('famous/core/Modifier');
	var Flip     = require('famous/views/Flip');

	var mainContext = Engine.createContext();
	mainContext.setPerspective(1000);

	var flippable = new Flip();

	var front = new Surface({
	    size: [200, 200],
	    content: "front",
	    classes: ["red-bg"],
	    properties: {
	        lineHeight: "200px",
	        textAlign: "center"
	    }
	});

	var back = new Surface({
	    size: [200, 200],
	    content: "back",
	    classes: ["grey-bg"],
	    properties: {
	        lineHeight: "200px",
	        textAlign: "center"
	    }
	});

	flippable.linkFront(front);
	flippable.linkBack(back);

	mainContext.add(new Modifier({origin: [.5, .5]})).add(flippable);

	Engine.on('click', function() {
	    this.flip();
	}.bind(flippable));
});
