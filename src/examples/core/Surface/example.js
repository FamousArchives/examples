/**
 * Surface
 * ---------
 *
 * A Famo.us Surface is loosely coupled to an HTML <div> on screen. A Surface
 * can take in any valid HTML as content.
 *
 * A popular question to ask is, when should I craete multiple surfaces, versus
 * populating a single surface with more HTML content? The answer hinges on animating
 * content, versus static content. If your content is dynamically changing, create
 * a Surface for it. If your content is static (or rarely changing) HTML,
 * populate a Surface with it.
 *
 * In this example, a single surface with
 * some properties is set and add to the render tree.
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");

    var mainContext = Engine.createContext();

    var surface = new Surface({
        size: [200, 200],
        content: "Hello World",
        classes: ["red-bg"],
        properties: {
            lineHeight: "200px",
            textAlign: "center"
        }
    });

    mainContext.add(surface);
});
