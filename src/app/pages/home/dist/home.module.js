"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("../home/home.component");
var forms_1 = require("@angular/forms");
var on_hover_module_1 = require("src/app/shared/directives/on-hover/on-hover.module");
var splash_screen_module_1 = require("../splash-screen/splash-screen.module");
var login_module_1 = require("../login/login.module");
var nav_module_1 = require("../nav/nav.module");
var registration_module_1 = require("../registration/registration.module");
var icon_1 = require("@angular/material/icon");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var report_add_module_1 = require("../usageReportAdd/report-add.module");
var usage_reports_module_1 = require("../reports/card/usageReports/usage-reports.module");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [home_component_1.HomeComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                on_hover_module_1.OnHoverModule,
                splash_screen_module_1.SplashScreenModule,
                login_module_1.LoginModule,
                nav_module_1.NavModule,
                registration_module_1.RegistrationModule,
                icon_1.MatIconModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                report_add_module_1.reportAddModule,
                usage_reports_module_1.UsageReportModule
            ],
            exports: [home_component_1.HomeComponent]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
