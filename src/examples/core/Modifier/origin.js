/**
 * Modifier with origin
 * --------------------
 *
 * Modifiers have an origin property which affects the positioning
 * of children in the render tree.  By default, modifiers have an
 * origin of [0, 0], which means child nodes are positioned at the top left of
 * the last defined size (defaulting to the window's size). By modifying origin,
 * child nodes can be layed out relative to a different origin (such as the center)
 * of their parent's size context. This is similar in spirit to how the CSS float
 * property behaves.
 *
 * Famo.us will internally ensure consistency of size and origin even when
 * the window is resized, or a mobile device changes its orientation.
 *
 * In the example below, nine surfaces are placed inside of a Famo.us context,
 * sized of the entire window (by default).  By modifying origins, these surfaces
 * can be layed out at key positions of their sizing context.
 * 
 */
define(function(require, exports, module) {
    var Engine   = require("famous/core/Engine");
    var Surface  = require("famous/core/Surface");
    var Modifier = require("famous/core/Modifier");

    var mainContext = Engine.createContext();

    var origins = {
        'topLeft':      [ 0,  0],
        'topCenter':    [.5,  0],
        'topRight':     [ 1,  0],
        'centerLeft':   [ 0, .5],
        'center':       [.5, .5],
        'centerRight':  [ 1, .5],
        'bottomLeft':   [ 0,  1],
        'bottomCenter': [.5,  1],
        'bottomRight':  [ 1,  1]
    };

    for (var key in origins) {
        var modifier = new Modifier({
            origin: origins[key]
        });

        var surface = new Surface({
            size: [50, 50],
            content: key,
            classes: ['red-bg'],
            properties: {
                lineHeight: '50px',
                textAlign: 'center'
            }
        });

        mainContext.add(modifier).add(surface);
    }
});
