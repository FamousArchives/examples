/**
 * Timer clear
 * ------------
 *
 * Clear will remove a function that depends on Engine to be run.
 *
 * In this example we remove a prerender listener after 1 second.
 */
define(function(require, exports, module) {
    var Engine   = require('famous/core/Engine');
    var Surface  = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Timer    = require('famous/utilities/Timer');
   
    var mainContext = Engine.createContext();

    var counter = 0;

    var surface = new Surface({
        size: [500, 500],
        content: 'this function has run ' + counter + ' time(s) and will stop after 3',
        classes: ['red-bg'],
        properties: {
            lineHeight: '500px',
            textAlign: 'center'
        }
    });
    mainContext.add(new Modifier({origin :[.5, .5]})).add(surface);

    var fn = function() {
        surface.setContent('this function has run ' + ++counter + ' time(s) and will stop after 1 second')
    };

    Engine.on('prerender', fn);

    Timer.setTimeout(function() {
        Timer.clear(fn);
    }, 1000)
});
