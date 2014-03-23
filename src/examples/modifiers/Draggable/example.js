define(function(require, exports, module) {                                                                                                                                                                 
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Draggable = require('famous/modifiers/Draggable');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var TransitionableTransform = require('famous/transitions/TransitionableTransform');

    var mainContext = Engine.createContext();

    //show a grid for reference
    var grid = new Surface({
        size: [481,481],
        classes: ['graph']
    });
    mainContext.add(new Modifier({origin:[0.5,0.5]})).add(grid);


    // TODO Fix github issue: https://github.com/Famous/modifiers/issues/7
    var draggable = new Draggable( {
        snapX: 40, 
        snapY: 40, 
        xRange: [-220, 220],
        yRange: [-220, 220],
    });
    var surface = new Surface({
        content: 'test',
        properties: {
            backgroundColor:'#3cf'
        },
        size: [40, 40]
     });

     mainContext.add(new Modifier({origin:[0.5,0.5]})).add(draggable).add(surface);
     surface.pipe(draggable);
});
