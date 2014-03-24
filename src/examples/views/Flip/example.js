define(function(require, exports, module) {
	var Engine = require('famous/core/Engine');
	var Surface = require('famous/core/Surface');
	var Modifier = require('famous/core/Modifier');
	var Flip = require('famous/views/Flip');

	var mainCtx = Engine.createContext();
	mainCtx.setPerspective(1000);

	var flippable = new Flip();

	var front = new Surface({
	     content:'Front',
	     size: [300, 100],
	     properties: {
	         backgroundColor: 'red'
	     }
	});

	var back = new Surface({
	     content:'Back',
	     size: [300, 100],
	     properties: {
	         backgroundColor: 'blue'
	     }
	});

	flippable.linkFront(front);
	flippable.linkBack(back);

	mainCtx.add(new Modifier({origin: [.5, .5]})).add(flippable);

	Engine.on('click', function() {
	    this.flip();
	}.bind(flippable));
});
