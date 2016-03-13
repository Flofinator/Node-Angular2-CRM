System.register(['angular2/core', '../services/user_roles.services', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_roles_services_1, router_1;
    var UserRoleReactivate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_roles_services_1_1) {
                user_roles_services_1 = user_roles_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserRoleReactivate = (function () {
                function UserRoleReactivate(_userRoleService, router, params) {
                    this._userRoleService = _userRoleService;
                    this.router = router;
                    this.user_id = params.get('userid');
                    this.role_id = params.get('roleid');
                    this.jwt = localStorage.getItem('jwt');
                }
                UserRoleReactivate.prototype.ngOnInit = function () {
                    this.reactivateRole(this.jwt, this.user_id, this.role_id);
                    this.router.navigate(['UserRolesList']);
                };
                ;
                UserRoleReactivate.prototype.reactivateRole = function (jwt, user_id, role_id) {
                    this._userRoleService.reactivateUserRole(jwt, user_id, role_id).subscribe();
                };
                UserRoleReactivate = __decorate([
                    core_1.Component({
                        selector: 'reactivate_user_role',
                        providers: [user_roles_services_1.UserRoleService],
                        template: "<h1> Reactivate this User </h1>"
                    }), 
                    __metadata('design:paramtypes', [user_roles_services_1.UserRoleService, router_1.Router, router_1.RouteParams])
                ], UserRoleReactivate);
                return UserRoleReactivate;
            })();
            exports_1("UserRoleReactivate", UserRoleReactivate);
        }
    }
});
//# sourceMappingURL=reactivate_user_role.component.js.map