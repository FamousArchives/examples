/**
 * EventHandler triggering
 * -----------------------
 *
 * This example shows the most basic functionality of EVentHandler.
 * First, we register a function to be run on the "ILikeToEat" event.
 * Then we trigger "ILikeToEat" which will call all of the
 * register listeners.
 */
define(function(require, exports, module) {
	var EventHandler = require('famous/core/EventHandler');

	var eventHandler = new EventHandler();

	eventHandler.on('ILikeToEat', function(data) {
		alert(data.food);
	});

	eventHandler.trigger('ILikeToEat', {food: 'Apple and bananas'});
});

