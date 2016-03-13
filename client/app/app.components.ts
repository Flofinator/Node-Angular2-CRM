import {Component, OnChanges} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {FORM_PROVIDERS, Control} from 'angular2/common';
import {OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {Roles, RoleAdd, RoleEdit, RoleDelete} from './roles/components/role.component';
import {Users, UserAdd, UserEdit, UserDelete} from './users/components/user.component';
import {UserRoles, UserRoleAdd, UserRoleDelete, UserRoleReactivate} from './user_roles/components/user_role.component';
import {Contacts, ContactEdit} from './contacts/components/contacts.component';
import { Http, Headers } from 'angular2/http';
import {Login} from "./login/login.component";
import {LoggedInRouterOutlet} from './utility/LoggedInOutlets';
import {LoginService} from "./login/services/login.services";
import {LocalStorage} from "./utility/localstorage/LocalStorage";
import {Observable} from 'rxjs/Observable';
import {SimpleChange} from "angular2/core";
import {UserService} from "./users/services/users.services";
import {UserRoleService} from "./user_roles/services/user_roles.services";
import {RoleService} from "./roles/services/roles.services";
import {ContactService} from "./contacts/services/contacts.services";

@Component({
    selector: 'my-app',
    providers: [FORM_PROVIDERS, UserService, RoleService, UserRoleService, ContactService],
    inputs: ['loggedIn'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, LoggedInRouterOutlet],
    template: `<body>
                <div *ngIf="loggedInValue=== 'true'">
                    <nav class="navbar navbar-inverse navbar-top" role="navigation">
                        <div class="container">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span class="sr-only"> Toggle Navigation </span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul class = "nav navbar-nav">
                                        <li>
                                            <a [routerLink] = "['/RolesList']">Roles</a>
                                        </li>
                                        <li>
                                            <a [routerLink] = "['/UserList']">Users</a>
                                        </li>
                                        <li>
                                            <a [routerLink] = "['/UserRolesList']">User Roles</a>
                                        </li>
                                        <li>
                                            <a [routerLink] = "['/ContactsList']">Contacts</a>
                                        </li>
                                    </ul>
                                    <ul class="nav navbar-nav navbar-right">
                                    <li>
                                        <a [routerLink] = "['/Login']" (click)="logout()">Logout</a>
                                    </li>
                                    </ul>
                                </div>
                         </div>
                    </nav>
                </div>
                    <div class="container">
                        <router-outlet></router-outlet>
                    </div>
                  </body>`
})

//TODO build dynamic links
@RouteConfig([
    //TODO Change UserList to User(s)List without the parenthesis everywhere in the app.
    {path: '/login', name: 'Login', component: Login},
    {path: '/user_list', name: 'UserList', component: Users},
    {path: '/user_add', name: 'UserAdd', component: UserAdd},
    {path: '/user_edit/:id', name: 'UserEdit', component: UserEdit},
    {path: '/user_delete/:id', name: 'UserDelete', component: UserDelete},
    {path: '/user_role_list', name: 'UserRolesList', component: UserRoles},
    {path: '/user_role/add', name: 'UserRoleAdd', component: UserRoleAdd},
    {path: '/user_role/reactivate/:userid/:roleid', name: 'UserRoleReactivate', component: UserRoleReactivate},
    {path: '/user_role/delete/:userid/:roleid', name: 'UserRoleDelete', component: UserRoleDelete},
    {path: '/role_list', name: 'RolesList', component: Roles},
    {path: '/role_edit/:id', name: 'RoleEdit', component: RoleEdit},
    {path: '/role_add', name: 'RoleAdd', component: RoleAdd},
    {path: '/role_delete/:id', name: 'RoleDelete', component: RoleDelete},
    {path: '/contacts', name: 'ContactsList', component: Contacts},
    {path: '/contact_edit/:id', name: 'ContactEdit', component: ContactEdit}
])

export class AppComponent implements OnInit, OnChanges{

    //TODO make the menu stick on page refresh(not sure how to accomplish this)
    //public loggedIn: Array<string> = new Array<string>();
    public localStorage: Array<string> = new Array<string>();
    public loggedInValue: string;

    constructor(private _localStorage: LocalStorage){
    }


    ngOnInit(){
        //This stores the localstorage object after it's been created(this will be used to verify what menu item the user can see)
        this._localStorage.localStorage$.subscribe(login_trigger => {
            this.localStorage = login_trigger;
            console.log('Logged in Noobs!!');
        });

        //This sees if the person is logged in or not, if they are show the menu!
        this._localStorage.loggedIn$.subscribe(to_be_or_not_to_be => {
            this.loggedInValue = to_be_or_not_to_be.pop();
            console.log(this.loggedInValue);
        });

        this._localStorage.load();
    }

    //This will trigger the logout event which takes away localstorage and makes LoggedInValue = False;
    logout(){
        localStorage.removeItem('jwt');
        this._localStorage.logout('false');
    }

}

