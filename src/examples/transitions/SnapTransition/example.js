/**
 * SnapTransition
 * ----------------
 *
 * To do
 */
define(function(require, exports, module) {
    // import dependencies
    var Engine         = require("famous/core/Engine");
    var Surface        = require("famous/core/Surface");
    var Modifier       = require("famous/core/Modifier");
    var Transform      = require("famous/core/Transform");
    var Transitionable = require("famous/transitions/Transitionable");
    var SnapTransition = require("famous/transitions/SnapTransition");
 
    // create the main context
    var mainContext = Engine.createContext();

    var surface = new Surface({
        size:[100,100],
        content: 'Click Me',
        classes: ['red-bg'],
        properties: {
            textAlign: 'center',
            lineHeight: '100px'
        }
    });

    var modifier = new Modifier({
        origin: [.5,.5],
        transform: Transform.translate(0,-240,0)
    });

    var mod2 = new Modifier({
        transform: Transform.rotateX(0.2)
    });

    Transitionable.registerMethod('snap', SnapTransition);
    var transition = {
        method: "snap",
        period: 1000,
        dampingRatio: .3,
        velocity: 0
    };

    surface.on("click", function(){
        modifier.setTransform(Transform.translate(0,0,0),transition);
    });

    mainContext.add(modifier).add(mod2).add(surface);
});
