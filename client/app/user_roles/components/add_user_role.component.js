System.register(['angular2/core', 'angular2/common', '../services/user_roles.services', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, user_roles_services_1, router_1, common_2;
    var UserRoleAdd;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (user_roles_services_1_1) {
                user_roles_services_1 = user_roles_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserRoleAdd = (function () {
                function UserRoleAdd(fb, _userRoleService, router) {
                    var _this = this;
                    this._userRoleService = _userRoleService;
                    this.router = router;
                    this.USER_ID = new common_2.Control("", common_2.Validators.required);
                    this.ROLE_ID = new common_2.Control("", common_2.Validators.required);
                    this.jwt = localStorage.getItem('jwt');
                    this.form = fb.group({
                        "USER_ID": this.USER_ID,
                        "ROLE_ID": this.ROLE_ID //["", Validators.required]
                    });
                    // observe the full form as a whole
                    // apply complex cross field validations
                    // pre-save the form in the background
                    // easy implementation of requirements like undo/redo of valid states
                    this.form.valueChanges
                        .map(function (value) {
                        value.USER_ID = value.USER_ID; //.toUpperCase() can be used here to change the values to uppercase on form submittal(pretty neat!)
                        return value;
                    })
                        .filter(function (value) { return _this.form.valid; })
                        .subscribe(function (value) {
                        console.log("Model Driven Form valid value: vm = " + JSON.stringify(value));
                    });
                    // observe only one field
                    this.form.controls.USER_ID.valueChanges.subscribe(function (value) {
                        console.log('User name changed = ' + value);
                    });
                }
                ;
                UserRoleAdd.prototype.ngOnInit = function () {
                    this.getUsersAndRoles(this.jwt);
                };
                ;
                UserRoleAdd.prototype.getUsersAndRoles = function (jwt) {
                    var _this = this;
                    this._userRoleService.getUsersAndRoles(jwt).subscribe(function (user_roles) { return _this.users_and_roles = user_roles; });
                };
                ;
                UserRoleAdd.prototype.onSubmit = function () {
                    console.log("model-based form submitted");
                    console.log(this.form._value);
                    this._userRoleService.saveNewUserRole(this.jwt, this.form._value).subscribe();
                    this.router.navigate(['UserRolesList']);
                };
                ;
                UserRoleAdd = __decorate([
                    core_1.Component({
                        selector: 'add_user_role',
                        providers: [user_roles_services_1.UserRoleService],
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n    <form [ngFormModel]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <p>\n            <label>User Name:</label>\n            <select id=\"user-select\" name=\"user_select\" ngControl=\"USER_ID\">\n                <template ngFor #user [ngForOf]=\"users_and_roles\">\n                    <option *ngIf=\"user.TYPE === 'U'\" [value]=\"user.USER_ID\">{{user.VALUE}}</option>\n                </template>\n            </select>\n        </p>\n        <p>\n            <label>Role Name:</label>\n            <select id=\"role-select\" name=\"role_select\" ngControl=\"ROLE_ID\">\n                <template ngFor #user [ngForOf]=\"users_and_roles\">\n                    <option *ngIf=\"user.TYPE === 'R'\" [value]=\"user.USER_ID\">{{user.VALUE}}</option>\n                </template>\n            </select>\n        </p>\n        <p>\n            <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n        </p>\n    </form>"
                    }), 
                    __metadata('design:paramtypes', [common_2.FormBuilder, user_roles_services_1.UserRoleService, router_1.Router])
                ], UserRoleAdd);
                return UserRoleAdd;
            })();
            exports_1("UserRoleAdd", UserRoleAdd);
        }
    }
});
//# sourceMappingURL=add_user_role.component.js.map