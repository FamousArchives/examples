define(function(require, exports, module) {
     var Engine = require('famous/core/Engine');
     var Surface = require('famous/core/Surface');
     var Color = require('famous/utilities/Color');
     var Context = Engine.createContext();
     
     var color = new Color(80, 255, 255);
     var hex = color.getHex();
     var surface    = new Surface({
         size: [300, 300],
         properties: {
             backgroundColor: hex
         }
     });
     Context.add(surface);

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
