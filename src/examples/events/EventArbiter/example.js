/**
 * EventArbiter
 * -------------
 *
 * EventArbiter is a way to route events based on a 
 * particular mode.  Each mode can have at most one
 * event handler that handles the events when the 
 * EventArbiter is in that mode.
 *
 * In this example, we have two event handlers: one for mode A
 * and one for mode B.  Every time we click we are changing the
 * mode of the EventArbiter and thus toggling which EventHandlers
 * are getting the events.
 */
define(function(require, exports, module) {
    var Engine       = require('famous/core/Engine');
    var EventArbiter = require('famous/events/EventArbiter');

    var MODES = {
        A: 'A',
        B: 'B'
    };

    var eventArbiter = new EventArbiter(MODES.A);

    var AHandler = eventArbiter.forMode(MODES.A);
    AHandler.on('my_event', function(event) { 
        alert('AHandler'); 
    });

    var BHandler = eventArbiter.forMode(MODES.B)
    BHandler.on('my_event', function(event) { 
        alert('BHandler'); 
    });

    var currentMode = 'A';
    Engine.on('click', function() {
        eventArbiter.emit('my_event', {data: 123});
        currentMode = currentMode === 'A' ? 'B' : 'A';
        eventArbiter.setMode(currentMode);
    });
});
