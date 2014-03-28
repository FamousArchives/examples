/**
 * RenderNode
 * ----------
 *
 * RenderNode is essentially a blank node in the render
 * tree.  It gives the user a way to group renderables and
 * modifiers together so that they can be treated as a single
 * component.
 *
 * In this example, you can see how render nodes are used. 
 * Once you add components to a render node, you can
 * continue to work with just the render node.
 */
define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var RenderNode = require("famous/core/RenderNode");
    var Surface    = require("famous/core/Surface");
    var Modifier   = require("famous/core/Modifier");
    var Transform  = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var node = new RenderNode();
    var nodeTwo = new RenderNode();

    var surface = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["red-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    var surfaceTwo = new Surface({
        size: [200, 200],
        content: "Secondary",
        classes: ["grey-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    var modifier = new Modifier({
        transform: Transform.move(Transform.rotateZ(Math.PI/4),[200, 100, 0]),
        opacity: [0.6]
    });

    node.add(surface);
    nodeTwo.add(modifier).add(surfaceTwo);

    mainContext.add(node);
    mainContext.add(nodeTwo);
});
