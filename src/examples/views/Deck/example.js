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

    var mainDisplay = Engine.createContext();

    var systems = [];
    for(var j = 0; j < 5; j++) {
        var surfaces = [];
        for(var i = 0; i < 5; i++) {
            surfaces[i] = new Surface({
                size: [100, 200],
                classes: ['test'],
                properties: {
                    backgroundColor: 'hsla(' + ((j*5 + i)*15 % 360) + ', 60%, 50%, 0.8)'
                },
                content: j.toString() + ' &bowtie; ' + i.toString()
            });
        }

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

        surfaces[0].on('click', function(layout) {
            layout.toggle();
        }.bind(this, myLayout));
        systems[j] = myLayout;
    } 

    var topLayout = new GridLayout({
        dimensions: [1, 1],
        cellSize: [800, 250],
        transition: {
            method: 'spring',
            period: 300,
            dampingRatio: 0.5
        }
    });
    topLayout.sequenceFrom(systems);

    var containerModifier = new Modifier({
        origin: [0.5, 0.5]
    });
    mainDisplay.add(containerModifier).add(topLayout);

    var open = false;
    function toggle() {
        if(open) topLayout.setOptions({dimensions: [1, 1]});
        else topLayout.setOptions({dimensions: [0, 0]});
        open = !open;
    }

    Engine.on('click', function(e) {
        toggle();
    });
});
