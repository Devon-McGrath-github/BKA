var FrontEndLibrary;
(function (FrontEndLibrary) {
    var Services;
    (function (Services) {
        var Api;
        (function (Api) {
            var MockApiHandler = (function () {
                function MockApiHandler(promise) {
                    this._responses = {};
                    this._promise = promise;
                }
                MockApiHandler.prototype.getData = function (url) {
                    var promise = this._promise.defer();
                    var responses = this._responses;
                    setTimeout(function () {
                        var possible = responses[url];
                        if (!possible) {
                            promise.reject("MockApiHandler - got not data for " + url);
                        }
                        promise.resolve(possible);
                    }, 1);
                    return promise.promise;
                };
                MockApiHandler.prototype.postIt = function (url, data) {
                    if (window.console) {
                        console.log("POST api call to " + url + " with data " + JSON.stringify(data));
                    }
                    return this.getData(url);
                };
                MockApiHandler.prototype.getIt = function (url) {
                    if (window.console) {
                        console.log("GET api call to " + url);
                    }
                    return this.getData(url);
                };
                MockApiHandler.prototype.setResponse = function (url, responseData) {
                    this._responses[url] = responseData;
                };
                return MockApiHandler;
            }());
            Api.MockApiHandler = MockApiHandler;
        })(Api = Services.Api || (Services.Api = {}));
    })(Services = FrontEndLibrary.Services || (FrontEndLibrary.Services = {}));
})(FrontEndLibrary || (FrontEndLibrary = {}));
//# sourceMappingURL=MockApiHandler.js.map