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
var RatingComponent = (function () {
    function RatingComponent() {
        this.rating = 0;
        this.numOfReviews = 0;
    }
    RatingComponent.prototype.onClick = function (ratingVal) {
        this.rating = ratingVal;
    };
    __decorate([
        core_1.Input('rating-value')
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Input()
    ], RatingComponent.prototype, "numOfReviews", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: "rating",
            templateUrl: 'rating.component.html',
            styles: ["\n    .glyphicon-star {\n      color: orange;\n    }\n  "]
        })
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map