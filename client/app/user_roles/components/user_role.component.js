System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/user_roles.services', './reactivate_user_role.component', './delete_user_role.component', './add_user_role.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, user_roles_services_1, reactivate_user_role_component_1, delete_user_role_component_1, add_user_role_component_1;
    var UserRoles;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_roles_services_1_1) {
                user_roles_services_1 = user_roles_services_1_1;
            },
            function (reactivate_user_role_component_1_1) {
                reactivate_user_role_component_1 = reactivate_user_role_component_1_1;
            },
            function (delete_user_role_component_1_1) {
                delete_user_role_component_1 = delete_user_role_component_1_1;
            },
            function (add_user_role_component_1_1) {
                add_user_role_component_1 = add_user_role_component_1_1;
            }],
        execute: function() {
            exports_1("UserRoleAdd", add_user_role_component_1.UserRoleAdd);
            exports_1("UserRoleDelete", delete_user_role_component_1.UserRoleDelete);
            exports_1("UserRoleReactivate", reactivate_user_role_component_1.UserRoleReactivate);
            UserRoles = (function () {
                function UserRoles(_userRoleService) {
                    this._userRoleService = _userRoleService;
                    this.jwt = localStorage.getItem('jwt');
                }
                ;
                UserRoles.prototype.ngOnInit = function () {
                    this.getUserRoles(this.jwt);
                };
                ;
                UserRoles.prototype.getUserRoles = function (jwt) {
                    var _this = this;
                    this._userRoleService.getUserRoles(jwt).subscribe(function (user_roles) { return _this.user_role_list = user_roles; });
                };
                ;
                UserRoles = __decorate([
                    core_1.Component({
                        selector: 'user-list',
                        providers: [user_roles_services_1.UserRoleService],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div class=\"data-btn\">\n       <a [routerLink] = \"['/UserRoleAdd']\"><button> Add </button></a>\n    </div>\n    <br>\n    <br>\n      <div class =\"data-table\">\n        <table>\n            <tr>\n                <th style=\"width:35%\">User Name</th>\n                <th style=\"width:35%\">Role Name</th>\n                <th style=\"width:15%\">Active</th>\n                <th style=\"width:120px\">Action</th>\n            </tr>\n            <tr *ngFor=\"#user_role of user_role_list\">\n                <td>{{user_role.USERNAME}}</td>\n                <td>{{user_role.ROLE_NAME}}</td>\n                <td *ngIf=\"user_role.ACTIVE_FLAG === 'Y'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly checked> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly> Inactive<br>\n                </td>\n                <td *ngIf=\"user_role.ACTIVE_FLAG === 'N'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly checked>Inactive<br>\n                </td>\n                <td>\n                    <a class =\"a-inside edit\" [routerLink] = \"['/UserRoleReactivate', {userid: user_role.USER_ID, roleid: user_role.ROLE_ID}]\"> Reactivate </a>\n                    <a class =\"a-inside delete\" [routerLink] = \"['/UserRoleDelete', {userid: user_role.USER_ID, roleid: user_role.ROLE_ID}]\"> Delete </a>\n                </td>\n            </tr>\n        </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [user_roles_services_1.UserRoleService])
                ], UserRoles);
                return UserRoles;
            })();
            exports_1("UserRoles", UserRoles);
        }
    }
});
//# sourceMappingURL=user_role.component.js.map