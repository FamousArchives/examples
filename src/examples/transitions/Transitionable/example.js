define(function(require, exports, module) {
    "use strict";
    // import dependencies
    var Engine 				= require("famous/core/Engine");
    var Surface 			= require("famous/core/Surface");
    var Modifier 			= require("famous/core/Modifier");
    var Transform 			= require("famous/core/Transform");
    var Timer               = require("famous/utilities/Timer");
    var Transitionable  	= require("famous/transitions/transitionable");

   	
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


    //set the initial value of the transtionable to the left side of the screen
    var screenWidth = window.innerWidth;
    var maxOffset = (screenWidth / 2) * .8;


    //create our transitionable
	var xPos = new Transitionable(-maxOffset);


    //this controls the position of surface
    var modifier = new Modifier({
        origin: [.5,.5],
        transform: Transform.translate(xPos.get(), 0, 0)
    });


    //create an animation loop to redraw the surface
    var interval = Timer.setInterval(function(){
        modifier.setTransform(Transform.translate(xPos.get(), 0, 0));
    },0);


    //use the transitionable to modify the position of the surface
    //try spring, easeIn, easeOut, easeInOut, linear, easeOutBounce for curve values
    xPos.set(maxOffset, {curve: "easeInOut", duration: 1000}, function(){
        Timer.clear(interval);
    });

    mainContext.add(modifier).add(surface);
});
