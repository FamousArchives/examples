define(function(require, exports, module) {                                     
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Matrix = require('famous/math/Matrix');
    var Vector = require('famous/math/Vector');
    var Surface = require('famous/core/Surface');

    var mainContext = Engine.createContext();

    // rotate 45 degrees about z axis
    var matrix = new Matrix([
       [ .707, -.707, 0],
       [ .707, .707, 0],
       [ 0, 0, 1]
    ]);

    var vector = new Vector(1, 0, 0);
    var rotatedVector = matrix.vectorMultiply(vector);

    var surface = new Surface();
    surface.setContent('[' + rotatedVector.toArray() + ']');
    surface.setProperties( { backgroundColor: "#3cf" } );
    surface.setSize([150, 50]);
    mainContext.add(surface); 
});
