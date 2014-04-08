/**
 * Setting Perspective
 * -------
 *
 * A context defines a 3D space in which HTML content can move. Setting the
 * perspective of the context will provide a sense of depth.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
 * for an account on perspective.
 *
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");
    var Modifier = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    mainContext.setPerspective(200);

    var surface = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["red-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    var rotateX = new Modifier({
        origin : [.5,.5],
        transform : Transform.rotateX(Math.PI/4)
    });

    mainContext.add(rotateX).add(surface);
});
