define(function(require, exports, module) {
    // import dependencies
    var Engine   = require('famous/core/Engine');
    var Surface  = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
   
    var mainContext = Engine.createContext();
    var surface = new Surface({
        content: 'start pressing some keys',
        properties: {
            color: 'white'            
        }
    });
    mainContext.add(surface);

    Engine.on('keypress', function(event) {
        if (event.charCode >= 48 && event.charCode <= 57) {
            surface.setContent('you hit a number');
        } else {
            surface.setContent('not a number')
        }
    });
});
