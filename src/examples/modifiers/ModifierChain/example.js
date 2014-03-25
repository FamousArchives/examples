define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var ModifierChain = require('famous/modifiers/ModifierChain');
    var Timer = require('famous/utilities/Timer');
   
    var mainContext = Engine.createContext();

    var modifierChain = new ModifierChain();

    var modifierOne = new Modifier({
    	origin: [.5, .5]
    });

    var modifierTwo = new Modifier({
    	transform: Transform.translate(0, 100, 0)
    });
    
    var surface = new Surface({
	    size: [200, 200],
	    content: "Click me to remove the center origin modifier",
	    classes: ["red-bg"],
	    properties: {
	        lineHeight: "20px",
	        textAlign: "center",
	        padding: '80px 0'
	    }
	});

    modifierChain.addModifier(modifierOne);
    modifierChain.addModifier(modifierTwo);
	mainContext.add(modifierChain).add(surface);

	surface.on('click', function() {
		modifierChain.removeModifier(modifierOne);
	});
});
