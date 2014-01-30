angular.module('axa.csp').directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // view -> model
            elm.bind('keyup', function() {
                var newVal = !elm.html() || elm.html().trim() == '' ? null : elm.html().trim();
                var oldVal = !ctrl.$viewValue || ctrl.$viewValue.trim() == '' ? null : ctrl.$viewValue.trim()

                if (oldVal != newVal) {
                    scope.$apply(function() {
                        ctrl.$setViewValue(newVal);
                    });
                }
            });

            // model -> view
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
            };
        }
    };
});