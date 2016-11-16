var FrontEndLibrary;
(function (FrontEndLibrary) {
    var Services;
    (function (Services) {
        var ShareEmailService = (function () {
            function ShareEmailService(location) {
                this._location = location;
            }
            ShareEmailService.prototype.getAbsolutUrl = function () {
                return this._location.absUrl();
            };
            return ShareEmailService;
        }());
        Services.ShareEmailService = ShareEmailService;
    })(Services = FrontEndLibrary.Services || (FrontEndLibrary.Services = {}));
})(FrontEndLibrary || (FrontEndLibrary = {}));
FrontEndLibrary.TT.factory("ShareEmailService", ["$location", function ($location) {
        return new FrontEndLibrary.Services.ShareEmailService($location);
    }]);
//# sourceMappingURL=ShareEmailService.js.map