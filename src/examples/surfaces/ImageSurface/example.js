/**
 * ImageSurface
 * ------------
 *
 * ImageSurface is the same interface as a regular Surface
 * except that it will create an img tag instead of a
 * div tag.  When you call setContent on an ImageSurface,
 * it will chage the src property of the tag.
 *
 * In this example we have an ImageSurface with the
 * Famo.us logo as it's content.
 */
define(function(require, exports, module) {
    var Engine       = require("famous/core/Engine");
    var Modifier     = require("famous/core/Modifier");
    var ImageSurface = require("famous/surfaces/ImageSurface");

    var mainCtx = Engine.createContext();

    var image = new ImageSurface({
        size: [200, 200]
    });

    image.setContent("content/famous_symbol.svg");

    mainCtx.add(new Modifier({origin: [.5, .5]})).add(image);
});
