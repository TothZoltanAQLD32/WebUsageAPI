"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavComponent = void 0;
var core_1 = require("@angular/core");
var NavComponent = /** @class */ (function () {
    function NavComponent(firebase) {
        this.firebase = firebase;
        this.categories = [];
        this.callSelectPage = new core_1.EventEmitter();
        this.callSelectC = new core_1.EventEmitter();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _a;
        this.currentUser = (_a = this.firebase.auth().currentUser) === null || _a === void 0 ? void 0 : _a.email;
    };
    NavComponent.prototype.select = function (target) {
        this.callSelectC.emit(target);
    };
    NavComponent.prototype.logoutFireBase = function () {
        this.callSelectPage.emit('');
        this.firebase.auth().signOut().then(function (err) {
            console.log("Signout failed");
        });
    };
    __decorate([
        core_1.Output()
    ], NavComponent.prototype, "sCategoryTitle");
    __decorate([
        core_1.Input()
    ], NavComponent.prototype, "categories");
    __decorate([
        core_1.Input()
    ], NavComponent.prototype, "selectedCategory");
    __decorate([
        core_1.Output()
    ], NavComponent.prototype, "callSelectPage");
    __decorate([
        core_1.Output()
    ], NavComponent.prototype, "callSelectC");
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.scss']
        })
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
