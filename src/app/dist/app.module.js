"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var fire_1 = require("@angular/fire");
var firestore_1 = require("@angular/fire/firestore");
var auth_1 = require("@angular/fire/auth");
var environment_1 = require("src/environments/environment");
var home_module_1 = require("./pages/home/home.module");
var login_module_1 = require("./pages/login/login.module");
var report_add_module_1 = require("./pages/usageReportAdd/report-add.module");
var splash_screen_module_1 = require("./pages/splash-screen/splash-screen.module");
var usage_reports_module_1 = require("./pages/reports/card/usageReports/usage-reports.module");
var registration_module_1 = require("./pages/registration/registration.module");
var nav_module_1 = require("./pages/nav/nav.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
                home_module_1.HomeModule,
                login_module_1.LoginModule,
                report_add_module_1.reportAddModule,
                splash_screen_module_1.SplashScreenModule,
                usage_reports_module_1.UsageReportModule,
                registration_module_1.RegistrationModule,
                nav_module_1.NavModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
