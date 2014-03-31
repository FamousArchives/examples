/**
 * PinchSync
 * ------------
 * 
 * PinchSync handles piped-in two-finger touch events to change
 * position via pinching / expanding. It outputs an object with
 * position, velocity, touch IDs, and distance.
 *
 * In this example, we create a PinchSync and display the data
 * it receives to the screen.  Based on the data, we can decide if
 * it is pinching or expanding.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var Surface   = require("famous/core/Surface");
    var PinchSync = require("famous/inputs/PinchSync");

    var mainCtx = Engine.createContext();

    var start = 0;
    var update = 0;
    var end = 0;
    var recentData = "";
    var direction = "";
    var distance = 0;

    var pinchSync = new PinchSync(function() {
        return [0, 0];
    });
    Engine.pipe(pinchSync);

    var contentTemplate = function() {
        return "<div>Start Count: " + start + "</div>" +
        "<div>End Count: " + end + "</div>" +
        "<div>Update Count: " + update + "</div>" +
        "<div>Update Data:<pre>" + recentData + "</pre></div>" +
        "<div>Pinch Direction: " + direction + "</div>" +
        "<div>Finger Separation Distance:" + distance + "</div>";
    };

    var surface = new Surface({
        size: [undefined, undefined],
        classes: ["grey-bg"],
        content: contentTemplate()
    });

    pinchSync.on("start", function() {
        start++;
        surface.setContent(contentTemplate());
    });

    pinchSync.on("update", function(data) {
        update++;
        distance = data.distance;
        direction = data.v > 0 ? "Expanding" : "Pinching";
        recentData = JSON.stringify(data, undefined, 2); 
        surface.setContent(contentTemplate());
    });

    pinchSync.on("end", function() {
        end++;
        surface.setContent(contentTemplate());
    });

    mainCtx.add(surface);
});
