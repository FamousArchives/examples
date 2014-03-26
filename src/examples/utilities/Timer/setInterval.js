/**
 * Timer setInterval
 * -----------------
 * 
 * Timer contains a setInterval function that duplicates the native
 * setInterval but relies on the engine to execute the function.
 *
 * In this example we reset the content of the surface every second.
 */
define(function(require, exports, module) {
    var Engine   = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface  = require('famous/core/Surface');
    var Timer    = require('famous/utilities/Timer');
   
    var mainContext = Engine.createContext();

    var counter = 0;
    var surface = new Surface({
        size: [500, 500],
        content: 'this function will run every second',
        classes: ['red-bg'],
        properties: {
            lineHeight: '500px',
            textAlign: 'center'
        }
    });
    mainContext.add(new Modifier({origin :[.5, .5]})).add(surface);

    Timer.setInterval(function() {
        surface.setContent('this function has run ' + ++counter + ' time(s)')
    }, 1000);
});
