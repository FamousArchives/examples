define(function(require, exports, module) {                                     
    // TODO: Could make this a more engaging example

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Random = require('famous/math/Random');
    var Surface = require('famous/core/Surface');

    var mainContext = Engine.createContext();
    
    var surface = new Surface();
    var is_heads = Random.bool();
    surface.setContent(is_heads ? 'Heads' : 'Tails');
    surface.setProperties( { backgroundColor: "#3cf" } );
    surface.setSize([150, 50]);
    mainContext.add(surface); 

});
