/**
 * Matrix
 * -------
 *
 * Matrix is a library for creating a 3x3 matrix and applying
 * various math operations to them such as multiplication
 * or finding the transpose.
 *
 * In this example we create a 3x3 matrix and multiply it by a
 * unit vector to create the 3x1 matrix [0.707,0.707,0].
 */
define(function(require, exports, module) {
    // import dependencies
    var Engine  = require('famous/core/Engine');
    var Matrix  = require('famous/math/Matrix');
    var Vector  = require('famous/math/Vector');
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

    var surface = new Surface({
        size: [200, 200],
        classes: ["red-bg"],
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });
    surface.setContent('[' + rotatedVector.get() + ']');
    mainContext.add(surface);
});
