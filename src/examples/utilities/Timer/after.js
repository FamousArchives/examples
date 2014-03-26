/**
 * Timer
 * --------
 *
 * Timer is a utility that integrates with Engine to 
 * perform more precise timing operations.
 * 
 * In this example we reset the content of the surface
 * afer 100 ticks from the Engine.
 */
define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Timer = require('famous/utilities/Timer');
   
    var mainContext = Engine.createContext();

    var counter = 0;

    var surface = new Surface({
        size: [undefined, 200],
        content: 'this function has not been run',
        classes: ['red-bg'],
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });

    mainContext.add(new Modifier({origin :[.5, .5]})).add(surface);

    Timer.after(function() {
        surface.setContent('this function was run after 100 Engine ticks')
    }, 100);
});
