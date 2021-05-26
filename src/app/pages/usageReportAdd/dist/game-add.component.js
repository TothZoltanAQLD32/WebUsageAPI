"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GameAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var GameAddComponent = /** @class */ (function () {
    function GameAddComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.form = new forms_1.FormGroup({
            id: new forms_1.FormControl(''),
            title: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl(''),
            rating: new forms_1.FormControl(0),
            img: new forms_1.FormControl('')
        });
    }
    GameAddComponent.prototype.ngOnInit = function () {
    };
    GameAddComponent.prototype.close = function () {
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
        this.dialogRef.close();
    };
    GameAddComponent = __decorate([
        core_1.Component({
            selector: 'app-game-add',
            templateUrl: './game-add.component.html',
            styleUrls: ['./game-add.component.scss']
        })
    ], GameAddComponent);
    return GameAddComponent;
}());
exports.GameAddComponent = GameAddComponent;
