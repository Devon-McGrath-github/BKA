var Events;
(function (Events) {
    "use strict";
    var FocusCallbackHandler = (function () {
        function FocusCallbackHandler(elem, focusCallback) {
            this._elem = elem;
            this._focusCallback = focusCallback;
            this._onFocusBound = this.onFocus.bind(this);
            this._eventName = 'focus';
        }
        FocusCallbackHandler.prototype.addListeners = function () {
            this._elem.addEventListener(this._eventName, this._onFocusBound);
        };
        FocusCallbackHandler.prototype.removeListeners = function () {
            this._elem.removeEventListener(this._eventName, this._onFocusBound);
        };
        FocusCallbackHandler.prototype.onFocus = function (evt) {
            this._focusCallback();
        };
        return FocusCallbackHandler;
    }());
    Events.FocusCallbackHandler = FocusCallbackHandler;
})(Events || (Events = {}));
//# sourceMappingURL=FocusCallbackHandler.js.map