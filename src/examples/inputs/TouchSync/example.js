/**
 * TouchSync
 * ------------
 * 
 * TouchSync handles piped in touch events. On update it outputs an
 * object with position, velocity, acceleration, and touch id. On end
 * it outputs an object with position, velocity, count, and touch.
 *
 * In this example, we create a TouchSync and displays the data
 * it recieves to the screen.
 */
define(function(require, exports, module) {
    var Engine    = require("famous/core/Engine");
    var TouchSync = require("famous/inputs/TouchSync");
    var Surface   = require("famous/core/Surface");

    var mainContext = Engine.createContext();

    var start = 0;
    var update = 0;
    var end = 0;
    var position = [0, 0];

    var touchSync = new TouchSync(function() {
        return [0, 0];
    });

    Engine.pipe(touchSync);

    var contentTemplate = function() {
        return "<div>Start Count: " + start + "</div>" +
        "<div>End Count: " + end + "</div>" + 
        "<div>Update Count: " + update + "</div>" +
        "<div>Distance away from touch origin:<br>" + position + "</div>"
    };

    var surface = new Surface({
        size: [undefined, undefined],
        classes: ['grey-bg'],
        content: contentTemplate()
    });

    touchSync.on("start", function() {
        start++;
        position = [0, 0];
        surface.setContent(contentTemplate());
    });

    touchSync.on("update", function(data) {
        update++;
        position[0] += data.position[0];
        position[1] += data.position[1]; 
        surface.setContent(contentTemplate());
    });

    touchSync.on("end", function() {
        end++;
        surface.setContent(contentTemplate());
    });

    mainContext.add(surface);
});
