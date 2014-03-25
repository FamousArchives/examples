define(function(require, exports, module) {
	var Engine           = require("famous/core/Engine");
	var Surface          = require("famous/core/Surface");
	var ContainerSurface = require("famous/surfaces/ContainerSurface");
	var Scrollview       = require("famous/views/Scrollview");

	var mainCtx = Engine.createContext();

	var container = new ContainerSurface({
		size: [400, 400]
	});

	var surfaces = [];
	var scrollview = new Scrollview();

	var temp;
	for (var i = 0; i < 100; i++) {
		temp = new Surface({
			size: [undefined, 50],
			content: 'I am surface: ' + (i + 1),
			classes: ['red-bg']
			properties: {
				textAlign: 'center',
				lineHeight: '50px'
			}
		});

		temp.pipe(scrollview);
		surfaces.push(temp);
	}

	scrollview.sequenceFrom(surfaces);
	container.add(scrollview);

	mainCtx.add(container);
});
