/**
 * MouseSync
 * ------------
 *
 * MouseSync handles mouse drag events. It outputs an object with two
 * properties: position and velocity.
 *
 * In this example, we create a MouseSync and display the data
 * it receives to the screen.  Based on the update information,
 * we can determine how far away from the mousedown event location
 * we are when we are dragging.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var MouseSync = require("famous/inputs/MouseSync");
    var Surface   = require("famous/core/Surface");

    var mainContext = Engine.createContext();

    var start = 0;
    var update = 0;
    var end = 0;

    var position = [0, 0];
    var mouseSync = new MouseSync(function() {
        return position;
    });

    Engine.pipe(mouseSync);

    var contentTemplate = function() {
        return "<div>Start Count: " + start + "</div>" +
        "<div>End Count: " + end + "</div>" +
        "<div>Update Count: " + update + "</div>" +
        "<div>Distance away from mousedown origin:<br>" + position + "</div>";
    };

    var surface = new Surface({
        size: [undefined, undefined],
        classes: ["grey-bg"],
        content: contentTemplate()
    });

    mouseSync.on("start", function() {
        start++;
        position = [0, 0];
        surface.setContent(contentTemplate());
    });

    mouseSync.on("update", function(data) {
        update++;
        position[0] += data.position[0];
        position[1] += data.position[1];
        surface.setContent(contentTemplate());
    });

    mouseSync.on("end", function() {
        end++;
        surface.setContent(contentTemplate());
    });

    mainContext.add(surface);
});
