define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var TabBar = require('famous/widgets/TabBar');
   
    var mainContext = Engine.createContext();
    var tab = new TabBar();

    mainContext.add(tab);
    tab.defineSection('A', { content: 'A-Tab' });
    tab.defineSection('B', { content: 'B-Tab' });
    tab.defineSection('C', { content: 'C-Tab' });
    tab.defineSection('D', { content: 'D-Tab' });

    tab.select('A')
});
