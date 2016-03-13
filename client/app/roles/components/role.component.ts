import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { RoleService } from '../services/roles.services';
import { OnInit } from 'angular2/core';
import {LocalStorage} from "../../utility/localstorage/LocalStorage";

//All the Role Routes imported here
import {RoleEdit} from './edit_role.component';
import {RoleAdd} from './add_role.component';
import {RoleDelete} from './delete_role.component';
export {RoleEdit, RoleAdd, RoleDelete};

@Component({
  selector: 'role-list',
  providers: [RoleService],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  template: `
    <div class="data-btn">
       <a [routerLink] = "['/RoleAdd']"><button> Add </button></a>
    </div>
    <br>
    <br>
      <div class ="data-table">
        <table>
            <tr>
                <th style="width:35%">Role</th>
                <th style="width:35%">Description</th>
                <th style="width:15%">Active</th>
                <th style="width:120px">Action</th>
            </tr>
            <tr *ngFor="#role of role_list">
                <td>{{role.ROLE_NAME}}</td>
                <td>{{role.DESCRIPTION}}</td>
                <td *ngIf="role.ACTIVE_FLAG === 'Y'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly checked> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly> Inactive<br>
                </td>
                <td *ngIf="role.ACTIVE_FLAG === 'N'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly checked>Inactive<br>
                </td>
                <td>
                    <a class ="a-inside edit" [routerLink] = "['/RoleEdit', {id: role.ID}]"> Edit </a>
                    <a class ="a-inside delete" [routerLink] = "['/RoleDelete', {id: role.ID}]"> Delete </a>
                    <!--Todo need to add a delete button here!! -->
                </td>
            </tr>
        </table>
      </div>
    `
})

export class Roles implements OnInit{

    role_list: Array<any>;
    jwt: any;

    constructor(private _roleService: RoleService){
        this.jwt = localStorage.getItem('jwt');
    };

    ngOnInit(){
        this.getRoles(this.jwt);
    };

    getRoles(jwt){
        this._roleService.getRoles(jwt).subscribe(roles =>  this.role_list = roles);
    };





}
