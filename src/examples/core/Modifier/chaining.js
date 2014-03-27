/**
 * Modifier chaining
 * ------------------
 *
 * When you chain modifiers all of them will be applied to 
 * any children in the render tree.  Also, the order in which you add
 * the modifiers matters greatly.  Translating and then rotating
 * means something very different than rotating and then translating.
 *
 * In this example, we can see that the two surfaces are layed out
 * differently because one has its translation happen before its rotation
 * and the other has the reverse.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var modifierOne = new Modifier({
        transform: Transform.translate(200, 0, 0)
    });

    var modifierTwo = new Modifier({
        transform: Transform.rotateZ(0.7)
    });

    var surface = new Surface({
        size: [200, 200],
        content: "Translate then rotate",
        classes: ["red-bg"],
        properties: {
            textAlign: 'center',
            lineHeight: '200px'
        }
    });

    var modifierThree = new Modifier({
        transform: Transform.rotateZ(0.7)
    });

    var modifierFour = new Modifier({
        transform: Transform.translate(200, 0, 0)
    });

    var surfaceTwo = new Surface({
        size: [200, 200],
        content: "Rotate then translate",
        classes: ["grey-bg"],
        properties: {
            textAlign: 'center',
            lineHeight: '200px'
        }
    });

    mainContext.add(modifierOne).add(modifierTwo).add(surface);
    mainContext.add(modifierThree).add(modifierFour).add(surfaceTwo);
});
