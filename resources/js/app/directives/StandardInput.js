var FrontEndLibrary;
(function (FrontEndLibrary) {
    var StandardInput = (function () {
        function StandardInput() {
            this.restrict = "E";
            this.replace = true;
            this.require = ["?ngModel", "^?form"];
            this.template = '<div>' +
                '<input type="{{ type }}" name="{{ name }}" id="{{ id }}" ng-class="{error: controller.$invalid && checkSubmit}" ng-required="required" ng-disabled="disabled" ng-model="modelBinding" placeholder="{{ placeholder }}" class="input halfWidth">' +
                '<p class="errorMessage animated" ng-class="{show: controller.$invalid && checkSubmit}">{{ errorMessage }}</p>' +
                '</div>';
            this.scope = {
                placeholder: '@',
                name: '@',
                modelBinding: "=ngModel",
                label: '@',
                id: '@',
                required: '=',
                disabled: '=',
                errorMessage: "@",
                type: '@',
                value: '@',
                checkSubmit: '='
            };
            this.link = function (scope, element, attrs, ctrls) {
                var ngModelController = ctrls[0];
                var form = ctrls[1];
                // set text to default type
                if (!scope.type)
                    scope.type = 'text';
                // set view value if value exists
                if (scope.value)
                    scope.modelBinding = scope.value;
                // default id if needed
                if (!scope.id) {
                    scope.id = angular.copy(scope.name);
                }
                scope.controller = form[scope.name];
                scope.errorMessage = scope.label + " is required";
                scope.$on('$destroy', function () {
                });
            };
        }
        StandardInput.DirectiveId = "standardInput";
        return StandardInput;
    }());
    FrontEndLibrary.StandardInput = StandardInput;
})(FrontEndLibrary || (FrontEndLibrary = {}));
FrontEndLibrary.TT.directive("standardInput", [function () {
        return new FrontEndLibrary.StandardInput();
    }]);
//# sourceMappingURL=StandardInput.js.map