/**
 * View
 * -------
 *
 * View is one of the core components of Famo.us.  A view is 
 * a way to encapsulate modifiers, surfaces, and other views 
 * into a single view so they can be treated as a simgle component.
 *
 * Views also have dual EventHandlers for controlling the input
 * and output of events and an OptionsManager for dealing with 
 * recursive options passing.
 *
 * In this example, you can see that once the surfaces are added 
 * and have their output piped to the view, you no longer have
 * to deal with the surfaces themselves and just deal with the
 * view itself.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var View      = require("famous/core/View");
    var Surface   = require("famous/core/Surface");
    var Modifier  = require("famous/core/Modifier");
    var Transform = require("famous/core/Transform");

    var mainContext = Engine.createContext();

    var view = new View();

    var surface = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["red-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });
    surface.pipe(view);

    view._eventInput.on("click", function() {
        alert("Primary Surface Clicked");
    });

    var viewTwo = new View();

    var mod = new Modifier({
        transform: Transform.thenMove(Transform.rotateZ(Math.PI * 0.25),[200, 100, 0]),
        opacity: [0.6]
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
    surfaceTwo.pipe(viewTwo);

    viewTwo._eventInput.on("click", function() {
        alert("Secondary Surface Clicked");
    });

    view._add(surface);
    viewTwo._add(mod).add(surfaceTwo);

    mainContext.add(view);
    mainContext.add(viewTwo);
});
