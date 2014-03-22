define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Timer = require('famous/utilities/Timer');
   
    var counter = 0;
    var surface = new Surface({
        content: 'this function has run ' + counter + ' time(s) and will stop after 3',
        properties: {
            color: 'white'
        }
    });

    var mainContext = Engine.createContext();
    mainContext.add(surface);

    var fn = function() {
        surface.setContent('this function has run ' + ++counter + ' time(s) and will stop after 3')
    };

    Engine.on('prerender', fn);

    Timer.setTimeout(function() {
        Timer.clear(fn);
    }, 3001)
});
