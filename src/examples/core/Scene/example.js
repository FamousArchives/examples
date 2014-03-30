/**
 * Scene
 * --------
 *
 * Scene is a way to define a layout first and
 * then add components to that layout by way of accessing
 * the unique identifier (id).  You can also change the JSON defining
 * the layout by way of the Scene's load function.  It is a
 * great tool for having flexible layouts since you can load
 * different Scene configurations depending on the window size.
 *
 * In the example, you can see a Scene is made and then surfaces
 * are added to the exposed RenderNodes.
 */
define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var Surface    = require("famous/core/Surface");
    var Scene      = require("famous/core/Scene");
    var Transform  = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var myScene = new Scene({
        id: "root",
        opacity: 1,
        target: [
            {
                transform: Transform.translate(10, 10),
                target: {id: "foo"}
            },
            {
                transform: [
                    {rotateZ: 0.1},
                    {scale: [0.5, 0.5, 1]}
                ],
                origin: [0.5, 0.5],
                target: {id: "bar"}
            }
        ]
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

    var surfaceTwo = new Surface({
        size: [200, 200],
        content: "Secondary",
        classes: ["grey-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    myScene.id["foo"].add(surface);
    myScene.id["bar"].add(surfaceTwo);

    mainContext.add(myScene);
});
