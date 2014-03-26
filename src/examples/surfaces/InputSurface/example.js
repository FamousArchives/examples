/**
 * InputSurface
 * ------------
 *
 * ImageSurface is the same interface as a regular Surface
 * except that it will create an input tag instead of a
 * div tag.  It also exposes an interface for defining
 * input specific properites such as name, placeholder, value,
 * and type.
 *
 * In this example we have an InputSurface to insert
 * text.
 */
define(function(require, exports, module) {
	var Engine       = require("famous/core/Engine");
	var Modifier     = require("famous/core/Modifier");
	var InputSurface = require("famous/surfaces/InputSurface");

	var mainCtx = Engine.createContext();

	var input = new InputSurface({
		size: [200, 200],
		name: 'inputSurface',
		placeholder: 'Type text here',
		value: '',
		type: 'text'
	});

	mainCtx.add(new Modifier({origin: [.5, .5]})).add(input);
});
