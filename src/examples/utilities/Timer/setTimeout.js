/**
 * Timer setTimeout
 * -----------------
 * 
 * Timer contains a settimeout function that duplicates the native
 * setInterval but relies on the engine to execute the function.
 *
 * In this example we reset the content of the surface after one second.
 */
define(function(require, exports, module) {
    var Engine   = require('famous/core/Engine');
    var Surface  = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Timer    = require('famous/utilities/Timer');
   
    var mainContext = Engine.createContext();

    var surface = new Surface({
        size: [500, 500],
        content: 'Initial State',
        classes: ['red-bg'],
        properties: {
            lineHeight: '500px',
            textAlign: 'center'
        }
    });
    mainContext.add(new Modifier({origin :[.5, .5]})).add(surface);

    Timer.setTimeout(function() {
        surface.setContent('this function was run after 1000 milliseconds')
    }, 1000);
});
