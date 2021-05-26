"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var category_database_1 = require("src/app/shared/database/category.database");
var usage_reports_database_1 = require("src/app/shared/database/usage_reports.database");
var report_add_component_1 = require("../usageReportAdd/report-add.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, service) {
        this.dialog = dialog;
        this.service = service;
        this.categories = category_database_1.CATEGORIES;
        this.usage_reports = null;
        this.usage_reports_database = usage_reports_database_1.REPORTS;
        this.category = '';
        this.page = 'home';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.queryNext = false;
        this.category = 'reports';
        this.queryData();
        this.queryHighUsages();
        this.queryFavorites();
    };
    HomeComponent.prototype.ngOnChanges = function () {
        this.queryData();
        this.queryHighUsages();
        this.queryFavorites();
    };
    HomeComponent.prototype.queryData = function () {
        var current_usage_reports = this.service.get('usage_reports');
        if (current_usage_reports != null) {
            this.usage_reports = current_usage_reports;
        }
        else {
            this.usage_reports = this.usage_reports_database;
        }
    };
    HomeComponent.prototype.queryHighUsages = function () {
        var current_usage_reports = this.service.getHighUsages('usage_reports');
        if (current_usage_reports != null) {
            this.high_usage_reports = current_usage_reports;
        }
        else {
            console.log("Váratlan hiba történt, vagy nincs 25Gb adatot meghaladó tevékenység.");
        }
    };
    HomeComponent.prototype.queryFavorites = function () {
        var current_usage_reports = this.service.getFavorites('usage_reports');
        if (current_usage_reports != null) {
            this.favorites = current_usage_reports;
        }
        else {
            console.log("Váratlan hiba történt, vagy nincs 25Gb adatot meghaladó tevékenység.");
        }
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        delete this.category;
        delete this.usage_reports;
    };
    HomeComponent.prototype.onSelectPage = function (event) {
        if (event) {
            this.page = event;
        }
        else {
            this.page = '';
        }
    };
    HomeComponent.prototype.onSelectCategory = function (event) {
        if (event) {
            this.category = event;
        }
        else {
            this.category = '';
        }
    };
    //Beszúrás
    HomeComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(report_add_component_1.reportAddComponent, {});
        dialogRef.afterClosed().subscribe(function (report) {
            if (report && (report === null || report === void 0 ? void 0 : report.name)) {
                report.star = false;
                _this.service.add('usage_reports', report);
            }
        }, function (err) {
            console.log("Hiba történt, próbálja újra a tevékenység felvételét!");
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
