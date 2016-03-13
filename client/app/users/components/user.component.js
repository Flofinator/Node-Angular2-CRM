System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/users.services', './delete_user.component', './add_user.component', './edit_user.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, users_services_1, delete_user_component_1, add_user_component_1, edit_user_component_1;
    var Users;
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
            function (users_services_1_1) {
                users_services_1 = users_services_1_1;
            },
            function (delete_user_component_1_1) {
                delete_user_component_1 = delete_user_component_1_1;
            },
            function (add_user_component_1_1) {
                add_user_component_1 = add_user_component_1_1;
            },
            function (edit_user_component_1_1) {
                edit_user_component_1 = edit_user_component_1_1;
            }],
        execute: function() {
            exports_1("UserAdd", add_user_component_1.UserAdd);
            exports_1("UserEdit", edit_user_component_1.UserEdit);
            exports_1("UserDelete", delete_user_component_1.UserDelete);
            Users = (function () {
                function Users(_userService) {
                    this._userService = _userService;
                    this.jwt = localStorage.getItem('jwt');
                }
                ;
                Users.prototype.ngOnInit = function () {
                    this.getUsers(this.jwt);
                };
                ;
                Users.prototype.getUsers = function (jwt) {
                    var _this = this;
                    this._userService.getUsers(jwt).subscribe(function (users) { return _this.user_list = users; });
                };
                ;
                Users = __decorate([
                    core_1.Component({
                        selector: 'user-list',
                        providers: [users_services_1.UserService],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div class=\"data-btn\">\n       <a [routerLink] = \"['/UserAdd']\"><button> Add </button></a>\n    </div>\n    <br>\n    <br>\n      <div class =\"data-table\">\n        <table>\n            <tr>\n                <th style=\"width:35%\">Users</th>\n                <th style=\"width:35%\">Password</th>\n                <th style=\"width:15%\">Active</th>\n                <th style=\"width:120px\">Action</th>\n            </tr>\n            <tr *ngFor=\"#user of user_list\">\n                <td>{{user.USERNAME}}</td>\n                <td>{{user.PASSWORD}}</td>\n                <td *ngIf=\"user.ACTIVE_FLAG === 'Y'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly checked> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly> Inactive<br>\n                </td>\n                <td *ngIf=\"user.ACTIVE_FLAG === 'N'\">\n                    <input type=\"checkbox\" name=\"active_record\" value=\"active\" disabled readonly> Active<br>\n                    <input type=\"checkbox\" name=\"inactive_record\" value=\"inactive\" disabled readonly checked>Inactive<br>\n                </td>\n                <td>\n                    <a class =\"a-inside edit\" [routerLink] = \"['/UserEdit', {id: user.ID}]\"> Edit </a>\n                    <a class =\"a-inside delete\" [routerLink] = \"['/UserDelete', {id: user.ID}]\"> Delete </a>\n                </td>\n            </tr>\n        </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [users_services_1.UserService])
                ], Users);
                return Users;
            })();
            exports_1("Users", Users);
        }
    }
});
//# sourceMappingURL=user.component.js.map