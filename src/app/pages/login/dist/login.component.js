"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.KEY_CODE = exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.callSelectPage = new core_1.EventEmitter();
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl("minta@gmail.com", forms_1.Validators.required),
            password: new forms_1.FormControl("*****", forms_1.Validators.required)
        });
    }
    //Hostlistener to login when ENTER is pressed
    LoginComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === KEY_CODE.ENTER) {
            this.firebaseLogin();
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.firebaseLogin = function () {
        var _this = this;
        var _a, _b;
        this.angularFireAuth.signInWithEmailAndPassword((_a = this.form.get("email")) === null || _a === void 0 ? void 0 : _a.value, (_b = this.form.get("password")) === null || _b === void 0 ? void 0 : _b.value).then(function (res) {
            console.log('You are Successfully logged in!');
            _this.callSelectPage.emit('home');
        })["catch"](function (err) {
            console.log('Valami nem volt jó a bejelentkezés során: ' + err.message);
            _this.errorMessage = "Helytelen email címet vagy jelszót adott meg a belépés során.";
        });
    };
    LoginComponent.prototype.firebaseLoginAnonymous = function () {
        var _this = this;
        this.angularFireAuth.signInAnonymously().then(function (res) {
            console.log('You are Successfully logged in!');
            _this.callSelectPage.emit('home');
        })["catch"](function (err) {
            console.log('Valami nem volt jó a bejelentkezés során: ' + err.message);
            _this.errorMessage = "Vendégként most nem tud belépni. Kérem regisztráljon!";
        });
    };
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "callSelectPage");
    __decorate([
        core_1.HostListener('window:keyup', ['$event'])
    ], LoginComponent.prototype, "keyEvent");
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//We import KEY_CODES Separetely
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["UP_ARROW"] = 38] = "UP_ARROW";
    KEY_CODE[KEY_CODE["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE = exports.KEY_CODE || (exports.KEY_CODE = {}));
