/**
 * Modifier with origin
 * --------------------
 *
 * Modifiers have an origin property which affects the positioning
 * of children in the render tree.  By default, modifiers have an
 * origin of [0, 0], which means that all children have their
 * [0, 0] origin at the same location as the parent's [0, 0] origin.
 * This is the same as the top left.  By changing this value, you gain
 * the ability to lay out children relative to the size of the direct
 * parent in the render tree.
 *
 * In the example below, we place the nine surfaces inside of the context,
 * which is the size of the entire window.  By then using origin, we can
 * place surfaces relative to the entire window.
 * 
 */
define(function(require, exports, module) {
    var Engine   = require("famous/core/Engine");
    var Surface  = require("famous/core/Surface");
    var Modifier = require("famous/core/Modifier");

    var mainContext = Engine.createContext();

    var origins = {
        'tl': [0, 0],
        'tc': [.5, 0],
        'tr': [1, 0],
        'cl': [0, .5],
        'cc': [.5, .5],
        'cr': [1, .5],
        'bl': [0, 1],
        'bc': [.5, 1],
        'br': [1, 1]
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
