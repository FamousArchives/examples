define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Timer = require('famous/utilities/Timer');
   
    var counter = 0;
    var surface = new Surface({
    	content: 'this function has run ' + counter + ' time(s)',
    	properties: {
    		color: 'white'
    	}
    });

    var mainContext = Engine.createContext();
    mainContext.add(surface);

    Timer.setInterval(function() {
    	surface.setContent('this function has run ' + ++counter + ' time(s)')
    }, 1000);
});
