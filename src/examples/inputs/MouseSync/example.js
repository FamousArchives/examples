/**
 * MouseSync
 * ------------
 * 
 * MousSync handles mouse drag events. Outputs an object with two
 * properties, position and velocity.
 *
 * In this example, we create a MouseSync and displays the data
 * it recieves to the screen.  Based on the update information
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
	var recentData = "";

	var position = [0, 0];
	var mouseSync = new MouseSync(function() {
	    return [0, 0];
	});

	Engine.pipe(mouseSync);

	var contentTemplate = function() {
	    return "<div>Start Count: " + start + "</div>" +
	    "<div>End Count: " + end + "</div>" + 
	    "<div>Update Count: " + update + "</div>" +
	    "<div>Update Data:<pre>" + recentData + "</pre></div>"+ 
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
	    position[0] += data.p[0];
	    position[1] += data.p[1]; 
	    recentData = JSON.stringify(data, undefined, 2); 
	    surface.setContent(contentTemplate());
	});

	mouseSync.on("end", function() {
	    end++;
	    surface.setContent(contentTemplate());
	});

	mainContext.add(surface);
});
