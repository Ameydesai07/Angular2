"use strict";
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.cannotContainSpace = function (formControl) {
        if (formControl.value.indexOf('') >= 0)
            return { cannotContainSpace: true };
        return null;
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=password.validator.js.map