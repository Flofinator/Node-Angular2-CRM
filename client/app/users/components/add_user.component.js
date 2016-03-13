System.register(['angular2/core', '../services/users.services', 'angular2/router', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, users_services_1, router_1, common_1;
    var UserAdd;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_services_1_1) {
                users_services_1 = users_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            UserAdd = (function () {
                function UserAdd(fb, _userService, router) {
                    var _this = this;
                    this._userService = _userService;
                    this.router = router;
                    this.USERNAME = new common_1.Control("", common_1.Validators.required);
                    this.PASSWORD = new common_1.Control("", common_1.Validators.required);
                    this.jwt = localStorage.getItem('jwt');
                    this.form = fb.group({
                        "USERNAME": this.USERNAME,
                        "PASSWORD": this.PASSWORD //["", Validators.required]
                    });
                    // observe the full form as a whole
                    // apply complex cross field validations
                    // pre-save the form in the background
                    // easy implementation of requirements like undo/redo of valid states
                    this.form.valueChanges
                        .map(function (value) {
                        value.USERNAME = value.USERNAME; //.toUpperCase() can be used here to change the values to uppercase on form submittal(pretty neat!)
                        return value;
                    })
                        .filter(function (value) { return _this.form.valid; })
                        .subscribe(function (value) {
                        console.log("Model Driven Form valid value: vm = " + JSON.stringify(value));
                    });
                    // observe only one field
                    this.form.controls.USERNAME.valueChanges.subscribe(function (value) {
                        console.log('User name changed = ' + value);
                    });
                }
                UserAdd.prototype.onSubmit = function () {
                    console.log("model-based form submitted");
                    console.log(this.form._value);
                    this._userService.saveNewUser(this.jwt, this.form._value).subscribe();
                    this.router.navigate(['UserList']);
                };
                UserAdd = __decorate([
                    core_1.Component({
                        selector: 'add_user',
                        template: "\n    <form [ngFormModel]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <p>\n            <label>User Name:</label>\n            <input type=\"text\" ngControl=\"USERNAME\">\n        </p>\n        <p>\n            <label>Password:</label>\n            <input type=\"text\" ngControl=\"PASSWORD\">\n        </p>\n        <p>\n            <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n        </p>\n    </form>"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_services_1.UserService, router_1.Router])
                ], UserAdd);
                return UserAdd;
            })();
            exports_1("UserAdd", UserAdd);
        }
    }
});
//# sourceMappingURL=add_user.component.js.map