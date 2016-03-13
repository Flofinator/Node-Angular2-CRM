import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { UserRoleService } from '../services/user_roles.services';
import { OnInit } from 'angular2/core';


//All the User Routes imported here
/*
import {UserDelete} from './delete_user.component'
import {UserAdd} from './add_user.component';
import {UserEdit} from './edit_user.component';
export {UserAdd, UserEdit, UserDelete};*/
import {UserRoleReactivate} from './reactivate_user_role.component';
import {UserRoleDelete} from './delete_user_role.component';
import {UserRoleAdd} from './add_user_role.component';
export {UserRoleAdd, UserRoleDelete, UserRoleReactivate};

@Component({
  selector: 'user-list',
  providers: [UserRoleService],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  template: `
    <div class="data-btn">
       <a [routerLink] = "['/UserRoleAdd']"><button> Add </button></a>
    </div>
    <br>
    <br>
      <div class ="data-table">
        <table>
            <tr>
                <th style="width:35%">User Name</th>
                <th style="width:35%">Role Name</th>
                <th style="width:15%">Active</th>
                <th style="width:120px">Action</th>
            </tr>
            <tr *ngFor="#user_role of user_role_list">
                <td>{{user_role.USERNAME}}</td>
                <td>{{user_role.ROLE_NAME}}</td>
                <td *ngIf="user_role.ACTIVE_FLAG === 'Y'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly checked> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly> Inactive<br>
                </td>
                <td *ngIf="user_role.ACTIVE_FLAG === 'N'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly checked>Inactive<br>
                </td>
                <td>
                    <a class ="a-inside edit" [routerLink] = "['/UserRoleReactivate', {userid: user_role.USER_ID, roleid: user_role.ROLE_ID}]"> Reactivate </a>
                    <a class ="a-inside delete" [routerLink] = "['/UserRoleDelete', {userid: user_role.USER_ID, roleid: user_role.ROLE_ID}]"> Delete </a>
                </td>
            </tr>
        </table>
      </div>
    `
})


export class UserRoles implements OnInit{

    user_role_list: Array<any>;
    jwt: any;

    constructor(private _userRoleService: UserRoleService){
        this.jwt = localStorage.getItem('jwt');
    };

    ngOnInit(){
        this.getUserRoles(this.jwt);
    };

    getUserRoles(jwt){
        this._userRoleService.getUserRoles(jwt).subscribe(user_roles =>  this.user_role_list = user_roles);
    };


}
