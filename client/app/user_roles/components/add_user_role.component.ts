import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { UserRoleService } from '../services/user_roles.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';
import {Validators, FormBuilder, Control} from 'angular2/common';
import { OnInit } from 'angular2/core';


@Component({
    selector: 'add_user_role',
    providers: [UserRoleService],
    directives: [CORE_DIRECTIVES],
    template: `
    <form [ngFormModel]="form" (ngSubmit)="onSubmit()">
        <p>
            <label>User Name:</label>
            <select id="user-select" name="user_select" ngControl="USER_ID">
                <template ngFor #user [ngForOf]="users_and_roles">
                    <option *ngIf="user.TYPE === 'U'" [value]="user.USER_ID">{{user.VALUE}}</option>
                </template>
            </select>
        </p>
        <p>
            <label>Role Name:</label>
            <select id="role-select" name="role_select" ngControl="ROLE_ID">
                <template ngFor #user [ngForOf]="users_and_roles">
                    <option *ngIf="user.TYPE === 'R'" [value]="user.USER_ID">{{user.VALUE}}</option>
                </template>
            </select>
        </p>
        <p>
            <button type="submit" [disabled]="!form.valid">Submit</button>
        </p>
    </form>`
})

export class UserRoleAdd implements OnInit {

    form: any;
    USER_ID: Control = new Control("", Validators.required);
    ROLE_ID: Control = new Control("", Validators.required);
    jwt: any;

    users_and_roles: Array<any>;

    constructor(fb: FormBuilder, private _userRoleService: UserRoleService, private router: Router){
        this.jwt = localStorage.getItem('jwt');
        this.form = fb.group({
            "USER_ID": this.USER_ID,
            "ROLE_ID": this.ROLE_ID    //["", Validators.required]
        });

        // observe the full form as a whole
        // apply complex cross field validations
        // pre-save the form in the background
        // easy implementation of requirements like undo/redo of valid states
        this.form.valueChanges
            .map((value) => {
                value.USER_ID = value.USER_ID;//.toUpperCase() can be used here to change the values to uppercase on form submittal(pretty neat!)
                return value;
            })
            .filter((value) => this.form.valid)
            .subscribe((value) => {

            console.log("Model Driven Form valid value: vm = " + JSON.stringify(value));
        });

        // observe only one field
        this.form.controls.USER_ID.valueChanges.subscribe( value => {
                console.log('User name changed = ' + value);
            });

    };

    ngOnInit(){
        this.getUsersAndRoles(this.jwt);
    };

    getUsersAndRoles(jwt){
        this._userRoleService.getUsersAndRoles(jwt).subscribe(user_roles =>  this.users_and_roles = user_roles);
    };


    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form._value);
        this._userRoleService.saveNewUserRole(this.jwt, this.form._value).subscribe();
        this.router.navigate(['UserRolesList']);
    };

}