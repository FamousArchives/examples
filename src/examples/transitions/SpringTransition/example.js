/**
 * SpringTransition
 * --------
 *
 * SpringTransition is a method of transitioning between two values (numbers,
 * or arrays of numbers) with a bounce. The transition will overshoot the target
 * state depending on the parameters of the transition.
 *
 * In this example, there is a surface attached to a SpringTransition.
 */
define(function(require, exports, module) {
    var Engine              = require("famous/core/Engine");
    var Surface          = require("famous/core/Surface");
    var Modifier         = require("famous/core/Modifier");
    var Transform          = require("famous/core/Transform");
    var Transitionable   = require("famous/transitions/Transitionable");
    var SpringTransition = require("famous/transitions/SpringTransition");

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

    Transitionable.registerMethod('spring', SpringTransition);
    var transition = {
        method: "spring",
        period: 1000,
        dampingRatio: .1,
        velocity: 0

    }

    surface.on("click", function(){
        modifier.setTransform(Transform.translate(0,0,0),transition);
    });
    
    mainContext.add(modifier).add(surface);
});

