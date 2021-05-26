"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.reportAddModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var report_add_component_1 = require("./report-add.component");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var forms_1 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var dialog_1 = require("@angular/material/dialog");
var reportAddModule = /** @class */ (function () {
    function reportAddModule() {
    }
    reportAddModule = __decorate([
        core_1.NgModule({
            declarations: [report_add_component_1.reportAddComponent],
            imports: [
                common_1.CommonModule, card_1.MatCardModule, icon_1.MatIconModule, forms_1.FormsModule, input_1.MatInputModule, button_1.MatButtonModule, forms_1.ReactiveFormsModule, dialog_1.MatDialogModule,
            ]
        })
    ], reportAddModule);
    return reportAddModule;
}());
exports.reportAddModule = reportAddModule;
