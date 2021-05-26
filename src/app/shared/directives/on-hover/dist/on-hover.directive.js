"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OnHoverDirective = void 0;
var core_1 = require("@angular/core");
var OnHoverDirective = /** @class */ (function () {
    function OnHoverDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    OnHoverDirective.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.el.nativeElement, 'mat-elevation-z6');
    };
    OnHoverDirective.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'mat-elevation-z6');
    };
    __decorate([
        core_1.HostListener('mouseenter')
    ], OnHoverDirective.prototype, "onMouseEnter");
    __decorate([
        core_1.HostListener('mouseleave')
    ], OnHoverDirective.prototype, "onMouseLeave");
    OnHoverDirective = __decorate([
        core_1.Directive({
            selector: '[appOnHover]'
        })
    ], OnHoverDirective);
    return OnHoverDirective;
}());
exports.OnHoverDirective = OnHoverDirective;
