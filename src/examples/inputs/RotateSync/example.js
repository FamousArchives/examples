define(function(require, exports, module) {
	var Engine     = require("famous/core/Engine");
	var Surface    = require("famous/core/Surface");
	var RotateSync = require("famous/inputs/RotateSync");

	var mainCtx = Engine.createContext();

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
	    size: [true, true],
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

	mainCtx.add(surface);
});
