define(function(require, exports, module) {
	var Engine    = require("famous/core/Engine");
	var Surface   = require("famous/core/Surface");
	var Modifier  = require("famous/core/Modifier");
	var Utility   = require("famous/utilities/Utility");

	var mainCtx = Engine.createContext();

	for (var key in Utility.Origin) {
		var modifier = new Modifier({
			origin: Utility.Origin[key]
		});

		var surface = new Surface({
			size: [50, 50],
			content: key,
			classes: ['red-bg'],
			properties: {
				lineHeight: '50px',
				textAlign: 'center'
			}
		});

		mainCtx.add(modifier).add(surface);
	}
});
