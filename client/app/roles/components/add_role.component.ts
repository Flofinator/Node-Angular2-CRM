import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {RoleService} from '../services/roles.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';
import {Validators, FormBuilder, Control} from 'angular2/common';


@Component({
    selector: 'add_role',
    template: `
    <form [ngFormModel]="form" (ngSubmit)="onSubmit()">
        <p>
            <label>Role Name:</label>
            <input type="text" ngControl="ROLE_NAME">
        </p>
        <p>
            <label>Description:</label>
            <input type="text" ngControl="DESCRIPTION">
        </p>
        <p>
            <button type="submit" [disabled]="!form.valid">Submit</button>
        </p>
    </form>`
})

export class RoleAdd {

    form: any;
    ROLE_NAME: Control = new Control("", Validators.required);
    jwt: any;

    constructor(fb: FormBuilder, private _roleService: RoleService, private router: Router){
        this.jwt = localStorage.getItem('jwt');
        this.form = fb.group({
            "ROLE_NAME": this.ROLE_NAME,
            "DESCRIPTION":["", Validators.required]
        });

        // observe the full form as a whole
        // apply complex cross field validations
        // pre-save the form in the background
        // easy implementation of requirements like undo/redo of valid states
        this.form.valueChanges
            .map((value) => {
                value.ROLE_NAME = value.ROLE_NAME;//.toUpperCase() can be used here to change the values to uppercase on form submittal(pretty neat!)
                return value;
            })
            .filter((value) => this.form.valid)
            .subscribe((value) => {

            console.log("Model Driven Form valid value: vm = " + JSON.stringify(value));
        });

        // observe only one field
        this.form.controls.ROLE_NAME.valueChanges.subscribe( value => {
                console.log('role name changed = ' + value);
            });

    }


    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form._value);
        this._roleService.saveNewRole(this.jwt, this.form._value).subscribe();
        this.router.navigate(['RolesList']);
    }

    /*constructor(private _roleService: RoleService){

    }

    addRole(){
        this._roleService.AddRole(person_data).subscribe();
    }*/
}