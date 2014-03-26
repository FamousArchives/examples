/**
 * Quaternion
 * ----------
 * 
 * Quaternions are used to represent rotations.  It has two components,
 * an axis represented by x, y, and z and the amount of rotation to
 * be applied around that axis, represented by w.  Quaternions are
 * particularly useful because they have no chance of gimbal lock.
 *
 * In this example, 
 */
define(function(require, exports, module) {
    var Engine     = require('famous/core/Engine');
    var Surface    = require('famous/core/Surface');
    var Modifier   = require('famous/core/Modifier');
    var Transform  = require('famous/core/Transform');
    var Quaternion = require('famous/math/Quaternion');

    var mainContext = Engine.createContext();

    var quaternion = new Quaternion(Math.PI/3, .5, .5, 0);

    var surface = new Surface({
        size: [200, 200],
        content: 'Hello World',
        classes: ["red-bg"],
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });

    var modifier = new Modifier();
    modifier.transformFrom(function() {
    	return toggle ? Transform.identity : quaternion.getTransform();
    });

    mainContext.add(new Modifier({origin: [.5, .5]})).add(modifier).add(surface);

    var toggle = true;
    Engine.on('click', function() {
    	toggle = toggle ? false : true;
    });
});
