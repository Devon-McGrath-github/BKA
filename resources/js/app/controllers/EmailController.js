var FrontEndLibrary;
(function (FrontEndLibrary) {
    var EmailController = (function () {
        function EmailController(scope, emailApi, ShareEmailService) {
            var _this = this;
            this.emailList = [];
            this.trySubmit = false;
            this._scope = scope;
            this._emailApi = emailApi;
            this._ShareEmailService = ShareEmailService;
            if (this._scope) {
                this._scope.$on('resetForm', function () {
                    _this.IsSendingEnquiry = false;
                    _this.HasEnquiryFailed = false;
                    _this.trySubmit = false;
                    _this.HasEnquirySucceeded = false;
                });
                this._scope.$watch(function () { return _this.shareEmail; }, function (val) {
                    if (val) {
                        _this.HasEnquirySucceeded = false;
                        _this.HasEnquiryFailed = false;
                    }
                });
            }
        }
        EmailController.prototype.removeEmail = function (index) {
            this.emailList.splice(index, 1);
        };
        EmailController.prototype.isFormReadyToSend = function () {
            return this.shareEmailForm() !== undefined && this.shareEmailForm().$valid && !this.IsSendingEnquiry && !this.HasEnquirySucceeded;
        };
        EmailController.prototype.submitButtonText = function () {
            if (this.IsSendingEnquiry) {
                return "Sending...";
            }
            else if (this.HasEnquiryFailed) {
                return "Share";
            }
            else if (this.HasEnquirySucceeded) {
                return "Share";
            }
            else {
                return "Share";
            }
        };
        EmailController.prototype.share = function () {
            var _this = this;
            this.trySubmit = true;
            if (!this.isFormReadyToSend()) {
                return;
            }
            this.IsSendingEnquiry = true;
            this.HasEnquiryFailed = false;
            this.shareEmail.Url = this._ShareEmailService.getAbsolutUrl();
            this.shareEmail.EmailList = this.emailList;
            this._emailApi.send(this.shareEmail).then(function () {
                _this.HasEnquirySucceeded = true;
            }).catch(function () {
                _this.HasEnquiryFailed = true;
            }).finally(function () {
                _this.IsSendingEnquiry = false;
                _this.shareEmail = null;
                _this.emailList = [];
                _this.trySubmit = false;
            });
        };
        EmailController.prototype.shareEmailForm = function () {
            if (!this._form) {
                this._form = this._scope["shareEmail"];
            }
            return this._form;
        };
        EmailController.$inject = [
            "$scope",
            "emailApi",
            "ShareEmailService"
        ];
        return EmailController;
    }());
    FrontEndLibrary.EmailController = EmailController;
})(FrontEndLibrary || (FrontEndLibrary = {}));
FrontEndLibrary.TT.controller('emailController', FrontEndLibrary.EmailController);
//# sourceMappingURL=EmailController.js.map