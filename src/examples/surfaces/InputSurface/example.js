define(function(require, exports, module) {
	var Engine       = require("famous/core/Engine");
	var InputSurface = require("famous/surfaces/InputSurface");

	var mainCtx = Engine.createContext();

	var input = new InputSurface({
		size: [200, 200],
		name: 'inputSurface',
		placeholder: 'Type text here',
		value: '',
		type: 'text'
	});

	mainCtx.add(input);
});
