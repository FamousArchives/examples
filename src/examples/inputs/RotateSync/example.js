/**
 * RotateSync
 * ------------
 * 
 * RotateSync handles piped in two-finger touch events to support rotation.
 * It outputs an object with position, velocity, touch ids, and angle.
 *
 * In this example, we create a RoateSync and displays the data
 * it recieves to the screen.
 */
define(function(require, exports, module) {
	var Engine     = require("famous/core/Engine");
	var Surface    = require("famous/core/Surface");
	var RotateSync = require("famous/inputs/RotateSync");

	var mainContext = Engine.createContext();

	var start = 0;
	var update = 0;
	var end = 0;
	var recentData = "";
	var direction = "";
	var angle = 0;

	var rotateSync = new RotateSync(function() {
	    return [0, 0];
	});

	Engine.pipe(rotateSync);

	var contentTemplate = function() {
	    return "<div>Start Count: " + start + "</div>" +
	    "<div>End Count: " + end + "</div>" +
	    "<div>Update Count: " + update + "</div>" +
	    "<div>Update Data:<pre>" + recentData + "</pre></div>" +
	    "<div>Direction: " + direction + "</div>" +
	    "<div>Angle: " + angle + "</div>";
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
	    direction = data.v > 0 ? "Clockwise" : "Counter-Clockwise";
	    angle = data.angle;
	    recentData = JSON.stringify(data, undefined, 2);
	    surface.setContent(contentTemplate());
	});

	rotateSync.on("end", function() {
	    end++;
	    surface.setContent(contentTemplate());
	});

	mainContext.add(surface);
});
