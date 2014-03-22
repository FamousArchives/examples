define(function(require, exports, module) {
    // import dependencies
    var EventArbiter = require('famous/events/EventArbiter');

    var MODES = {
    	A: 1,
    	B: 2
    };

    var eventArbiter = new EventArbiter(MODES.A);

    var coverHandler = eventArbiter.forMode(MODES.A);
    coverHandler.on('my_event', function(event) { 
        alert('Cover'); 
    });

    var overviewHandler = eventArbiter.forMode(MODES.B)
    overviewHandler.on('my_event', function(event) { 
        alert('Overview'); 
    });

    function loadPage(page) {
        eventArbiter.setMode(page);
        eventArbiter.emit('my_event', {data: 123});
    }

    loadPage(MODES.B);
});
