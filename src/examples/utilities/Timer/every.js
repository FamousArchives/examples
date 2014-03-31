/**
 * Timer every
 * ------------
 *
 * Every will continually run a function after a particular 
 * amount of engine ticks.
 *
 * In this example we run a function to update the surfaces content
 * after 100 engine ticks.
 */
define(function(require, exports, module) {
    var Engine   = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface  = require('famous/core/Surface');
    var Timer    = require('famous/utilities/Timer');

    var mainContext = Engine.createContext();

    var counter = 0;
    var surface = new Surface({
        size: [undefined, undefined],
        content: 'this function will run every 100 engine ticks',
        classes: ['red-bg'],
        properties: {
            lineHeight: '500px',
            textAlign: 'center'
        }
    });
    mainContext.add(new Modifier({origin :[.5, .5]})).add(surface);

    Timer.every(function() {
        surface.setContent('this function has run ' + ++counter + ' time(s)');
    }, 100);
});
