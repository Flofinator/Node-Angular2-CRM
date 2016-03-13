System.register(['angular2/core', '../services/roles.services', 'angular2/router', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, roles_services_1, router_1, common_1;
    var RoleAdd;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (roles_services_1_1) {
                roles_services_1 = roles_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RoleAdd = (function () {
                function RoleAdd(fb, _roleService, router) {
                    var _this = this;
                    this._roleService = _roleService;
                    this.router = router;
                    this.ROLE_NAME = new common_1.Control("", common_1.Validators.required);
                    this.jwt = localStorage.getItem('jwt');
                    this.form = fb.group({
                        "ROLE_NAME": this.ROLE_NAME,
                        "DESCRIPTION": ["", common_1.Validators.required]
                    });
                    // observe the full form as a whole
                    // apply complex cross field validations
                    // pre-save the form in the background
                    // easy implementation of requirements like undo/redo of valid states
                    this.form.valueChanges
                        .map(function (value) {
                        value.ROLE_NAME = value.ROLE_NAME; //.toUpperCase() can be used here to change the values to uppercase on form submittal(pretty neat!)
                        return value;
                    })
                        .filter(function (value) { return _this.form.valid; })
                        .subscribe(function (value) {
                        console.log("Model Driven Form valid value: vm = " + JSON.stringify(value));
                    });
                    // observe only one field
                    this.form.controls.ROLE_NAME.valueChanges.subscribe(function (value) {
                        console.log('role name changed = ' + value);
                    });
                }
                RoleAdd.prototype.onSubmit = function () {
                    console.log("model-based form submitted");
                    console.log(this.form._value);
                    this._roleService.saveNewRole(this.jwt, this.form._value).subscribe();
                    this.router.navigate(['RolesList']);
                };
                RoleAdd = __decorate([
                    core_1.Component({
                        selector: 'add_role',
                        template: "\n    <form [ngFormModel]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <p>\n            <label>Role Name:</label>\n            <input type=\"text\" ngControl=\"ROLE_NAME\">\n        </p>\n        <p>\n            <label>Description:</label>\n            <input type=\"text\" ngControl=\"DESCRIPTION\">\n        </p>\n        <p>\n            <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n        </p>\n    </form>"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, roles_services_1.RoleService, router_1.Router])
                ], RoleAdd);
                return RoleAdd;
            })();
            exports_1("RoleAdd", RoleAdd);
        }
    }
});
//# sourceMappingURL=add_role.component.js.map