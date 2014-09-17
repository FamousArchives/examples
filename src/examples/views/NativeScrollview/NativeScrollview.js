define(function(require, exports, module) {
    var SequentialLayout    = require('famous/views/SequentialLayout');
    var Transitionable      = require('famous/transitions/Transitionable');
    var ContainerSurface    = require('famous/surfaces/ContainerSurface');
    var Transform           = require('famous/core/Transform');
    var OptionsManager      = require('famous/core/OptionsManager');

    // NOTE: This class in its current state will only 
    // work with appMode disabled like so:
    //
    // Engine.setOptions({
    //     appMode: false
    // });

    /**
     * Manages and manipulates an underlying DOM element to provide native
     * scrolling.
     *
     * @class NativeScrollview
     * @uses UIStretchbox
     * @constructor
     *
     * @param {Object} [options] options to be applied to container surface.
     */
    function NativeScrollview(options) {
        ContainerSurface.apply(this, arguments);

        this.options = Object.create(NativeScrollview.DEFAULT_OPTIONS);
        this._optionsManager = new OptionsManager(this.options);

        this._animating = 0;
        this._scrollX = new Transitionable(0);
        this._scrollY = new Transitionable(0);

                                             this.addClass('scrollable');
        if (!this.options.scrollbar)         this.addClass('disable-scrollbar');
        if (this.options.backfaceVisibility) this.addClass('backfaceVisibility');

        this._scrollableEl;
        this.on('deploy', function () {
            this._scrollableEl = this._container._currentTarget;
        }.bind(this));

        this._sequence = new SequentialLayout({
        });

        this.add(this._sequence);
    }

    NativeScrollview.DEFAULT_OPTIONS = {
        direction: 'Y',
        scrollbar: true
    }

    NativeScrollview.prototype = Object.create(ContainerSurface.prototype);
    NativeScrollview.prototype.constructor = NativeScrollview;

     /**
     * Sequencefrom
     *
     * @method sequenceFrom
     */
    NativeScrollview.prototype.sequenceFrom = function (nodeArray) {
        this._sequence.sequenceFrom(nodeArray);
    }

    /**
     * Before rendering, NativeScrollview updates scroll position if necessary.
     *
     * @method render
     */
    NativeScrollview.prototype.render = function () {
        if(this._animating) this._updateScrollPos();

        return ContainerSurface.prototype.render.call(this);
    }

    /**
     * Called on render.  Updates scrollTop and scrollLeft properties of DOM element
     * with scrollX and scrollY transitionable values.
     *
     * @method _updateScrollPos
     */
    NativeScrollview.prototype._updateScrollPos = function () {
        if(!this._scrollableEl) return;

        var updatedX = this._scrollX.get();
        var updatedY = this._scrollY.get();

        if(this._scrollableEl.scrollLeft !== updatedX) {
            this._scrollableEl.scrollLeft = updatedX;
        }
        if(this._scrollableEl.scrollTop !== updatedY){
            this._scrollableEl.scrollTop = updatedY;
        }
    }

    /**
     * Sets the vertical scroll position of the NativeScrollview.
     *
     * @method setVScrollPosition
     * @param {Object} [options] new y value and optional transition and callback for animation
     */
    NativeScrollview.prototype.setVScrollPosition = function(y, transition, callback) {
        if(!this._animating) this._animating++;

        var wrapped = _wrapCallback.call(this, callback);

        this._scrollY.set(y, transition, wrapped);
    }

    /**
     * Returns the current Y scroll progress of the UIScrollContaienr
     *
     * @method getVScrollPosition
     */
    NativeScrollview.prototype.getVScrollPosition =  function () {
        return this._scrollY.get();
    }

    /**
     * Sets the horizontal scroll position of the NativeScrollview.
     *
     * @method setHScrollPosition
     * @param {Object} [options] new x value and optional transition and callback for animation
     */
    NativeScrollview.prototype.setHScrollPosition = function(x, transition, callback) {
        if(!this._animating) this._animating++;

        var wrapped = _wrapCallback.call(this, callback);

        this._scrollX.set(x, transition, wrapped);
    }

    /**
     * Returns the current Y scroll progress of the NativeScrollview
     *
     * @method getVScrollPosition
     */
    NativeScrollview.prototype.getHScrollPosition = function () {
        return this._scrollX.get();    
    }

    /**
     * Returns max vertical scroll distance of the NativeScrollview
     *
     * @method getMaxVScrollPosition
     */
    //TODO: find a solution to the DOM loading issue.
    NativeScrollview.prototype.getMaxVScrollPosition = function () {
        if(!this._scrollableEl) return console.log('Container is not yet loaded.');

        return this._scrollableEl.scrollTop - this.getSize()[1]; 
    }

    /**
     * Returns max horizontal scroll distance of the NativeScrollview
     *
     * @method getMaxHScrollPosition
     */
    NativeScrollview.prototype.getMaxHScrollPosition = function () {
        if(!this._scrollableEl) return console.log('Container is not yet loaded.');

        return this._scrollableEl.scrollLeft - this.getSize()[0];        
    }
    

    function _wrapCallback (callback) {
        return function () {
            if(callback) callback();
            this._animating--;
        }.bind(this);
    }

    module.exports = NativeScrollview;
});
