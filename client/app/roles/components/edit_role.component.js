System.register(['angular2/core', 'angular2/common', '../services/roles.services', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, roles_services_1, router_1;
    var RoleModule, ModuleEdit, NewModuleEdit, RoleEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (roles_services_1_1) {
                roles_services_1 = roles_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //TODO Seperate and clean this up
            RoleModule = (function () {
                function RoleModule() {
                }
                return RoleModule;
            })();
            ModuleEdit = (function () {
                function ModuleEdit(_roleService, params) {
                    this._roleService = _roleService;
                    this.param = params.get('id');
                }
                ModuleEdit.prototype.getModules = function (selected_module, id) {
                    var _this = this;
                    this._roleService.getModules(selected_module, id).subscribe(function (role_module) {
                        _this.module = role_module.data[0],
                            _this.active_module.INSERT_ALLOWED_FLAG = role_module.data[0].INSERT_ALLOWED_FLAG,
                            _this.active_module.UPDATE_ALLOWED_FLAG = role_module.data[0].UPDATE_ALLOWED_FLAG,
                            _this.active_module.DELETE_ALLOWED_FLAG = role_module.data[0].DELETE_ALLOWED_FLAG,
                            _this.active_module.QUERY_ONLY = role_module.data[0].QUERY_ONLY;
                    }, function (error) {
                        console.log('error logged:');
                        console.log(error);
                    });
                };
                ModuleEdit.prototype.toggleModules = function (module_type) {
                    if (module_type === 'insert') {
                        //Insert  Flag
                        if (this.module.INSERT_ALLOWED_FLAG === 'Y') {
                            this.module.INSERT_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.module.INSERT_ALLOWED_FLAG = 'Y';
                            this.module.QUERY_ONLY = 'N';
                        }
                    }
                    if (module_type === 'update') {
                        //Update  Flag
                        if (this.module.UPDATE_ALLOWED_FLAG === 'Y') {
                            this.module.UPDATE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.module.UPDATE_ALLOWED_FLAG = 'Y';
                            this.module.QUERY_ONLY = 'N';
                        }
                    }
                    if (module_type === 'delete') {
                        //Delete  Flag
                        if (this.module.DELETE_ALLOWED_FLAG === 'Y') {
                            this.module.DELETE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.module.DELETE_ALLOWED_FLAG = 'Y';
                            this.module.QUERY_ONLY = 'N';
                        }
                    }
                    if (module_type === 'query') {
                        //Query  Flag
                        if (this.module.QUERY_ONLY === 'Y') {
                            this.module.QUERY_ONLY = 'N';
                        }
                        else {
                            this.module.QUERY_ONLY = 'Y';
                            this.module.DELETE_ALLOWED_FLAG = 'N';
                            this.module.UPDATE_ALLOWED_FLAG = 'N';
                            this.module.INSERT_ALLOWED_FLAG = 'N';
                        }
                    }
                };
                ModuleEdit = __decorate([
                    core_1.Component({
                        selector: 'role_modules',
                        inputs: ['module'],
                        template: "\n    <table id=\"modules_table\" border=\"1\" cellpadding=\"7\" cellspacing=\"7\" *ngIf=\"module\">\n        <tr>\n            <th width = \"20%\"> Module Name </th>\n            <th width = \"20%\"> Insert </th>\n            <th width = \"20%\"> Update </th>\n            <th width = \"20%\"> Delete </th>\n            <th width = \"20%\"> Query </th>\n        </tr>\n        <tr>\n            <td width = \"20%\"> <div id=\"active_module_id\"></div> {{module?.MODULE_NAME}} </td>\n            <input type=\"hidden\" name=\"active_module\" value=\"{{module?.MODULE_NAME}}\">\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"module?.INSERT_ALLOWED_FLAG === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('insert')\" checked>\n            </td>\n\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"module?.UPDATE_ALLOWED_FLAG === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('update')\" checked>\n            </td>\n\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"module?.DELETE_ALLOWED_FLAG === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('delete')\" checked>\n            </td>\n\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"module?.QUERY_ONLY === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('query')\" checked>\n            </td>\n        </tr>\n    </table>        "
                    }), 
                    __metadata('design:paramtypes', [roles_services_1.RoleService, router_1.RouteParams])
                ], ModuleEdit);
                return ModuleEdit;
            })();
            NewModuleEdit = (function () {
                function NewModuleEdit(_roleService, params) {
                    this._roleService = _roleService;
                    this.param = params.get('id');
                    this.jwt = localStorage.getItem('jwt');
                }
                NewModuleEdit.prototype.getModules = function (selected_module, id) {
                    var _this = this;
                    this._roleService.getModules(this.jwt, selected_module, id).subscribe(function (role_module) { _this.new_module = role_module.data[0]; }, function (error) {
                        console.log('error logged:');
                        console.log(error);
                    });
                };
                NewModuleEdit.prototype.toggleModules = function (module_type) {
                    if (module_type === 'insert') {
                        //Insert  Flag
                        if (this.new_module.INSERT_ALLOWED_FLAG === 'Y') {
                            this.new_module.INSERT_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.new_module.INSERT_ALLOWED_FLAG = 'Y';
                            this.new_module.QUERY_ONLY = 'N';
                        }
                    }
                    if (module_type === 'update') {
                        //Update  Flag
                        if (this.new_module.UPDATE_ALLOWED_FLAG === 'Y') {
                            this.new_module.UPDATE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.new_module.UPDATE_ALLOWED_FLAG = 'Y';
                            this.new_module.QUERY_ONLY = 'N';
                        }
                    }
                    if (module_type === 'delete') {
                        //Delete  Flag
                        if (this.new_module.DELETE_ALLOWED_FLAG === 'Y') {
                            this.new_module.DELETE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.new_module.DELETE_ALLOWED_FLAG = 'Y';
                            this.new_module.QUERY_ONLY = 'N';
                        }
                    }
                    if (module_type === 'query') {
                        //Query  Flag
                        if (this.new_module.QUERY_ONLY === 'Y') {
                            this.new_module.QUERY_ONLY = 'N';
                        }
                        else {
                            this.new_module.QUERY_ONLY = 'Y';
                            this.new_module.DELETE_ALLOWED_FLAG = 'N';
                            this.new_module.UPDATE_ALLOWED_FLAG = 'N';
                            this.new_module.INSERT_ALLOWED_FLAG = 'N';
                        }
                    }
                };
                NewModuleEdit = __decorate([
                    core_1.Component({
                        selector: 'new_role_modules',
                        inputs: ['new_module'],
                        template: "\n    <table id=\"new_modules_table\" border=\"1\" cellpadding=\"7\" cellspacing=\"7\" *ngIf=\"new_module\">\n        <tr>\n            <th width = \"20%\"> Module Name </th>\n            <th width = \"20%\"> Insert </th>\n            <th width = \"20%\"> Update </th>\n            <th width = \"20%\"> Delete </th>\n            <th width = \"20%\"> Query </th>\n        </tr>\n        <tr>\n            <td width = \"20%\"> <div id=\"active_module_id\"></div> {{new_module?.MODULE_NAME}} </td>\n            <input type=\"hidden\" name=\"active_module\" value=\"{{new_module?.MODULE_NAME}}\">\n\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"new_module?.INSERT_ALLOWED_FLAG === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('insert')\" checked>\n            </td>\n\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"new_module?.UPDATE_ALLOWED_FLAG === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('update')\" checked>\n            </td>\n\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"new_module?.DELETE_ALLOWED_FLAG === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('delete')\" checked>\n            </td>\n\n            <td>\n            <input type=\"checkbox\"\n                          [ngModel]=\"new_module?.QUERY_ONLY === 'Y' ? true : false\"\n                          (ngModelChange)=\"toggleModules('query')\" checked>\n            </td>\n        </tr>\n    </table>        "
                    }), 
                    __metadata('design:paramtypes', [roles_services_1.RoleService, router_1.RouteParams])
                ], NewModuleEdit);
                return NewModuleEdit;
            })();
            RoleEdit = (function () {
                function RoleEdit(_roleService, params, router) {
                    this._roleService = _roleService;
                    this.router = router;
                    this.role_submit = {};
                    this.active_module_name = '';
                    this.active_new_module_name = '';
                    this.params = params.get('id');
                    this.jwt = localStorage.getItem('jwt');
                }
                ;
                RoleEdit.prototype.ngOnInit = function () {
                    this.getEditRole(this.jwt, this.params);
                };
                ;
                RoleEdit.prototype.submitRoleEditForm = function () {
                    this._roleService.saveEditRole(this.jwt, this.params, this.role_submit, this.active_module_name, this.active_module, this.active_new_module_name, this.active_new_module).subscribe();
                    this.router.navigate(['RolesList']);
                };
                RoleEdit.prototype.getEditRole = function (jwt, id) {
                    var _this = this;
                    this._roleService.getEditRole(jwt, id).subscribe(function (role_edit) {
                        _this.role = role_edit.data[0],
                            _this.role_submit.ROLE_NAME = role_edit.data[0].ROLE_NAME,
                            _this.role_submit.DESCRIPTION = role_edit.data[0].DESCRIPTION,
                            _this.role_submit.ACTIVE_FLAG = role_edit.data[0].ACTIVE_FLAG,
                            _this.modules = role_edit.modules,
                            _this.new_modules = role_edit.new_modules;
                    }, function (error) {
                        console.log('error logged:');
                        console.log(error);
                    });
                };
                ;
                //TODO Change this to be a store at some point(when you get it more figured out!)
                RoleEdit.prototype.gettingActiveModule = function (item) {
                    for (var i = 0; i < this.modules.length; i++) {
                        if (this.modules[i].MODULE_NAME === item) {
                            this.active_module = this.modules[i];
                            this.active_module_name = this.modules[i].MODULE_NAME;
                        }
                    }
                    console.log(this.active_module);
                    console.log(this.active_module_name);
                };
                //TODO Figure out how to do this in a store
                RoleEdit.prototype.gettingActiveNewModule = function (item) {
                    for (var i = 0; i < this.new_modules.length; i++) {
                        if (this.new_modules[i].MODULE_NAME === item) {
                            this.active_new_module = this.new_modules[i];
                            this.active_new_module_name = this.new_modules[i].MODULE_NAME;
                        }
                    }
                    console.log(this.active_new_module);
                    console.log(this.active_new_module_name);
                };
                RoleEdit.prototype.toggleRoleActive = function () {
                    if (this.role_submit.ACTIVE_FLAG === 'Y') {
                        this.role_submit.ACTIVE_FLAG = 'N';
                    }
                    else {
                        this.role_submit.ACTIVE_FLAG = 'Y';
                    }
                };
                RoleEdit.prototype.toggleModules = function (module_type) {
                    if (module_type === 'module') {
                        //Insert  Flag
                        if (this.active_module.INSERT_ALLOWED_FLAG === 'Y') {
                            this.active_module.INSERT_ALLOWED_FLAG = 'N';
                            console.log(this.active_module.INSERT_ALLOWED_FLAG);
                        }
                        else {
                            this.active_module.INSERT_ALLOWED_FLAG = 'Y';
                            console.log(this.active_module.INSERT_ALLOWED_FLAG);
                        }
                        //Update  Flag
                        if (this.active_module.UPDATE_ALLOWED_FLAG === 'Y') {
                            this.active_module.UPDATE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.active_module.UPDATE_ALLOWED_FLAG = 'Y';
                        }
                        //Delete  Flag
                        if (this.active_module.DELETE_ALLOWED_FLAG === 'Y') {
                            this.active_module.DELETE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.active_module.DELETE_ALLOWED_FLAG = 'Y';
                        }
                        //Query  Flag
                        if (this.active_module.QUERY_ONLY === 'Y') {
                            this.active_module.QUERY_ONLY = 'N';
                        }
                        else {
                            this.active_module.QUERY_ONLY = 'Y';
                        }
                    }
                    if (module_type === 'new_module') {
                        //Insert  Flag
                        if (this.active_new_module.INSERT_ALLOWED_FLAG === 'Y') {
                            this.active_new_module.INSERT_ALLOWED_FLAG = 'N';
                            console.log(this.active_new_module.INSERT_ALLOWED_FLAG);
                        }
                        else {
                            this.active_new_module.INSERT_ALLOWED_FLAG = 'Y';
                            console.log(this.active_new_module.INSERT_ALLOWED_FLAG);
                        }
                        //Update  Flag
                        if (this.active_new_module.UPDATE_ALLOWED_FLAG === 'Y') {
                            this.active_new_module.UPDATE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.active_new_module.UPDATE_ALLOWED_FLAG = 'Y';
                        }
                        //Delete  Flag
                        if (this.active_new_module.DELETE_ALLOWED_FLAG === 'Y') {
                            this.active_new_module.DELETE_ALLOWED_FLAG = 'N';
                        }
                        else {
                            this.active_new_module.DELETE_ALLOWED_FLAG = 'Y';
                        }
                        //Query  Flag
                        if (this.active_new_module.QUERY_ONLY === 'Y') {
                            this.active_new_module.QUERY_ONLY = 'N';
                        }
                        else {
                            this.active_new_module.QUERY_ONLY = 'Y';
                        }
                    }
                };
                RoleEdit = __decorate([
                    core_1.Component({
                        selector: 'edit_role',
                        providers: [roles_services_1.RoleService],
                        directives: [common_1.CORE_DIRECTIVES, ModuleEdit, NewModuleEdit],
                        templateUrl: 'app/roles/components/edit_role.html'
                    }), 
                    __metadata('design:paramtypes', [roles_services_1.RoleService, router_1.RouteParams, router_1.Router])
                ], RoleEdit);
                return RoleEdit;
            })();
            exports_1("RoleEdit", RoleEdit);
        }
    }
});
//# sourceMappingURL=edit_role.component.js.map