import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {UserService} from '../services/users.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'delete_user',
    template: `<h1> Deleted this User </h1>`
})

export class UserDelete implements OnInit{

    param: any;
    jwt: any;

    constructor(private _userService: UserService, private router: Router, params: RouteParams){
        this.param = params.get('id');
        this.jwt = localStorage.getItem('jwt');
    }

    ngOnInit(){
        this.deleteRole(this.jwt, this.param);
        this.router.navigate(['UserList']);
    };

    deleteRole(jwt, id){
        this._userService.deleteUser(jwt, id).subscribe();
    }
}