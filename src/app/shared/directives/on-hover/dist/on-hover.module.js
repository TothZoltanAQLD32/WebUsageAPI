"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OnHoverModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var on_hover_directive_1 = require("./on-hover.directive");
var OnHoverModule = /** @class */ (function () {
    function OnHoverModule() {
    }
    OnHoverModule = __decorate([
        core_1.NgModule({
            declarations: [on_hover_directive_1.OnHoverDirective],
            imports: [common_1.CommonModule],
            exports: [on_hover_directive_1.OnHoverDirective]
        })
    ], OnHoverModule);
    return OnHoverModule;
}());
exports.OnHoverModule = OnHoverModule;
