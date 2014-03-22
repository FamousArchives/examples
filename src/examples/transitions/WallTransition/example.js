define(function(require, exports, module) {
    // import dependencies
    var Engine 				= require("famous/core/Engine");
    var Surface 			= require("famous/core/Surface");
    var Modifier 			= require("famous/core/Modifier");
    var Transform 			= require("famous/core/Transform");

    var Transitionable  	= require("famous/transitions/Transitionable");
    var WallTransition		= require("famous/transitions/WallTransition");

   	
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

    // debugger
	Transitionable.registerMethod('wall', WallTransition);

	var transition = {method: 'wall', dampingRatio : 0, period : 500};
	
    modifier.setTransform(Transform.translate(0,100,0),transition);

    mainContext.add(modifier).add(surface);
});
