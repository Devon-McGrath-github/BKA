var FrontEndLibrary;
(function (FrontEndLibrary) {
    var Services;
    (function (Services) {
        var Api;
        (function (Api) {
            var ApiHandler = (function () {
                function ApiHandler(promise, http) {
                    this._promise = promise;
                    this._http = http;
                }
                ApiHandler.prototype.postIt = function (url, data) {
                    var result = this._promise.defer();
                    url = apiHandlerUrl + url;
                    this._http.post(url, data)
                        .success(function (d) {
                        result.resolve(d);
                    }).error(function (e) {
                        result.reject("unknown");
                    });
                    return result.promise;
                };
                ApiHandler.prototype.getIt = function (url) {
                    var result = this._promise.defer();
                    url = apiHandlerUrl + url;
                    this._http.get(url)
                        .success(function (d) {
                        result.resolve(d);
                    }).error(function (e) {
                        result.reject("unknown");
                    });
                    return result.promise;
                };
                ApiHandler.prototype.setResponse = function (url, responseData) {
                    throw "ApiHandler - live ApiHandler can not override responses";
                };
                return ApiHandler;
            }());
            Api.ApiHandler = ApiHandler;
        })(Api = Services.Api || (Services.Api = {}));
    })(Services = FrontEndLibrary.Services || (FrontEndLibrary.Services = {}));
})(FrontEndLibrary || (FrontEndLibrary = {}));
FrontEndLibrary.TT.factory("apiHandler", [
    "$q", "$http", function ($q, $http) {
        //possible values: mock, partialMock, real
        apiHandlerMode = "real";
        apiHandlerUrl = '/';
        if (apiHandlerMode === "mock") {
            return (new FrontEndLibrary.Services.Api.MockApiHandler($q));
        }
        else if (apiHandlerMode === "partialMock") {
            return (new FrontEndLibrary.Services.Api.PartialMockApiHandler($q, new FrontEndLibrary.Services.Api.ApiHandler($q, $http)));
        }
        else {
            return (new FrontEndLibrary.Services.Api.ApiHandler($q, $http));
        }
    }
]);
//# sourceMappingURL=ApiHandler.js.map