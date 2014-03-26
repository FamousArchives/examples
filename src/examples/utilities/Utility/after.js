/**
 * After
 * --------
 *
 * After is a utility that will run a particular callback
 * once the returned function is called a set number of
 * times.
 *
 * In the example, the callback is run after the 5th execution.
 */

define(function(require, exports, module) {
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
