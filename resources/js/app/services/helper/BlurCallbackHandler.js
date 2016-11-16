var Events;
(function (Events) {
    "use strict";
    var BlurCallbackHandler = (function () {
        function BlurCallbackHandler(elem, blurCallback) {
            this._elem = elem;
            this._blurCallback = blurCallback;
            this._onBlurBound = this.onBlur.bind(this);
            this._eventName = 'blur';
        }
        BlurCallbackHandler.prototype.addListeners = function () {
            this._elem.addEventListener(this._eventName, this._onBlurBound);
        };
        BlurCallbackHandler.prototype.removeListeners = function () {
            this._elem.removeEventListener(this._eventName, this._onBlurBound);
        };
        BlurCallbackHandler.prototype.onBlur = function (evt) {
            this._blurCallback();
        };
        return BlurCallbackHandler;
    }());
    Events.BlurCallbackHandler = BlurCallbackHandler;
})(Events || (Events = {}));
//# sourceMappingURL=BlurCallbackHandler.js.map