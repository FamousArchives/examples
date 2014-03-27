/**
 * Scrollview
 * ------------
 *
 * Scrollview is one of the core views in Famo.us. Scrollview
 * will lay out a collection of renderables sequentially in 
 * the specified direction, and will allow you to scroll 
 * through them with mousewheel or touch events.
 *
 * In this example, we have a Scrollview that sequences over
 * a collection of surfaces that vary in color
 */
define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var Surface    = require("famous/core/Surface");
    var Scrollview = require("famous/views/Scrollview");

    var mainContext = Engine.createContext();

    var scrollview = new Scrollview();
    var surfaces = [];

    scrollview.sequenceFrom(surfaces);

    for (var i = 0, temp; i < 40; i++) {
        temp = new Surface({
             content: "Surface: " + (i + 1),
             size: [undefined, 200],
             properties: {
                 backgroundColor: "hsl(" + (i * 360 / 40) + ", 100%, 50%)",
                 lineHeight: "200px",
                 textAlign: "center"
             }
        });

        temp.pipe(scrollview);
        surfaces.push(temp);
    }

    mainContext.add(scrollview);
});
