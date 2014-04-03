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
    var Engine           = require("famous/core/Engine");
    var Surface          = require("famous/core/Surface");
    var Modifier         = require("famous/core/Modifier")
    var ViewSequence     = require("famous/core/ViewSequence");
    var SequentialLayout = require("famous/views/SequentialLayout");

    var mainContext = Engine.createContext();

    var viewSequence = new ViewSequence();

    for(var i = 0; i < 8; i++) {
        viewSequence.push(new Surface({
            content: "I am panel " + (i + 1),
            size: [undefined, 200],
            properties: {
                backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
                color: "black",
                textAlign: "center",
                lineHeight: "200px"
            }
        }));
    }

    var sequentialLayout = new SequentialLayout({
        direction: 1
    });
    sequentialLayout.sequenceFrom(viewSequence);

    mainContext.add(sequentialLayout);

    Engine.on('click', function() {
        viewSequence.splice(1, 1);
    });
});
