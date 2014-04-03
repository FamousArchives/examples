/**
 * Modifier with size
 * ------------------
 *
 * Modifiers have a size property that will affect any children
 * that depend on the size or origin of the parent. Size can be thought of as
 * a "bounding box" from which an origin and node size is relative to.
 *
 * In this example, we have a surface whose size is [undefined, undefined].
 * Famo.us will then size the surface relative to the last defined size context.
 * Since we include a modifier with size of [200,200] before the surface, the surface
 * is sized to [200,200].
 *
 * To demonstrate origin relative to a size context, we have defined a rotation
 * about the center of a [200,200] bounding box, so that our surface rotates about
 * its center, as opposed to the default origin [0,0] (top left corner).
 *
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

    var rotateMod = new Modifier({
        origin : [.5,.5],
        transform : Transform.rotateZ(Math.PI/4)
    });

    var surface = new Surface({
        size: [undefined, undefined],
        classes: ["grey-bg"],
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });

    mainContext.add(sizeMod).add(rotateMod).add(surface);
});
