/**
 * Vector
 * --------
 *
 * Vector a way to create a three element float point vector.
 *
 * In the example you can see how a Vector is affected when it
 * is multiplied against a rotation matrix.
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
