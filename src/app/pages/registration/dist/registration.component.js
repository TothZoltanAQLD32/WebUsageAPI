"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistrationComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.callSelectPage = new core_1.EventEmitter();
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl("minta@gmail.com", forms_1.Validators.required),
            password: new forms_1.FormControl("*****", forms_1.Validators.required),
            emailAgain: new forms_1.FormControl(null),
            passwordAgain: new forms_1.FormControl(null)
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g;
        if (((_a = this.form.get("email")) === null || _a === void 0 ? void 0 : _a.value) != ((_b = this.form.get("emailAgain")) === null || _b === void 0 ? void 0 : _b.value)) {
            this.errorMessage = "A két email cím nem egyezik!";
            return;
        }
        else if (((_c = this.form.get("password")) === null || _c === void 0 ? void 0 : _c.value) != ((_d = this.form.get("passwordAgain")) === null || _d === void 0 ? void 0 : _d.value)) {
            this.errorMessage = "A két jelszó nem egyezik!";
            return;
        }
        else if (((_e = this.form.get("password")) === null || _e === void 0 ? void 0 : _e.value.length) < 6) {
            this.errorMessage = "Túl rövid jelszó! Legalább 6 karakternek kell lennie.";
            return;
        }
        this.angularFireAuth.createUserWithEmailAndPassword((_f = this.form.get("email")) === null || _f === void 0 ? void 0 : _f.value, (_g = this.form.get("password")) === null || _g === void 0 ? void 0 : _g.value).then(function (res) {
            console.log('You are Successfully signed up!', res);
            _this.success = true;
        })["catch"](function (error) {
            console.log('Something is wrong:', error.message);
            _this.errorMessage = "A regisztráció nem sikerült, a megadott email már lehet foglalt.";
            _this.success = false;
        });
    };
    __decorate([
        core_1.Output()
    ], RegistrationComponent.prototype, "callSelectPage");
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss']
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
