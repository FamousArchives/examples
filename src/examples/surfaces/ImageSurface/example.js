define(function(require, exports, module) {
	var Engine       = require("famous/core/Engine");
	var ImageSurface = require("famous/surfaces/ImageSurface");

	var mainCtx = Engine.createContext();

	var image = new ImageSurface({
		size: [200, 200]
	});

	image.setContent("content/famous_symbol.svg");

	mainCtx.add(image);
});
