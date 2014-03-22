define(function(require, exports, module) {
    // import dependencies
    var Engine   = require('famous/core/Engine');
    var TitleBar = require('famous/widgets/TitleBar');
   
    var mainContext = Engine.createContext();
    var titleBar = new TitleBar({
        size: [undefined, 50],
        inTransition: true,
        outTransition: true
    });

    mainContext.add(titleBar);
    titleBar.show('myTitle');
});
