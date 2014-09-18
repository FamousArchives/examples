define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var NativeScrollview = require('famous/views/NativeScrollview');
    var NativeScrollview2 = require('famous/views/NativeScrollview2');
    var Surface = require('famous/core/Surface');

    Engine.setOptions({
        appMode: false
    });

    var ELEMENTCOUNT = 30;
    var COLORS = [
        '#445b7b',
        '#685b79',
        '#ac6b81',
        '#dc707d',
        '#ffbd5f',
    ];

    var context = Engine.createContext();

    //////////////////////////////////////////////////////////////////////
    // CREATE NATIVE SCROLLVIEW
    //////////////////////////////////////////////////////////////////////

    var scroller = new NativeScrollview2({
        size: [500, 500],
        direction: 'y'
    });

    //////////////////////////////////////////////////////////////////////
    // CREATE ELEMENTS
    //////////////////////////////////////////////////////////////////////

    var elements = [];
    for (var i = 0; i < ELEMENTCOUNT; i++) {
        elements.push(new Surface({
            size: [200, 75],
            properties: {
                backgroundColor: COLORS[i % COLORS.length]
            }
        }));
    }

    scroller.setVScrollPosition(100, {duration: 1000});

    //////////////////////////////////////////////////////////////////////
    // SEQUENCEFROM RENDERABLES
    //////////////////////////////////////////////////////////////////////    

    scroller.sequenceFrom(elements);

    //////////////////////////////////////////////////////////////////////
    // ADD SCROLLER TO CONTEXT
    //////////////////////////////////////////////////////////////////////

    context.add(scroller);
});
