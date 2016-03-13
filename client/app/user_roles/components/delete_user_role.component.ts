import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {UserRoleService} from '../services/user_roles.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'delete_user_role',
    providers: [UserRoleService],
    template: `<h1> Deleted this User </h1>`
})

export class UserRoleDelete implements OnInit{

    user_id: any;
    role_id: any;
    jwt: any;

    constructor(private _userRoleService: UserRoleService, private router: Router, params: RouteParams){
        this.user_id = params.get('userid');
        this.role_id = params.get('roleid');
        this.jwt = localStorage.getItem('jwt');
    }

    ngOnInit(){
        this.deleteRole(this.jwt, this.user_id, this.role_id);
        this.router.navigate(['UserRolesList']);
    };

    deleteRole(jwt, user_id, role_id){
        this._userRoleService.deleteUserRole(jwt, user_id, role_id).subscribe();
    }
}