import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {RoleService} from '../services/roles.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'delete_role',
    template: `<h1> Deleted this Role </h1>`
})

export class RoleDelete implements OnInit{

    param: any;
    jwt: any;

    constructor(private _roleService: RoleService, private router: Router, params: RouteParams){
        this.param = params.get('id');
        this.jwt = localStorage.getItem('jwt');
    }

    ngOnInit(){
        this.deleteRole(this.jwt, this.param);
        this.router.navigate(['RolesList']);
    };

    deleteRole(jwt, id){
        this._roleService.deleteRole(jwt, id).subscribe();
    }
}