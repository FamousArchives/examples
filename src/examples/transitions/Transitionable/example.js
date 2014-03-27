/**
 * Transitionable
 * --------
 *
 * To do
 */
define(function(require, exports, module) {
    var Engine            = require("famous/core/Engine");
    var Surface        = require("famous/core/Surface");
    var Modifier        = require("famous/core/Modifier");
    var Transform        = require("famous/core/Transform");
    var Timer          = require("famous/utilities/Timer");
    var Transitionable = require("famous/transitions/Transitionable");

    // create the main context
    var mainContext = Engine.createContext();
    
    //show a grid for reference
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

    //set the initial value of the transtionable to the left side of the screen
    var maxOffset = 240;

    //create our transitionable
    var xPos = new Transitionable(-maxOffset);

    //this controls the position of surface
    var modifier = new Modifier({
        origin: [.5,.5],
        transform: Transform.translate(xPos.get(), 0, 0)
    });

    Engine.on('prerender', function(){
        modifier.setTransform(Transform.translate(xPos.get(), 0, 0));
    });

    surface.on("click", function(){
        xPos.set(maxOffset, {curve: "easeInOut", duration: 1000});
    });

    mainContext.add(modifier).add(surface);
});
