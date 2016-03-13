import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ContactService } from '../services/contacts.services';
import { OnInit } from 'angular2/core';

//All the User Routes imported here
/*
import {UserDelete} from './delete_user.component'
import {UserAdd} from './add_user.component';
import {UserEdit} from './edit_user.component';
export {UserAdd, UserEdit, UserDelete};*/

import {ContactEdit} from './edit_contact.component';
export{ContactEdit}

@Component({
  selector: 'contact-list',
  providers: [ContactService],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  template: `
    <!--<div class="data-btn">
       <a [routerLink] = "['/UserAdd']"><button> Add </button></a>
    </div>-->
    <br>
    <br>
      <div class ="data-table">
        <table>
            <tr>
                <th style="width:35%">First Name</th>
                <th style="width:35%">Last Name</th>
                <th style="width:15%">Active</th>
                <th style="width:120px">Action</th>
            </tr>
            <tr *ngFor="#contact of contacts_list">
                <td>{{contact.FIRST_NAME}}</td>
                <td>{{contact.LAST_NAME}}</td>
                <!--<td *ngIf="user.ACTIVE_FLAG === 'Y'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly checked> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly> Inactive<br>
                </td>
                <td *ngIf="user.ACTIVE_FLAG === 'N'">
                    <input type="checkbox" name="active_record" value="active" disabled readonly> Active<br>
                    <input type="checkbox" name="inactive_record" value="inactive" disabled readonly checked>Inactive<br>
                </td>-->
                <td>
                </td>
                <td>
                    <a class ="a-inside edit" [routerLink] = "['/ContactEdit', {id: contact.ID}]"> Edit </a>
                    <!-- <a class ="a-inside delete" [routerLink] = "['/UserDelete', {id: contact.ID}]"> Delete </a>-->
                </td>
            </tr>
        </table>
      </div>
    `
})

export class Contacts implements OnInit{

    contacts_list: Array<any>;
    jwt: any;


    constructor(private _contactService: ContactService){
        this.jwt = localStorage.getItem('jwt');
    };

    ngOnInit(){
        this.getUsers(this.jwt);
    };

    getUsers(jwt){
        this._contactService.getContacts(jwt).subscribe(contacts =>  this.contacts_list = contacts);
    };


}