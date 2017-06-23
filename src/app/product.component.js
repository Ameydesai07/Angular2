"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lt-117 on 21/6/17.
 */
var core_1 = require('@angular/core');
var ProductComponent = (function () {
    function ProductComponent() {
    }
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "data", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product',
            template: "\n  <div class=\"media\">\n    <div class=\"media-left\">\n      <a href=\"#\">\n        <img class=\"media-object\" src=\"{{ data.imageUrl}}\">\n      </a>\n    </div>\n    <div class=\"media-body\">\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\">\n          {{ data.productName }}\n        </h4>\n        {{ data.releasedDate | date | uppercase }}\n        <rating\n          [rating-value]=\"data.rating\"\n          [numOfReviews]=\"data.numOfReviews\">\n        </rating>\n        <div [ngSwitch]=\"data.rating\">\n          <div *ngSwitchCase=\"1\"> Poor </div>\n          <div *ngSwitchCase=\"2\"> Fair </div>\n          <div *ngSwitchCase=\"3\"> Good </div>\n          <div *ngSwitchCase=\"4\"> Very Good </div>\n          <div *ngSwitchCase=\"5\"> Excellent </div>\n          <div *ngSwitchDefault> Not rated yet</div>\n        </div>\n        <br>\n        {{ data.description | truncate:20}}\n      </div>\n    </div>\n  </div>\n",
            styles: ["\n.media {\nmargin-bottom: 20px;\n}\n"]
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map