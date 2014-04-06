/**
 * Subscribing to the DOM
 * ------
 *
 * The Famo.us Engine is captures all user input on the window which views
 * can then subscribe to.
 *
 * Note: If you want to recieve DOM events originating from an HTML element,
 * Famo.us Surfaces follow the same pattern.
 *
 */
define(function(require, exports, module) {
    var Engine  = require("famous/core/Engine");
    var View = require("famous/core/View");

    function CustomView(){
        View.call(this);
        this._eventInput.on('click', function(){
            alert('I subscribed to DOM events!')
        });
    }

    document.write('click somewhere');

    var customView = new CustomView();

    customView.subscribe(Engine);
});
