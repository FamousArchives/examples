define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
   
    // create the main context
    var mainContext = Engine.createContext();
    
    var mySurface = new Surface({
        size: [400, 300],
        properties: {
            backgroundColor: '#fa5c4f',
            color: '#eee'
        },
        content: 'Hello world'
    });

    var myModifier = new StateModifier({
        origin: [0.5, 0.5]
    });
   
    mainContext.add(myModifier).add(mySurface);

    Engine.on('click', function() {
        myModifier.halt();
        myModifier.setTransform(Transform.rotateZ(Math.random()*Math.PI/2), { curve: 'easeOut', duration: 5000 });
    });
});