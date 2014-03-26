define(function(require, exports, module) {
    var Engine 	 = require("famous/core/Engine");
    var Surface  = require("famous/core/Surface");
    var Modifier = require("famous/core/Modifier");
    var TransitionableTransform = require("famous/transitions/TransitionableTransform");

    // create the main context
    var mainContext = Engine.createContext();

    //create a grid
    var grid = new Surface({
        size: [481,481],
        classes: ['graph']
    });
    mainContext.add(new Modifier({origin:[.5,.5]})).add(grid);

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
    
    var modifier = new Modifier({
        origin: [.5,.5],
        transform: tt
    });

    surface.on("click", function(){
        tt.setScale([3,3,1], {duration: 3000});
    });

    mainContext.add(modifier).add(surface);
});
