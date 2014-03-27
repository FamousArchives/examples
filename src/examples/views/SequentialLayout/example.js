/**
 * SequentialLayout
 * ------------------
 *
 * SequentialLayout will lay out a collection of renderables
 * sequentially in the specified direction.
 *
 * In this example, we have ten surfaces displayed veritcally.
 */
define(function(require, exports, module) {
    var Engine           = require("famous/core/Engine");
    var Surface          = require("famous/core/Surface");
    var SequentialLayout = require("famous/views/SequentialLayout");

    var mainContext = Engine.createContext();

    var sequentialLayout = new SequentialLayout({
        direction: 1
    });
    var surfaces = [];

    sequentialLayout.sequenceFrom(surfaces);

    for (var i = 0; i < 10; i++) {
        surfaces.push(new Surface({
             content: "Surface: " + (i + 1),
             size: [undefined, window.innerHeight/10],
             properties: {
                 backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
                 lineHeight: window.innerHeight/10 + "px",
                 textAlign: "center"
             }
        }));
    }

    mainContext.add(sequentialLayout);
});
