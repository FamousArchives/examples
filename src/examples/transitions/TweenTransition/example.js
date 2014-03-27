/**
 * WallTransition
 * --------
 *
 * To do
 */
define(function(require, exports, module) {
    var Engine          = require("famous/core/Engine");
    var Surface         = require("famous/core/Surface");
    var Modifier        = require("famous/core/Modifier");
    var Transform       = require("famous/core/Transform");
    var Transitionable  = require("famous/transitions/Transitionable");
    var TweenTransition = require("famous/transitions/TweenTransition");
    
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
        transform: Transform.translate(0,0,0)
    });

    Transitionable.registerMethod('tween', TweenTransition);

    var transition = {
        method: 'tween',
        curve: "easeInOut",
        period: 1500,
    };
    
    surface.on("click", function(){
        modifier.setOpacity(0,transition);
    });

    mainContext.add(modifier).add(surface);
});
