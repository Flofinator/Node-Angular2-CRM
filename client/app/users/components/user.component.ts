import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { UserService } from '../services/users.services';
import { OnInit } from 'angular2/core';

//All the User Routes imported here
import {UserDelete} from './delete_user.component'
import {UserAdd} from './add_user.component';
import {UserEdit} from './edit_user.component';
export {UserAdd, UserEdit, UserDelete};

@Component({
  selector: 'user-list',
  providers: [UserService],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  template: `
    <div class="data-btn">
       <a [routerLink] = "['/UserAdd']"><button> Add </button></a>
    </div>
    <br>
    <br>
      <div class ="data-table">
        <table>
            <tr>
                <th style="width:35%">Users</th>
                <th style="width:35%">Password</th>
                <th style="width:15%">Active</th>
                <th style="width:120px">Action</th>
            </tr>
            <tr *ngFor="#user of user_list">
                <td>{{user.USERNAME}}</td>
                <td>{{user.PASSWORD}}</td>
                <td *ngIf="user.ACTIVE_FLAG === 'Y'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly checked> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly> Inactive<br>
                </td>
                <td *ngIf="user.ACTIVE_FLAG === 'N'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly checked>Inactive<br>
                </td>
                <td>
                    <a class ="a-inside edit" [routerLink] = "['/UserEdit', {id: user.ID}]"> Edit </a>
                    <a class ="a-inside delete" [routerLink] = "['/UserDelete', {id: user.ID}]"> Delete </a>
                </td>
            </tr>
        </table>
      </div>
    `
})

export class Users implements OnInit{

    user_list: Array<any>;
    jwt: any;



    constructor(private _userService: UserService){
        this.jwt = localStorage.getItem('jwt');
    };


    ngOnInit(){
        this.getUsers(this.jwt);
    };

    getUsers(jwt){
        this._userService.getUsers(jwt).subscribe(users =>  this.user_list = users);
    };


}
