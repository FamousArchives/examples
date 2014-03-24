define(function(require, exports, module) {
	var Engine     = require("famous/core/Engine");
	var Surface    = require("famous/core/Surface");
	var ScrollSync = require("famous/inputs/ScrollSync");

	var mainCtx = Engine.createContext();

	var start = 0;
	var update = 0;
	var end = 0;
	var recentData = "";

	var scrollSync = new ScrollSync(function() {
	    return [0,0];
	});

	Engine.pipe(scrollSync);

	var contentTemplate = function() {
	    return "<div>Start Count: " + start + "</div>" +
	    "<div>End Count: " + end + "</div>" +
	    "<div>Update Count: " + update + "</div>" +
	    "<div>Update Data:<pre>" + recentData + "</pre></div>";
	};

	var surface = new Surface({
	    size: [true, true],
	    content: contentTemplate()
	});

	scrollSync.on("start", function() {
	    start++;
	    surface.setContent(contentTemplate());
	});

	scrollSync.on("update", function(data) {
	    update++;
	    recentData = JSON.stringify(data, undefined, 2);
	    surface.setContent(contentTemplate());
	});

	scrollSync.on("end", function() {
	    end++;
	    surface.setContent(contentTemplate());
	});

	mainCtx.add(surface);
});
