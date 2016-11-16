var FrontEndLibrary;
(function (FrontEndLibrary) {
    var Services;
    (function (Services) {
        var Api;
        (function (Api) {
            var EmailApi = (function () {
                function EmailApi(apiHandler) {
                    this._b = "umbraco/api/sharebyemailwebapi/";
                    this._apiHandler = apiHandler;
                }
                EmailApi.prototype.send = function (request) {
                    return this._apiHandler.postIt(this._b + "sendshareemail", request);
                };
                return EmailApi;
            }());
            Api.EmailApi = EmailApi;
        })(Api = Services.Api || (Services.Api = {}));
    })(Services = FrontEndLibrary.Services || (FrontEndLibrary.Services = {}));
})(FrontEndLibrary || (FrontEndLibrary = {}));
FrontEndLibrary.TT.factory("emailApi", ["apiHandler", function (apiHandler) {
        return new FrontEndLibrary.Services.Api.EmailApi(apiHandler);
    }]);
//# sourceMappingURL=EmailApi.js.map