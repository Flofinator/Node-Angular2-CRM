import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { UserService } from '../services/users.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';
import {Validators, FormBuilder, Control} from 'angular2/common';


@Component({
    selector: 'add_user',
    template: `
    <form [ngFormModel]="form" (ngSubmit)="onSubmit()">
        <p>
            <label>User Name:</label>
            <input type="text" ngControl="USERNAME">
        </p>
        <p>
            <label>Password:</label>
            <input type="text" ngControl="PASSWORD">
        </p>
        <p>
            <button type="submit" [disabled]="!form.valid">Submit</button>
        </p>
    </form>`
})

export class UserAdd {

    form: any;
    jwt: any;
    USERNAME: Control = new Control("", Validators.required);
    PASSWORD: Control = new Control("", Validators.required);

    constructor(fb: FormBuilder, private _userService: UserService, private router: Router){
        this.jwt = localStorage.getItem('jwt');
        this.form = fb.group({
            "USERNAME": this.USERNAME,
            "PASSWORD": this.PASSWORD    //["", Validators.required]
        });

        // observe the full form as a whole
        // apply complex cross field validations
        // pre-save the form in the background
        // easy implementation of requirements like undo/redo of valid states
        this.form.valueChanges
            .map((value) => {
                value.USERNAME = value.USERNAME;//.toUpperCase() can be used here to change the values to uppercase on form submittal(pretty neat!)
                return value;
            })
            .filter((value) => this.form.valid)
            .subscribe((value) => {

            console.log("Model Driven Form valid value: vm = " + JSON.stringify(value));
        });

        // observe only one field
        this.form.controls.USERNAME.valueChanges.subscribe( value => {
                console.log('User name changed = ' + value);
            });

    }


    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form._value);
        this._userService.saveNewUser(this.jwt, this.form._value).subscribe();
        this.router.navigate(['UserList']);
    }

}