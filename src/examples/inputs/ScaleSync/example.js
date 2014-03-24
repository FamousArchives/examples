define(function(require, exports, module) {
	var Engine = require("famous/core/Engine");
	var Surface = require("famous/core/Surface");
	var ScaleSync = require("famous/inputs/ScaleSync");

	var mainCtx = Engine.createContext();

	var start = 0;
	var update = 0;
	var end = 0;
	var recentData = "";
	var growShrink = "";

	var scaleSync = new ScaleSync(function() {
	    return [0,0];
	});

	Engine.pipe(scaleSync);

	var contentTemplate = function() {
	    return "<div>Start Count: " + start + "</div>" +
	    "<div>End Count: " + end + "</div>" +
	    "<div>Update Count: " + update + "</div>" +
	    "<div>Update Data:<pre>" + recentData + "</pre></div>" +
	    "<div>Scale Direction: " + growShrink + "</div>";
	};

	var surface = new Surface({
	    size: [true, true],
	    content: contentTemplate()
	});

	scaleSync.on("start", function() {
	    start++;
	    surface.setContent(contentTemplate());
	});

	scaleSync.on("update", function(data) {
	    update++;
	    growShrink = data.v > 0 ? "Growing" : "Shrinking";
	    recentData = JSON.stringify(data)
	    surface.setContent(contentTemplate());
	});

	scaleSync.on("end", function() {
	    end++;
	    surface.setContent(contentTemplate());
	});

	mainCtx.add(surface);
});
