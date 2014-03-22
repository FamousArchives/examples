define(function(require, exports, module) {
    "use strict";
    // import dependencies
    var Engine 				= require("famous/core/Engine");
    var Surface 			= require("famous/core/Surface");
    var Modifier 			= require("famous/core/Modifier");

    var TransitionableTransform = require("famous/transitions/TransitionableTransform");


   	
    // create the main context
    var mainContext = Engine.createContext();

    //this is the surface displayed
    var surface = new Surface({
    	size:[100,100],
    	classes: ["famousRedBackground"],
    	properties: {
    		borderRadius: "50px"
    	}
    });



    //create our transitionable
    var tt = new TransitionableTransform();
    tt.setScale([3,3,1], {duration: 3000});


    var modifier = new Modifier({
        origin: [.5,.5],
        transform: tt
    });


    mainContext.add(modifier).add(surface);
});
