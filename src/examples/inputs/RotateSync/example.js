/**
 * Copyright (c) 2014 Famous Industries, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a 
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
 * IN THE SOFTWARE.
 *
 * @license MIT
 */


/**
 * RotateSync
 * ------------
 * 
 * RotateSync handles piped-in two-finger touch events to support rotation.
 * It outputs an object with position, velocity, touches, and angle.
 *
 * In this example, we create a RotateSync and display the data
 * it receives to the screen.
 */
define(function(require, exports, module) {
    var Engine     = require("famous/core/Engine");
    var Surface    = require("famous/core/Surface");
    var Modifier = require("famous/core/Modifier");
    var RotateSync = require("famous/inputs/RotateSync");
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var mainContext = Engine.createContext();

    var start = 0;
    var update = 0;
    var end = 0;
    var direction = "";
    var angle = 0;

    var rotateSync = new RotateSync(function() {
        return [0, 0];
    });

    Engine.pipe(rotateSync);

    var contentTemplate = function() {
        return "<div>Start Count: " + start + "</div>" +
        "<div>End Count: " + end + "</div>" +
        "<div>Update Count: " + update + "</div>" +
        "<div>Direction: " + direction + "</div>" +
        "<div>Angle: " + angle + "</div>";
    };

    var rotation = new StateModifier({
        origin: [0.5, 0.5]
    });

    var origin = new Modifier({
        origin: [0.5, 0.5]
    });

    var rotatableSurface = new Surface({
        size: [400, 400],
        classes: ['red-bg']
    });

    var infoSurface = new Surface({
        size: [300, 100],
        properties: {
            textAlign: 'center'
        },
        content: contentTemplate()
    });

    rotateSync.on("start", function() {
        start++;
        angle = 0;
        infoSurface.setContent(contentTemplate());
    });

    rotateSync.on("update", function(data) {
        update++;
        direction = data.velocity > 0 ? "Clockwise" : "Counter-Clockwise";
        angle = data.angle;
        rotation.setTransform(Transform.rotateZ(angle));
        infoSurface.setContent(contentTemplate());
    });

    rotateSync.on("end", function() {
        end++;
        infoSurface.setContent(contentTemplate());
    });

    mainContext.add(rotation).add(rotatableSurface);
    mainContext.add(origin).add(infoSurface);
});
