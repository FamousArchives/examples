define(function(require, exports, module) {
    // import dependencies
    var Engine 				= require("famous/core/Engine");
    var Surface 			= require("famous/core/Surface");
    var Modifier 			= require("famous/core/Modifier");
    var Transform 			= require("famous/core/Transform");

    var Transitionable  	= require("famous/transitions/Transitionable");
    var SpringTransition	= require("famous/transitions/SpringTransition");

   	
    // create the main context
    var mainContext = Engine.createContext();

    var surface = new Surface({
    	size:[100,100],
    	classes: ['famousRedBackground'],
    	properties: {
    		borderRadius: "50px"
    	}
    });

    var modifier = new Modifier({
    	origin: [.5,.5]
    });

	Transitionable.registerMethod('spring', SpringTransition);
	var transition = {method: "spring"}


	
    modifier.setTransform(Transform.translate(0,100,0),transition);

    mainContext.add(modifier).add(surface);
});

