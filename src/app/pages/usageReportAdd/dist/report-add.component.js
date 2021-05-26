"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.reportAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var reportAddComponent = /** @class */ (function () {
    function reportAddComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl("Letöltés", forms_1.Validators.required),
            effectiveDate: new forms_1.FormControl(null),
            description: new forms_1.FormControl(null),
            href: new forms_1.FormControl(null),
            dataConsumption: new forms_1.FormControl(20, forms_1.Validators.required),
            id: new forms_1.FormControl(123, forms_1.Validators.required),
            imageResource: new forms_1.FormControl(null)
        });
    }
    reportAddComponent.prototype.ngOnInit = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        (_a = this.form.get('name')) === null || _a === void 0 ? void 0 : _a.setValue(this.data.name);
        (_b = this.form.get('effectiveDate')) === null || _b === void 0 ? void 0 : _b.setValue(this.data.effectiveDate);
        (_c = this.form.get('href')) === null || _c === void 0 ? void 0 : _c.setValue(this.data.href);
        (_d = this.form.get('dataConsumption')) === null || _d === void 0 ? void 0 : _d.setValue(this.data.dataConsumption);
        (_e = this.form.get('id')) === null || _e === void 0 ? void 0 : _e.setValue(this.data.id);
        (_f = this.form.get('imageResource')) === null || _f === void 0 ? void 0 : _f.setValue(this.data.imageResource);
        (_g = this.form.get('description')) === null || _g === void 0 ? void 0 : _g.setValue(this.data.description);
    };
    reportAddComponent.prototype.close = function () {
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
        this.dialogRef.close();
    };
    reportAddComponent = __decorate([
        core_1.Component({
            selector: 'app-report-add',
            templateUrl: './report-add.component.html',
            styleUrls: ['./report-add.component.scss']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], reportAddComponent);
    return reportAddComponent;
}());
exports.reportAddComponent = reportAddComponent;
