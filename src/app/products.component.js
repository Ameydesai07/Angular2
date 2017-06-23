"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lt-117 on 20/6/17.
 */
var core_1 = require('@angular/core');
var product_services_1 = require("./product.services");
var ProductsComponent = (function () {
    function ProductsComponent(productService) {
        this.products = productService.getProducts();
    }
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            template: "<h2>Products</h2>\n<div *ngIf=\"products.length > 0\">\n  <div *ngFor=\"let product of products\">\n    <product [data]=\"product\"></product>\n  </div>\n</div>\n<div *ngIf=\"products.length == 0\">\n<h1> Products are not present </h1>\n</div>",
            providers: [product_services_1.ProductServices]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map