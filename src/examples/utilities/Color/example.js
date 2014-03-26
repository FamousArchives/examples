/**
 * Color
 * ---------
 *
 * Color is a utility for performing various color operations
 * such as transforming to rgba, hex, hsl.
 *
 * In this example we set the color based on a particular
 * rgba value or hue value then set the background-color
 * css property with the corresponding hex value.
 */
define(function(require, exports, module) {
     var Engine   = require('famous/core/Engine');
     var Surface  = require('famous/core/Surface');
     var Modifier = require('famous/core/Modifier');
     var Color    = require('famous/utilities/Color');

     var mainContext = Engine.createContext();
     
     var color = new Color(80, 255, 255);
     var hex = color.getHex();
     var surface    = new Surface({
         size: [300, 300],
         properties: {
             backgroundColor: hex
         }
     });
     mainContext.add(new Modifier({origin: [.5, .5]})).add(surface);

     var toggle = true;
     surface.on('click', function(){
         if (toggle) {
             hex = color.setFromRGBA(255,0,0).getHex();
         } else {
             hex = color.setHue(60).getHex();
         }
         surface.setProperties({
             backgroundColor: hex
         })
         toggle = !toggle;
     });
});
