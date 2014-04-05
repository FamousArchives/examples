/**
 * Transform
 * ---------
 *
 * A Famo.us Transform corresponds to a CSS3 3D transform.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
 *
 * With transforms you can affect the translation, rotation, scale, or skew of a
 * Famo.us renderable, e.g., a Famo.us Surface.
 *
 * Transforms are generally parameters to Famo.us modifiers which apply the
 * transform to its children.
 *
 * In this example, a Transform corresponding to a rotation of 45 degreees
 * is created and applied to a surface via a Famo.us Modifier.
 *
 * TODO: add example with a transitioning transform
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var rotateModifier = new Modifier({
        transform: Transform.rotateZ(Math.PI/4)
    });

    var surface = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["red-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    mainContext.add(rotateModifier).add(surface);
});
