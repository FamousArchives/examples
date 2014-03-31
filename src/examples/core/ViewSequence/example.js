/**
 * ViewSequence
 * ------------
 *
 * ViewSequence is way to iterate through and modify
 * a collection of renderable elements.  It is useful for
 * components that act of a collection of renderables such
 * as Scrollview.
 *
 * In this example, you can see that we are iterating through 
 * the ViewSequence by changing the index that the ViewSequence 
 * is referring to.
 */
define(function(require, exports, module) {
    var Engine       = require("famous/core/Engine");
    var Surface      = require("famous/core/Surface");
    var Modifier     = require("famous/core/Modifier")
    var ViewSequence = require("famous/core/ViewSequence");
    var Timer        = require("famous/utilities/Timer");

    var mainContext = Engine.createContext();

    var viewSequence = new ViewSequence();

    for(var i = 0; i < 8; i++) {
        viewSequence.push(new Surface({
            content: "I am panel " + (i + 1),
            size: [200, 200],
            properties: {
                backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
                color: "black",
                textAlign: "center",
                lineHeight: "200px"
            }
        }));
    }

    var counter = 0;
    Timer.setInterval(function() {
        viewSequence.index = ++counter % (viewSequence.array.length - 1)
    }, 1000);

    mainContext.add(new Modifier({origin: [.5, .5]})).add(viewSequence);
});
