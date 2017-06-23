"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lt-117 on 22/6/17.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var password_validator_1 = require('./password.validator');
var LoginComponent = (function () {
    function LoginComponent(fb, private_loginService) {
        this.form = fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, password_validator_1.PasswordValidator.cannotContainSpace])]
        });
    }
    LoginComponent.prototype.login = function () {
        var result = this._loginService.login(this.form.controls["username"], this.form.controls["password"]);
        if (!result) {
            this.form.controls["password"].setErrors({
                invalidLogin: true
            });
        }
        console.log("form values", this.form.value);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "login.component.html"
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map