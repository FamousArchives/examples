/**
 * Transitionable
 * --------
 *
 * Transitionable is  state maintainer for a smooth transition between
 * numerically-specified states. Example numeric states include floats or
 * Matrix objects. Transitionables form the basis
 * of Transform objects.
 */
define(function(require, exports, module) {
    var Engine         = require("famous/core/Engine");
    var Surface        = require("famous/core/Surface");
    var Modifier       = require("famous/core/Modifier");
    var Transform      = require("famous/core/Transform");
    var Timer          = require("famous/utilities/Timer");
    var Transitionable = require("famous/transitions/Transitionable");

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

    //set the initial value of the transtionable to the left side of the screen
    var maxOffset = 100;

    //create our transitionable
    var transitionable = new Transitionable(-maxOffset);

    //this controls the position of surface
    var modifier = new Modifier({
        origin: [.5,.5]
    });

    modifier.transformFrom(function() {
        return Transform.translate(transitionable.get(), 0, 0);
    });

    surface.on("click", function(){
        transitionable.set(maxOffset, {curve: "easeInOut", duration: 1000});
    });

    mainContext.add(modifier).add(surface);
});
