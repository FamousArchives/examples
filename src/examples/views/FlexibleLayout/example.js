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

    var flex = new FlexibleLayout();

    var surfaces = [];
    var ratios = [1, true, 1, true, 1, true, 1, true];
    for (var i = 1; i <= 8; i++) {
        size = (i % 2 === 0) ? [10, undefined] : [undefined, undefined]
        surfaces.push(new Surface({
            size: size,
            properties: {
                backgroundColor: colors[i-1]
            }
        }));
    }

    flex.set(surfaces, ratios);

    window.f = flex;

    mainContext.add(flex);
});