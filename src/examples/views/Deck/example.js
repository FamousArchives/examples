/**
 * Deck
 * -----------
 *
 * Deck is a SequentialLayout that can be open and closed
 * with defined animations.
 *
 * In this example, we can see that when we click we end up
 * opening the decks so that their contents expand outwards.
 */
define(function(require, exports, module) {
    var Engine         = require('famous/core/Engine');
    var Transform      = require('famous/core/Transform');
    var Modifier       = require('famous/core/Modifier');
    var Surface        = require('famous/core/Surface');
    var Transitionable = require('famous/transitions/Transitionable');
    var Deck           = require('famous/views/Deck');
    var GridLayout     = require('famous/views/GridLayout');

    var SpringTransition = require('famous/transitions/SpringTransition');
    Transitionable.registerMethod('spring', SpringTransition);

    var mainContext = Engine.createContext();

    var surfaces = [];
    var myLayout = new Deck({
        itemSpacing: 10,
        transition: {
            method: 'spring',
            period: 300,
            dampingRatio: 0.5
        },
        stackRotation: 0.02
    });

    myLayout.sequenceFrom(surfaces);

    for(var i = 0; i < 5; i++) {
        var temp = new Surface({
            size: [100, 200],
            classes: ['test'],
            properties: {
                backgroundColor: 'hsla(' + ((i*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
            },
            content: i
        });

        temp.on('click', function() {
            myLayout.toggle();
        });
        surfaces.push(temp);
    }

    var containerModifier = new Modifier({
        origin: [0.5, 0.5]
    });

    mainContext.add(containerModifier).add(myLayout);
});
