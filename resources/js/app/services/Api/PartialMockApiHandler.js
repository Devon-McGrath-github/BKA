var FrontEndLibrary;
(function (FrontEndLibrary) {
    var Services;
    (function (Services) {
        var Api;
        (function (Api) {
            //this class is intended to use real API calls provided they have been implemented, and
            //mock everything else
            var PartialMockApiHandler = (function () {
                function PartialMockApiHandler(promise, apiHandler) {
                    this._responses = {};
                    this.implementedMethods = [
                        'api/vehicleTypeSelect/get',
                        'api/quote/add',
                        'api/quote/get',
                        'api/quote/getByIdAndVersion'
                    ];
                    this._promise = promise;
                    this._apiHandler = apiHandler;
                }
                PartialMockApiHandler.prototype.getData = function (url) {
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
                PartialMockApiHandler.prototype.postIt = function (url, data) {
                    if (window.console) {
                        console.log("POST api call to " + url + " with data " + JSON.stringify(data));
                    }
                    if (this.implementedMethods.indexOf(url) >= 0) {
                        return this._apiHandler.postIt(url, data);
                    }
                    return this.getData(url);
                };
                PartialMockApiHandler.prototype.getIt = function (url) {
                    if (window.console) {
                        console.log("GET api call to " + url);
                    }
                    if (this.implementedMethods.indexOf(url) >= 0) {
                        return this._apiHandler.getIt(url);
                    }
                    return this.getData(url);
                };
                PartialMockApiHandler.prototype.setResponse = function (url, responseData) {
                    this._responses[url] = responseData;
                };
                return PartialMockApiHandler;
            }());
            Api.PartialMockApiHandler = PartialMockApiHandler;
        })(Api = Services.Api || (Services.Api = {}));
    })(Services = FrontEndLibrary.Services || (FrontEndLibrary.Services = {}));
})(FrontEndLibrary || (FrontEndLibrary = {}));
//# sourceMappingURL=PartialMockApiHandler.js.map