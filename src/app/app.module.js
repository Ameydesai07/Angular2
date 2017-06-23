"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Core Angular module importation
 */
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
/**
 * Component's and Pipes importation
 */
var app_component_1 = require('./app.component');
var products_component_1 = require('./products.component');
var product_component_1 = require('./product.component');
var rating_component_1 = require('./rating.component');
var truncate_pipe_1 = require('./truncate.pipe');
var user_form_component_1 = require('./user-form.component');
var login_component_1 = require('./login.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                // Array of component's, pipes used with the application
                app_component_1.AppComponent, products_component_1.ProductsComponent, product_component_1.ProductComponent, rating_component_1.RatingComponent, truncate_pipe_1.TruncatePipe, user_form_component_1.UserFormComponent, login_component_1.LoginComponent
            ],
            imports: [
                // Array of external module's required with the applcation
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map