/**
 * Modifier branching
 * ------------------
 *
 * When you create a new branch with a modifier, only the modifiers
 * and renderables below it in the render tree will be affected by it.
 *
 * In this example, we can see that both surfaces are affected by 
 * modifierOne but only the smaller grey surface is affected by 
 * the translation.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var modifierOne = new Modifier({
        transform: Transform.rotateZ(.7),
        origin: [.5, .5]
    });

    var modifierTwo = new Modifier({
        transform: Transform.translate(200, 0, 0)
    });

    var surfaceOne = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["red-bg"],
        properties: {
            textAlign: 'center',
            lineHeight: '200px'
        }
    });

    var surfaceTwo = new Surface({
        size: [50, 50],
        content: "Small",
        classes: ["grey-bg"],
        properties: {
            textAlign: 'center',
            lineHeight: '50px'
        }
    });

    var node = mainContext.add(modifierOne)
    node.add(surfaceOne);
    node.add(modifierTwo).add(surfaceTwo);    
});
