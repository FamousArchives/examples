/**
 * WallTransition
 * --------
 *
 * To do
 */
define(function(require, exports, module) {
    // import dependencies
    var Engine                 = require("famous/core/Engine");
    var Surface             = require("famous/core/Surface");
    var Modifier             = require("famous/core/Modifier");
    var Transform             = require("famous/core/Transform");

    var Transitionable      = require("famous/transitions/Transitionable");
    var WallTransition        = require("famous/transitions/WallTransition");

       
    // create the main context
    var mainContext = Engine.createContext();

    //show a grid for reference
    var grid = new Surface({
        size: [481,481],
        classes: ['graph']
    });
    mainContext.add(new Modifier({origin:[.5,.5]})).add(grid);


    var surface = new Surface({
        size:[100,100],
        classes: ['famousRedBackground'],
        properties: {
            borderRadius: "50px"
        }
    });

    var modifier = new Modifier({
        origin: [.5,.5],
        transform: Transform.translate(0,-240,0)
    });

    // debugger
    Transitionable.registerMethod('wall', WallTransition);

    var transition = {
        method: 'wall', 
        period: 1000,
        dampingRatio : 0, 
        velocity: 0,
        restitution : .5 //how bouncy the wall is
    };
    

    surface.on("click", function(){
        modifier.setTransform(Transform.translate(0,0,0),transition);
    });
    

    mainContext.add(modifier).add(surface);
});