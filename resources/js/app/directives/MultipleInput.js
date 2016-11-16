var FrontEndLibrary;
(function (FrontEndLibrary) {
    var MultiInput = (function () {
        function MultiInput() {
            this.restrict = "E";
            this.replace = true;
            this.require = ["?ngModel", "^?form"];
            this.template = '<div>' +
                '<input type="{{ type }}" name="{{ name }}" id="{{ id }}" ng-class="{error: !emailInputManipulator.length && !modelBinding && checkSubmit}" ng-required="required" ng-disabled="disabled" ng-model="modelBinding" placeholder="{{ placeholder }}" class="input" />' +
                '<p class="errorMessage animated" ng-class="{show: !emailInputManipulator.length && !modelBinding && checkSubmit}">{{ errorMessage }}</p>' +
                '</div>';
            this.scope = {
                emailInputManipulator: "=",
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
                var $input = element.find('input')[0];
                var keyCallback = function (key) {
                    if (key == 'enter') {
                        if (!element.find('input').hasClass('error')) {
                            scope.emailInputManipulator.push(scope.modelBinding);
                            scope.modelBinding = null;
                        }
                    }
                    scope.$apply();
                };
                var selectKeyHandler = new Events.KeyCallbackHandler($input, keyCallback);
                var selectFocusHandler = new Events.FocusCallbackHandler($input, function () {
                    element.find('input').removeClass('error');
                    element.find('.errorMessage').removeClass('show');
                    selectKeyHandler.addListeners();
                });
                var selectBlurHandler = new Events.BlurCallbackHandler($input, function () {
                    if (!!scope.modelBinding) {
                        scope.emailInputManipulator.push(scope.modelBinding);
                        scope.modelBinding = null;
                        element.find('input').removeClass('error');
                        element.find('.errorMessage').removeClass('show');
                    }
                    else {
                        if (!!element.find('input').val()) {
                            element.find('input').addClass('error');
                            element.find('.errorMessage').addClass('show');
                        }
                    }
                    if (!scope.emailInputManipulator.length) {
                        element.find('input').addClass('error');
                        element.find('.errorMessage').addClass('show');
                    }
                    scope.$apply();
                    selectKeyHandler.removeListeners();
                });
                selectFocusHandler.addListeners();
                selectBlurHandler.addListeners();
                scope.$on('$destroy', function () {
                    selectFocusHandler.removeListeners();
                });
            };
        }
        MultiInput.DirectiveId = "multiInput";
        return MultiInput;
    }());
    FrontEndLibrary.MultiInput = MultiInput;
})(FrontEndLibrary || (FrontEndLibrary = {}));
FrontEndLibrary.TT.directive("multiInput", [function () {
        return new FrontEndLibrary.MultiInput();
    }]);
//# sourceMappingURL=MultipleInput.js.map