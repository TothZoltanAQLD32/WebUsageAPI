"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsageReportsComponent = void 0;
var core_1 = require("@angular/core");
var report_add_component_1 = require("src/app/pages/usageReportAdd/report-add.component");
var UsageReportsComponent = /** @class */ (function () {
    function UsageReportsComponent(dialog, service) {
        this.dialog = dialog;
        this.service = service;
    }
    UsageReportsComponent.prototype.ngOnInit = function () {
    };
    UsageReportsComponent.prototype.deleteRecord = function (collectionName, docId) {
        this.service["delete"](collectionName, docId);
    };
    UsageReportsComponent.prototype.addFavorite = function (report) {
        if (!report.star) {
            report.star = true;
            this.service.update('usage_reports', report.docId, report);
        }
        else {
            report.star = false;
            this.service.update('usage_reports', report.docId, report);
        }
    };
    UsageReportsComponent.prototype.openDiag = function (docId, name, effectiveDate, href, dataConsumption, id, imageResource, description) {
        var _this = this;
        var dialogRef = this.dialog.open(report_add_component_1.reportAddComponent, {
            data: { name: name,
                effectiveDate: effectiveDate,
                href: href,
                dataConsumption: dataConsumption,
                id: id,
                imageResource: imageResource,
                description: description
            }
        });
        dialogRef.afterClosed().subscribe(function (report) {
            report.docId = docId;
            if (report && (report === null || report === void 0 ? void 0 : report.name)) {
                _this.service.update('usage_reports', report.docId, report);
            }
        }, function (err) {
            console.log("Hiba történt, próbálja újra a tevékenység frissítését!");
        });
    };
    __decorate([
        core_1.Input()
    ], UsageReportsComponent.prototype, "report");
    UsageReportsComponent = __decorate([
        core_1.Component({
            selector: 'usage-reports-card',
            templateUrl: './usage-reports.component.html',
            styleUrls: ['./usage-reports.component.scss']
        })
    ], UsageReportsComponent);
    return UsageReportsComponent;
}());
exports.UsageReportsComponent = UsageReportsComponent;
