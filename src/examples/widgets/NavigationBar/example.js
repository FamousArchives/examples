define(function(require, exports, module) {
    // import dependencies
    var Engine        = require('famous/core/Engine');
    var NavigationBar = require('famous/widgets/NavigationBar');
   
    var mainContext = Engine.createContext();
    var nav = new NavigationBar();

    mainContext.add(nav);
    nav.setContent('I am the title');
});
