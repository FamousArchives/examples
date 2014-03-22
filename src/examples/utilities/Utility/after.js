define(function(require, exports, module) {
    // import dependencies
    var Utility = require('famous/utilities/Utility');

    var fn = Utility.after(5, function() {
    	alert('Was called on 5th try');
    });

    fn();
    fn();
    fn();
    fn();
    fn();
});
