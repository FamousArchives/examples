define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var FeedItem = require('famous/widgets/FeedItem');
   
    var mainContext = Engine.createContext();
    var feedItem = new FeedItem();

    mainContext.add(feedItem);
    feedItem.setContent({
    	icon: 'content/famous_symbol.svg',
    	time: Date.now(),
    	source: 'Famo.us',
    	text: 'Hello There!'
    });
});
