/**
 * RotateSync
 * ------------
 * 
 * RotateSync handles piped-in two-finger touch events to support rotation.
 * It outputs an object with position, velocity, touches, and angle.
 *
 * In this example, we create a RotateSync and display the data
 * it receives to the screen.
 */
define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var Surface    = require("famous/core/Surface");
    var RotateSync = require("famous/inputs/RotateSync");

    var mainContext = Engine.createContext();

    var start = 0;
    var update = 0;
    var end = 0;
    var direction = "";
    var angle = 0;
    var delta = 0;

    var rotateSync = new RotateSync();

    Engine.pipe(rotateSync);

    var contentTemplate = function() {
        return "<div>Start Count: " + start + "</div>" +
        "<div>End Count: " + end + "</div>" +
        "<div>Update Count: " + update + "</div>" +
        "<div>Direction: " + direction + "</div>" +
        "<div>Delta: " + delta.toFixed(3) + "</div>" +
        "<div>Angle: " + angle.toFixed(3) + "</div>";
    };

    var surface = new Surface({
        size: [undefined, undefined],
        classes: ['grey-bg'],
        content: contentTemplate()
    });

    rotateSync.on("start", function() {
        start++;
        angle = 0;
        surface.setContent(contentTemplate());
    });

    rotateSync.on("update", function(data) {
        update++;
        direction = data.velocity > 0 ? "Clockwise" : "Counter-Clockwise";
        angle = data.angle;
        delta = data.delta;
        surface.setContent(contentTemplate());
    });

    rotateSync.on("end", function() {
        end++;
        surface.setContent(contentTemplate());
    });

    mainContext.add(surface);
});
