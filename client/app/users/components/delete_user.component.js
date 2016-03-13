System.register(['angular2/core', '../services/users.services', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, users_services_1, router_1;
    var UserDelete;
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
            }],
        execute: function() {
            UserDelete = (function () {
                function UserDelete(_userService, router, params) {
                    this._userService = _userService;
                    this.router = router;
                    this.param = params.get('id');
                    this.jwt = localStorage.getItem('jwt');
                }
                UserDelete.prototype.ngOnInit = function () {
                    this.deleteRole(this.jwt, this.param);
                    this.router.navigate(['UserList']);
                };
                ;
                UserDelete.prototype.deleteRole = function (jwt, id) {
                    this._userService.deleteUser(jwt, id).subscribe();
                };
                UserDelete = __decorate([
                    core_1.Component({
                        selector: 'delete_user',
                        template: "<h1> Deleted this User </h1>"
                    }), 
                    __metadata('design:paramtypes', [users_services_1.UserService, router_1.Router, router_1.RouteParams])
                ], UserDelete);
                return UserDelete;
            })();
            exports_1("UserDelete", UserDelete);
        }
    }
});
//# sourceMappingURL=delete_user.component.js.map