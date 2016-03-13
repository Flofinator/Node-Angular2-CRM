import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {UserService} from '../services/users.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';
import {Validators, FormBuilder, Control} from 'angular2/common';

@Component({
  selector: 'edit_user',
  providers: [UserService],
  directives: [CORE_DIRECTIVES],
  template: `
  <div class="page-data">
	<form #f="ngForm" (ngSubmit)="onSubmit()">

		<table cellpadding="11">
            <tr>
                <div class="label"> User Name </div>
                    <input type="text" [value]="user?.USERNAME" [(ngModel)]="data.USERNAME">
                <br>
                <br>
                <div class="label"> Password</div>
                    <input type="text" [value]="user?.PASSWORD" [(ngModel)]="data.PASSWORD">

                <br>
                <br>
                <div class="label"> Active Flag</div>
                <label *ngFor="#item of radioOptions">
                    <input type="radio" name="ACTIVE_FLAG" (click)="changeActiveValue(item)"
                     [checked]="item === active_flags" [value]="active_flags" [(ngModel)]="data.ACTIVE_FLAG">
                    {{item}}
                </label>
                <br>
                <br>
            </tr>
        <p>
            <button type="submit">Submit</button>
        </p>
		</table>
	</form>
  </div>`
})
export class UserEdit implements OnInit{

    radioOptions = 'Y N'.split(' ');
    jwt: any;
    user: any;
    active_flags: string;
    params: any;
    data: Object = {};
    data.USERNAME: string;
    data.PASSWORD: string;
    data.ACTIVE_FLAG: string;



    constructor(private _userService: UserService, private router: Router, params:RouteParams){
        this.params = params.get('id');
        this.jwt = localStorage.getItem('jwt');
    };

    ngOnInit(){
        this.getEditUser(this.jwt, this.params);
    };

    getEditUser(jwt, id){
        this._userService.getEditUser(jwt, id).subscribe(user_edit =>
            {this.user = user_edit.data[0],
             this.active_flags = user_edit.data[0].ACTIVE_FLAG,
             this.data.USERNAME = user_edit.data[0].USERNAME,
             this.data.PASSWORD = user_edit.data[0].PASSWORD,
             this.data.ACTIVE_FLAG = user_edit.data[0].ACTIVE_FLAG},
            error => {
                console.log('error logged:');
                console.log(error);
            }
        );
    };

    changeActiveValue(item){
        this.active_flags = item;
        this.data.ACTIVE_FLAG = item;
    }

    onSubmit() {
        this._userService.saveEditUser(this.jwt, this.params, this.data).subscribe();
        this.router.navigate(['UserList']);
    }


}
