System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/roles.services', './edit_role.component', './add_role.component', './delete_role.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, roles_services_1, edit_role_component_1, add_role_component_1, delete_role_component_1;
    var Roles;
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
            function (roles_services_1_1) {
                roles_services_1 = roles_services_1_1;
            },
            function (edit_role_component_1_1) {
                edit_role_component_1 = edit_role_component_1_1;
            },
            function (add_role_component_1_1) {
                add_role_component_1 = add_role_component_1_1;
            },
            function (delete_role_component_1_1) {
                delete_role_component_1 = delete_role_component_1_1;
            }],
        execute: function() {
            exports_1("RoleEdit", edit_role_component_1.RoleEdit);
            exports_1("RoleAdd", add_role_component_1.RoleAdd);
            exports_1("RoleDelete", delete_role_component_1.RoleDelete);
            Roles = (function () {
                function Roles(_roleService) {
                    this._roleService = _roleService;
                    this.jwt = localStorage.getItem('jwt');
                }
                ;
                Roles.prototype.ngOnInit = function () {
                    this.getRoles(this.jwt);
                };
                ;
                Roles.prototype.getRoles = function (jwt) {
                    var _this = this;
                    this._roleService.getRoles(jwt).subscribe(function (roles) { return _this.role_list = roles; });
                };
                ;
                Roles = __decorate([
                    core_1.Component({
                        selector: 'role-list',
                        providers: [roles_services_1.RoleService],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div class=\"data-btn\">\n       <a [routerLink] = \"['/RoleAdd']\"><button> Add </button></a>\n    </div>\n    <br>\n    <br>\n      <div class =\"data-table\">\n        <table>\n            <tr>\n                <th style=\"width:35%\">Role</th>\n                <th style=\"width:35%\">Description</th>\n                <th style=\"width:15%\">Active</th>\n                <th style=\"width:120px\">Action</th>\n            </tr>\n            <tr *ngFor=\"#role of role_list\">\n                <td>{{role.ROLE_NAME}}</td>\n                <td>{{role.DESCRIPTION}}</td>\n                <td *ngIf=\"role.ACTIVE_FLAG === 'Y'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly checked> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly> Inactive<br>\n                </td>\n                <td *ngIf=\"role.ACTIVE_FLAG === 'N'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly checked>Inactive<br>\n                </td>\n                <td>\n                    <a class =\"a-inside edit\" [routerLink] = \"['/RoleEdit', {id: role.ID}]\"> Edit </a>\n                    <a class =\"a-inside delete\" [routerLink] = \"['/RoleDelete', {id: role.ID}]\"> Delete </a>\n                    <!--Todo need to add a delete button here!! -->\n                </td>\n            </tr>\n        </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [roles_services_1.RoleService])
                ], Roles);
                return Roles;
            })();
            exports_1("Roles", Roles);
        }
    }
});
//# sourceMappingURL=role.component.js.map