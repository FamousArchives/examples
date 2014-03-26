/**
 * KeyCodes
 * ---------
 *
 * KeyCodes is a simple utility for mapping number and letter
 * keycodes.
 *
 * In this example, the content of the surface reflects whether
 * the last key pressed was a number or not.
 */
define(function(require, exports, module) {
    var Engine   = require('famous/core/Engine');
    var Surface  = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var KeyCodes = require('famous/utilities/KeyCodes')
   
    var mainContext = Engine.createContext();

    var surface = new Surface({
        size: [200, 200],
        content: 'start pressing some keys',
        classes: ['red-bg'],
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });
    mainContext.add(new Modifier({origin :[.5, .5]})).add(surface);

    Engine.on('keypress', function(event) {
        if (event.charCode >= KeyCodes['0'] && event.charCode <= KeyCodes['9']) {
            surface.setContent('you hit a number');
        } else {
            surface.setContent('not a number')
        }
    });
});
