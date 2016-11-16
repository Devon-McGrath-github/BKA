var Events;
(function (Events) {
    "use strict";
    var KeyCallbackHandler = (function () {
        function KeyCallbackHandler(elem, keyCallback) {
            this._elem = elem;
            this._keyCallback = keyCallback;
            this._onKeyBound = this.onKey.bind(this);
            this._eventName = 'keydown';
        }
        KeyCallbackHandler.prototype.addListeners = function () {
            this._elem.addEventListener(this._eventName, this._onKeyBound);
        };
        KeyCallbackHandler.prototype.removeListeners = function () {
            this._elem.removeEventListener(this._eventName, this._onKeyBound);
        };
        KeyCallbackHandler.prototype.onKey = function (evt) {
            if (evt.keyCode == 186) {
                // ;
                evt.preventDefault();
                this._keyCallback('enter');
            }
            if (evt.keyCode == 13) {
                // enter
                evt.preventDefault();
                this._keyCallback('enter');
            }
        };
        return KeyCallbackHandler;
    }());
    Events.KeyCallbackHandler = KeyCallbackHandler;
})(Events || (Events = {}));
//# sourceMappingURL=KeyCallbackHandler.js.map