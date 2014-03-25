define(function(require, exports, module) {
	var Engine = require("famous/core/Engine");
	var Surface = require("famous/core/Surface");

	var el = document.createElement('div');
	el.id = 'testId';
	el.className = 'testClass'
	document.body.appendChild(el);

	var mainCtx = Engine.createContext(el);

	mainCtx.add(new Surface({
	    size: [undefined, undefined],
	    content: "I am a surface",
	    properties: {
	        backgroundColor: "#3cf"
	    }
	}));
});
