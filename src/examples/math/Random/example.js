/**
 * Random
 * -------
 *
 * Random is a library for creating random integers,
 * booleans, ranges, and signs.
 *
 * In this example we set the content based on the random
 * boolean that is created.
 */
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Random = require('famous/math/Random');
    var Surface = require('famous/core/Surface');

    var mainContext = Engine.createContext();
    
    var surface = new Surface({
        size: [200, 200],
        classes: ['red-bg'],
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });
    var is_heads = Random.bool();
    surface.setContent(is_heads ? 'Heads' : 'Tails');

    mainContext.add(surface);

    Engine.on('click', function() {
        surface.setContent(Random.bool() ? 'Heads' : 'Tails');
    });
});
