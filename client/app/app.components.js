System.register(['angular2/core', 'angular2/router', 'angular2/common', './roles/components/role.component', './users/components/user.component', './user_roles/components/user_role.component', './contacts/components/contacts.component', "./login/login.component", './utility/LoggedInOutlets', "./utility/localstorage/LocalStorage", "./users/services/users.services", "./user_roles/services/user_roles.services", "./roles/services/roles.services", "./contacts/services/contacts.services"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, common_2, role_component_1, user_component_1, user_role_component_1, contacts_component_1, login_component_1, LoggedInOutlets_1, LocalStorage_1, users_services_1, user_roles_services_1, roles_services_1, contacts_services_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (role_component_1_1) {
                role_component_1 = role_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (user_role_component_1_1) {
                user_role_component_1 = user_role_component_1_1;
            },
            function (contacts_component_1_1) {
                contacts_component_1 = contacts_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (LoggedInOutlets_1_1) {
                LoggedInOutlets_1 = LoggedInOutlets_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            },
            function (users_services_1_1) {
                users_services_1 = users_services_1_1;
            },
            function (user_roles_services_1_1) {
                user_roles_services_1 = user_roles_services_1_1;
            },
            function (roles_services_1_1) {
                roles_services_1 = roles_services_1_1;
            },
            function (contacts_services_1_1) {
                contacts_services_1 = contacts_services_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_localStorage) {
                    this._localStorage = _localStorage;
                    //TODO make the menu stick on page refresh(not sure how to accomplish this)
                    //public loggedIn: Array<string> = new Array<string>();
                    this.localStorage = new Array();
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //This stores the localstorage object after it's been created(this will be used to verify what menu item the user can see)
                    this._localStorage.localStorage$.subscribe(function (login_trigger) {
                        _this.localStorage = login_trigger;
                        console.log('Logged in Noobs!!');
                    });
                    //This sees if the person is logged in or not, if they are show the menu!
                    this._localStorage.loggedIn$.subscribe(function (to_be_or_not_to_be) {
                        _this.loggedInValue = to_be_or_not_to_be.pop();
                        console.log(_this.loggedInValue);
                    });
                    this._localStorage.load();
                };
                //This will trigger the logout event which takes away localstorage and makes LoggedInValue = False;
                AppComponent.prototype.logout = function () {
                    localStorage.removeItem('jwt');
                    this._localStorage.logout('false');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [common_1.FORM_PROVIDERS, users_services_1.UserService, roles_services_1.RoleService, user_roles_services_1.UserRoleService, contacts_services_1.ContactService],
                        inputs: ['loggedIn'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_2.CORE_DIRECTIVES, LoggedInOutlets_1.LoggedInRouterOutlet],
                        template: "<body>\n                <div *ngIf=\"loggedInValue=== 'true'\">\n                    <nav class=\"navbar navbar-inverse navbar-top\" role=\"navigation\">\n                        <div class=\"container\">\n                            <div class=\"navbar-header\">\n                                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                                    <span class=\"sr-only\"> Toggle Navigation </span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                </button>\n                            </div>\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                                    <ul class = \"nav navbar-nav\">\n                                        <li>\n                                            <a [routerLink] = \"['/RolesList']\">Roles</a>\n                                        </li>\n                                        <li>\n                                            <a [routerLink] = \"['/UserList']\">Users</a>\n                                        </li>\n                                        <li>\n                                            <a [routerLink] = \"['/UserRolesList']\">User Roles</a>\n                                        </li>\n                                        <li>\n                                            <a [routerLink] = \"['/ContactsList']\">Contacts</a>\n                                        </li>\n                                    </ul>\n                                    <ul class=\"nav navbar-nav navbar-right\">\n                                    <li>\n                                        <a [routerLink] = \"['/Login']\" (click)=\"logout()\">Logout</a>\n                                    </li>\n                                    </ul>\n                                </div>\n                         </div>\n                    </nav>\n                </div>\n                    <div class=\"container\">\n                        <router-outlet></router-outlet>\n                    </div>\n                  </body>"
                    }),
                    router_1.RouteConfig([
                        //TODO Change UserList to User(s)List without the parenthesis everywhere in the app.
                        { path: '/login', name: 'Login', component: login_component_1.Login },
                        { path: '/user_list', name: 'UserList', component: user_component_1.Users },
                        { path: '/user_add', name: 'UserAdd', component: user_component_1.UserAdd },
                        { path: '/user_edit/:id', name: 'UserEdit', component: user_component_1.UserEdit },
                        { path: '/user_delete/:id', name: 'UserDelete', component: user_component_1.UserDelete },
                        { path: '/user_role_list', name: 'UserRolesList', component: user_role_component_1.UserRoles },
                        { path: '/user_role/add', name: 'UserRoleAdd', component: user_role_component_1.UserRoleAdd },
                        { path: '/user_role/reactivate/:userid/:roleid', name: 'UserRoleReactivate', component: user_role_component_1.UserRoleReactivate },
                        { path: '/user_role/delete/:userid/:roleid', name: 'UserRoleDelete', component: user_role_component_1.UserRoleDelete },
                        { path: '/role_list', name: 'RolesList', component: role_component_1.Roles },
                        { path: '/role_edit/:id', name: 'RoleEdit', component: role_component_1.RoleEdit },
                        { path: '/role_add', name: 'RoleAdd', component: role_component_1.RoleAdd },
                        { path: '/role_delete/:id', name: 'RoleDelete', component: role_component_1.RoleDelete },
                        { path: '/contacts', name: 'ContactsList', component: contacts_component_1.Contacts },
                        { path: '/contact_edit/:id', name: 'ContactEdit', component: contacts_component_1.ContactEdit }
                    ]), 
                    __metadata('design:paramtypes', [LocalStorage_1.LocalStorage])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.components.js.map