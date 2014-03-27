/**
 * Modifier with size
 * ------------------
 *
 * Modifiers have a size property that will affect any children
 * that depend on the size of the parent.
 *
 * In this example we have two surfaces, one that is added directly
 * to the context and one that is added to a modifier with a size of
 * [200, 200].  By setting the size of both of the surfaces to
 * [undefined, undefined], we allow them to fill their parent's
 * size.  Because of this, we see that the red surface fills the whole
 * window while the grey surface will respect the size of the modifier
 * that sits in front of it in the render tree.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var sizeMod = new Modifier({
        size: [200, 200]
    });

    var surfaceOne = new Surface({
        size: [undefined, undefined],
        content: "Parent is context",
        classes: ["red-bg"],
        properties: {
            lineHeight: window.innerHeight + 'px',
            textAlign: 'center'
        }
    });

    var surfaceTwo = new Surface({
        size: [undefined, undefined],
        content: "Parent is modifier",
        classes: ["grey-bg"],
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });

    mainContext.add(surfaceOne);
    mainContext.add(sizeMod).add(surfaceTwo);
});
