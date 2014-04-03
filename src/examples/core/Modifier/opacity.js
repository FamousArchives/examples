/**
 * Modifier with opacity
 * ---------------------
 *
 * Modifiers have an opacity property.  By setting the opacity
 * of a modifier, all renderables below the modifier in the
 * render tree will have their opacity's affected multiplicatively.
 *
 * In this example we have one surface being affected by a .5
 * opacity modifier and another surface that is affected by that
 * same modifier plus an additional .25 opacity modifier which
 * results in an opacoty of .125.   
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var halfOpacityMod = new Modifier({
        opacity: 0.5
    });

    var quarterOpacity = new Modifier({
        transform: Transform.translate(100, 0, 0),
        opacity: 0.25
    });

    var surfaceOne = new Surface({
        size: [100, 100],
        content: "Half",
        classes: ["red-bg"],
        properties: {
            textAlign: 'center',
            lineHeight: '100px'
        }
    });

    var surfaceTwo = new Surface({
        size: [100, 100],
        content: ".125 Opacity",
        classes: ["red-bg"],
        properties: {
            textAlign: 'center',
            lineHeight: '100px'
        }
    });

    var halfOpacity = mainContext.add(halfOpacityMod);
    halfOpacity.add(surfaceOne);
    halfOpacity.add(quarterOpacity).add(surfaceTwo);
});
