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
 * Modifier with origin
 * --------------------
 *
 * Modifiers have an origin property which affects the positioning
 * of children in the render tree.  By default, modifiers have an
 * origin of [0, 0], which means child nodes are positioned at the top left of
 * the last defined size (defaulting to the window's size). By modifying origin,
 * child nodes can be layed out relative to a different origin (such as the center)
 * of their parent's size context. This is similar in spirit to how the CSS float
 * property behaves.
 *
 * Famo.us will internally ensure consistency of size and origin even when
 * the window is resized, or a mobile device changes its orientation.
 *
 * In the example below, nine surfaces are placed inside of a Famo.us context,
 * sized of the entire window (by default).  By modifying origins, these surfaces
 * can be layed out at key positions of their sizing context.
 * 
 */
define(function(require, exports, module) {
    var Engine   = require("famous/core/Engine");
    var Surface  = require("famous/core/Surface");
    var Modifier = require("famous/core/Modifier");

    var mainContext = Engine.createContext();

    var origins = {
        'topLeft':      [ 0,  0],
        'topCenter':    [.5,  0],
        'topRight':     [ 1,  0],
        'centerLeft':   [ 0, .5],
        'center':       [.5, .5],
        'centerRight':  [ 1, .5],
        'bottomLeft':   [ 0,  1],
        'bottomCenter': [.5,  1],
        'bottomRight':  [ 1,  1]
    };

    for (var key in origins) {
        var modifier = new Modifier({
            origin: origins[key]
        });

        var surface = new Surface({
            size: [100, 100],
            content: key,
            classes: ['red-bg'],
            properties: {
                lineHeight: '100px',
                textAlign: 'center'
            }
        });

        mainContext.add(modifier).add(surface);
    }
});
