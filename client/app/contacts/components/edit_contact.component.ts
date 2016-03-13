import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {ContactService} from '../services/contacts.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'edit_contact',
    template: `
<div class="page-data">
    <form #f="ngForm" (ngSubmit)="submitContactEditForm()">

		<table cellpadding="11">
            <tr>
                <div class="label"> First Name </div>
                    <input type="text" [value]="contact?.FIRST_NAME" [(ngModel)]="contact_submit.FIRST_NAME">
                <br>
                <br>
                <div class="label"> Last Name</div>
                    <input type="text" [value]="contact?.LAST_NAME" [(ngModel)]="contact_submit.LAST_NAME">

                <br>
                <br>

                <div class="label"> Middle Name </div>
                    <input type="text" [value]="contact?.MIDDLE_NAME" [(ngModel)]="contact_submit.MIDDLE_NAME">
                <br>
                <br>
                <div class="label"> Date of Birth</div>
                    <input type="text" [value]="contact?.DATE_OF_BIRTH" [(ngModel)]="contact_submit.DATE_OF_BIRTH">
                <br>
                <br>
                <div class="label"> Address Line 1</div>
                    <input type="text" [value]="contact?.LINE1" [(ngModel)]="address_submit.LINE1">

                <br>
                <br>
                <div class="label"> Address Line 2 </div>
                    <input type="text" [value]="contact?.LINE2" [(ngModel)]="address_submit.LINE2">
                <br>
                <br>
                <div class="label"> City</div>
                    <input type="text" [value]="contact?.CITY" [(ngModel)]="address_submit.CITY">

                <br>
                <br>
                <div class="label"> County</div>
                    <input type="text" [value]="contact?.COUNTY" [(ngModel)]="address_submit.COUNTY">

                <br>
                <br>

                <div class="label"> State or Province </div>
                    <input type="text" [value]="contact?.STATE_OR_PROVINCE" [(ngModel)]="address_submit.STATE_OR_PROVINCE">
                <br>
                <br>
                <div class="label"> Country</div>
                    <input type="text" [value]="contact?.COUNTRY" [(ngModel)]="address_submit.COUNTRY">

                <br>
                <br>
                <div class="label"> Postal Code</div>
                    <input type="text" [value]="contact?.POSTAL_CODE" [(ngModel)]="address_submit.POSTAL_CODE">

                <br>
                <br>
            </tr>
		</table>
		<input type="submit" name="submit" value="Save">
	</form>	`
})

export class ContactEdit implements OnInit{

    params: any;
    jwt: any;
    contact:any;
    contact_submit: Object = {};
    contact_submit.FIRST_NAME: string;
    contact_submit.LAST_NAME: string;
    contact_submit.MIDDLE_NAME: string;
    contact_submit.DATE_OF_BIRTH: string;

    address_submit: Object = {};
    address_submit.LINE1: string;
    address_submit.LINE2: string;
    address_submit.CITY: string;
    address_submit.COUNTY: string;
    address_submit.STATE_OR_PROVINCE: string;
    address_submit.COUNTRY: string;
    address_submit.POSTAL_CODE: number;

    constructor(private _contactService: ContactService, params:RouteParams, private router: Router){
        this.params = params.get('id');
        this.jwt = localStorage.getItem('jwt');
    }

    ngOnInit(){
        this.getEditContact(this.jwt, this.params);
        console.log(this.contact);
    };

    submitContactEditForm(){
        //this._contactService.saveEditContact(this.jwt, this.params).subscribe();
        //this.router.navigate(['ContactsList']);
        console.log(this.contact_submit);
        console.log(this.address_submit);
    }

    getEditContact(jwt, id){
        this._contactService.getEditContact(jwt, id).subscribe(contact_edit =>
            {this.contact = contact_edit.data[0],
             this.contact_submit.FIRST_NAME = contact_edit.data[0].FIRST_NAME,
             this.contact_submit.LAST_NAME = contact_edit.data[0].LAST_NAME,
             this.contact_submit.MIDDLE_NAME = contact_edit.data[0].MIDDLE_NAME,
             this.contact_submit.DATE_OF_BIRTH = contact_edit.data[0].DATE_OF_BIRTH,
             this.address_submit.LINE1 = contact_edit.data[0].LINE1,
             this.address_submit.LINE2 = contact_edit.data[0].LINE2,
             this.address_submit.CITY = contact_edit.data[0].CITY,
             this.address_submit.COUNTY = contact_edit.data[0].COUNTY,
             this.address_submit.STATE_OR_PROVINCE = contact_edit.data[0].STATE_OR_PROVINCE,
             this.address_submit.COUNTRY = contact_edit.data[0].COUNTRY,
             this.address_submit.POSTAL_CODE = contact_edit.data[0].POSTAL_CODE
            },
            error => {
                console.log('error logged:');
                console.log(error);
            }
        );
    };
}