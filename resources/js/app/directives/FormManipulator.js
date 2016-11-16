var FrontEndLibrary;
(function (FrontEndLibrary) {
    var FormManipulator = (function () {
        function FormManipulator(rootScope) {
            var _this = this;
            this.restrict = "A";
            this.replace = false;
            this.scope = {
                formEmailListRemove: "=",
                formEmailInfoRemove: "="
            };
            this.link = function (scope, element, attrs) {
                var $body = $('body');
                var $close = $('.mfp-close');
                var modalClose = function () {
                    scope.formEmailInfoRemove = null;
                    scope.formEmailListRemove = [];
                    element.val("");
                    _this._rootScope.$broadcast('resetForm');
                    scope.$apply();
                };
                element.bind('click', function (ev) {
                    ev.stopImmediatePropagation();
                });
                $body.bind('click', modalClose);
                $close.bind('click', modalClose);
                scope.$on('$destroy', function () {
                    $close.unbind('click', modalClose);
                    $body.unbind('click', modalClose);
                });
            };
            this._rootScope = rootScope;
        }
        return FormManipulator;
    }());
    FrontEndLibrary.FormManipulator = FormManipulator;
})(FrontEndLibrary || (FrontEndLibrary = {}));
FrontEndLibrary.TT.directive("formManipulator", ['$rootScope', function ($rootScope) {
        return new FrontEndLibrary.FormManipulator($rootScope);
    }]);
//# sourceMappingURL=FormManipulator.js.map