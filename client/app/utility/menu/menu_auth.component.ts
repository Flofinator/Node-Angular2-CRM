import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES, RouterLink, RouteConfig } from 'angular2/router';
import { AdminMenuService } from './menu.services';

import {Roles} from '../../roles/components/role.component';
import {Users} from '../../users/components/user.component';
import {UserRoles} from '../../user_roles/components/user_role.component';

@Component({
    selector: 'admin_menu',
    providers: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, AdminMenuService],
    template: `
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
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a [routerLink] = "['/Login']" (click)="logout()">Logout</a>
                        </li>
                        </ul>
                    </div>
             </div>
        </nav>
    `
})

export class AdminMenu{

    jwt: any;

    constructor(_adminMenuService: AdminMenuService){
        this.jwt = localStorage.getItem('jwt');
    }


}