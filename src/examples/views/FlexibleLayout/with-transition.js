define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var FlexibleLayout = require('famous/views/FlexibleLayout');

	var mainContext = Engine.createContext();

    var colors = [
        'rgba(256, 0, 0, .7)',
        'rgba(0, 256, 0, .7)',
        'rgba(0, 0, 256, .7)',
        'rgba(256, 0, 0, .7)',
        'rgba(0, 256, 0, .7)',
        'rgba(0, 0, 256, .7)',
        'rgba(256, 0, 0, .7)',
        'rgba(0, 256, 0, .7)',
        'rgba(0, 0, 256, .7)'
    ];

    var flex = new FlexibleLayout({
        transition: {
            curve: 'easeInOut',
            duration: 2000
        }
    });

    var surfaces = [];
    var ratios = [1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < 8; i++) {
        surfaces.push(new Surface({
            size: [undefined, undefined],
            properties: {
                backgroundColor: colors[i]
            }
        }));
    }

    flex.set(surfaces, ratios);

    window.f = flex;

    mainContext.add(flex);
});