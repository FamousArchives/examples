/**
 * Scene
 * --------
 *
 * Scene is a way of defining a complex layout in JSON format.
 * Components of that layout can be accessed by their unique identifier (id).
 * The JSON defining the layout can be modified dynamically by the Scene's load
 * function.
 *
 * In the example, a Scene is created with a complex layout of
 * transforms and surfaces.
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
