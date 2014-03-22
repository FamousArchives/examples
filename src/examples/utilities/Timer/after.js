define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Timer = require('famous/utilities/Timer');
   
    var counter = 0;
    var surface = new Surface({
        content: 'this function has not been run',
        properties: {
            color: 'white'
        }
    });

    var mainContext = Engine.createContext();
    mainContext.add(surface);

    Timer.after(function() {
        surface.setContent('this function was run after 100 Engine ticks')
    }, 100);
});
