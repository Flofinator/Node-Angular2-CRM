System.register(['angular2/core', 'angular2/common', 'angular2/router', './menu.services'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, menu_services_1;
    var AdminMenu;
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
            function (menu_services_1_1) {
                menu_services_1 = menu_services_1_1;
            }],
        execute: function() {
            AdminMenu = (function () {
                function AdminMenu(_adminMenuService) {
                    this.jwt = localStorage.getItem('jwt');
                }
                AdminMenu = __decorate([
                    core_1.Component({
                        selector: 'admin_menu',
                        providers: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, menu_services_1.AdminMenuService],
                        template: "\n        <nav class=\"navbar navbar-inverse navbar-top\" role=\"navigation\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                        <span class=\"sr-only\"> Toggle Navigation </span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                </div>\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        <ul class = \"nav navbar-nav\">\n                            <li>\n                                <a [routerLink] = \"['/RolesList']\">Roles</a>\n                            </li>\n                            <li>\n                                <a [routerLink] = \"['/UserList']\">Users</a>\n                            </li>\n                            <li>\n                                <a [routerLink] = \"['/UserRolesList']\">User Roles</a>\n                            </li>\n                        </ul>\n                        <ul class=\"nav navbar-nav navbar-right\">\n                        <li>\n                            <a [routerLink] = \"['/Login']\" (click)=\"logout()\">Logout</a>\n                        </li>\n                        </ul>\n                    </div>\n             </div>\n        </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [menu_services_1.AdminMenuService])
                ], AdminMenu);
                return AdminMenu;
            })();
            exports_1("AdminMenu", AdminMenu);
        }
    }
});
//# sourceMappingURL=menu_auth.component.js.map