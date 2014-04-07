/**
 * MouseSync
 * ------------
 *
 * Famo.us syncs default to track two-dimensional movement,
 * but can be passed as optional direction parameter to restrict
 * movement to a single axis.
 *
 * In this example, we create a MouseSync but only track the x-axis
 * changes on mouse drag.
 *
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var MouseSync = require("famous/inputs/MouseSync");
    var Surface   = require("famous/core/Surface");

    var mainContext = Engine.createContext();

    var start = 0;
    var update = 0;
    var end = 0;

    var x = 0;
    var y = 0;
    var position = [x, y];

    var mouseSync = new MouseSync(function() {
        return x;
    }, {direction : MouseSync.DIRECTION_X});

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
        position = [x, y];
        surface.setContent(contentTemplate());
    });

    mouseSync.on("update", function(data) {
        update++;
        position[0] += data.position;
        surface.setContent(contentTemplate());
    });

    mouseSync.on("end", function() {
        end++;
        surface.setContent(contentTemplate());
    });

    mainContext.add(surface);
});
