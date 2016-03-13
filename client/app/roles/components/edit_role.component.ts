import {Component, EventEmitter, OnInit} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {RoleService} from '../services/roles.services';
import {RouteParams, RouterLink, Router} from 'angular2/router';

//TODO Seperate and clean this up
class RoleModule{
    ROLE_ID: string;
    MODULE_NAME: string;
    INSERT_ALLOWED_FLAG: string;
    UPDATE_ALLOWED_FLAG: string;
    DELETE_ALLOWED_FLAG: string;
    QUERY_ONLY: string;
}

@Component({
    selector: 'role_modules',
    inputs: ['module'],
    template: `
    <table id="modules_table" border="1" cellpadding="7" cellspacing="7" *ngIf="module">
        <tr>
            <th width = "20%"> Module Name </th>
            <th width = "20%"> Insert </th>
            <th width = "20%"> Update </th>
            <th width = "20%"> Delete </th>
            <th width = "20%"> Query </th>
        </tr>
        <tr>
            <td width = "20%"> <div id="active_module_id"></div> {{module?.MODULE_NAME}} </td>
            <input type="hidden" name="active_module" value="{{module?.MODULE_NAME}}">
            <td>
            <input type="checkbox"
                          [ngModel]="module?.INSERT_ALLOWED_FLAG === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('insert')" checked>
            </td>

            <td>
            <input type="checkbox"
                          [ngModel]="module?.UPDATE_ALLOWED_FLAG === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('update')" checked>
            </td>

            <td>
            <input type="checkbox"
                          [ngModel]="module?.DELETE_ALLOWED_FLAG === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('delete')" checked>
            </td>

            <td>
            <input type="checkbox"
                          [ngModel]="module?.QUERY_ONLY === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('query')" checked>
            </td>
        </tr>
    </table>        `
})
    //TODO Clean this class up
class ModuleEdit{
    module: any;
    param: any;

    active_module: RoleModule;

    constructor(private _roleService: RoleService, params:RouteParams){
        this.param = params.get('id');
    }

    getModules(selected_module, id){
        this._roleService.getModules(selected_module, id).subscribe(role_module =>
            {this.module = role_module.data[0],
             this.active_module.INSERT_ALLOWED_FLAG = role_module.data[0].INSERT_ALLOWED_FLAG,
             this.active_module.UPDATE_ALLOWED_FLAG = role_module.data[0].UPDATE_ALLOWED_FLAG,
             this.active_module.DELETE_ALLOWED_FLAG = role_module.data[0].DELETE_ALLOWED_FLAG,
             this.active_module.QUERY_ONLY = role_module.data[0].QUERY_ONLY
             },
            error => {
                console.log('error logged:');
                console.log(error);
            }
        );
    }

    toggleModules(module_type) {

        if (module_type === 'insert') {
            //Insert  Flag
            if (this.module.INSERT_ALLOWED_FLAG === 'Y') {
                this.module.INSERT_ALLOWED_FLAG = 'N';
            } else {
                this.module.INSERT_ALLOWED_FLAG = 'Y';
                this.module.QUERY_ONLY = 'N';
            }
        }

        if (module_type === 'update') {
            //Update  Flag
            if (this.module.UPDATE_ALLOWED_FLAG === 'Y') {
                this.module.UPDATE_ALLOWED_FLAG = 'N';
            } else {
                this.module.UPDATE_ALLOWED_FLAG = 'Y';
                this.module.QUERY_ONLY = 'N';
            }
        }
        if (module_type === 'delete') {
            //Delete  Flag
            if (this.module.DELETE_ALLOWED_FLAG === 'Y') {
                this.module.DELETE_ALLOWED_FLAG = 'N';
            } else {
                this.module.DELETE_ALLOWED_FLAG = 'Y';
                this.module.QUERY_ONLY = 'N';
            }
        }

        if (module_type === 'query') {
            //Query  Flag
            if (this.module.QUERY_ONLY === 'Y') {
                this.module.QUERY_ONLY = 'N';
            } else {
                this.module.QUERY_ONLY = 'Y';
                this.module.DELETE_ALLOWED_FLAG = 'N';
                this.module.UPDATE_ALLOWED_FLAG = 'N';
                this.module.INSERT_ALLOWED_FLAG = 'N';
            }
        }
    }
}


@Component({
    selector: 'new_role_modules',
    inputs: ['new_module'],
    template: `
    <table id="new_modules_table" border="1" cellpadding="7" cellspacing="7" *ngIf="new_module">
        <tr>
            <th width = "20%"> Module Name </th>
            <th width = "20%"> Insert </th>
            <th width = "20%"> Update </th>
            <th width = "20%"> Delete </th>
            <th width = "20%"> Query </th>
        </tr>
        <tr>
            <td width = "20%"> <div id="active_module_id"></div> {{new_module?.MODULE_NAME}} </td>
            <input type="hidden" name="active_module" value="{{new_module?.MODULE_NAME}}">

            <td>
            <input type="checkbox"
                          [ngModel]="new_module?.INSERT_ALLOWED_FLAG === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('insert')" checked>
            </td>

            <td>
            <input type="checkbox"
                          [ngModel]="new_module?.UPDATE_ALLOWED_FLAG === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('update')" checked>
            </td>

            <td>
            <input type="checkbox"
                          [ngModel]="new_module?.DELETE_ALLOWED_FLAG === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('delete')" checked>
            </td>

            <td>
            <input type="checkbox"
                          [ngModel]="new_module?.QUERY_ONLY === 'Y' ? true : false"
                          (ngModelChange)="toggleModules('query')" checked>
            </td>
        </tr>
    </table>        `
})
    //TODO Clean this class up
class NewModuleEdit{
    new_module: any;
    param: any;
    jwt:any;

    constructor(private _roleService: RoleService, params:RouteParams){
        this.param = params.get('id');
        this.jwt = localStorage.getItem('jwt');
    }

    getModules(selected_module, id){
        this._roleService.getModules(this.jwt, selected_module, id).subscribe(role_module =>
            {this.new_module = role_module.data[0]},
            error => {
                console.log('error logged:');
                console.log(error);
            }
        );
    }

    toggleModules(module_type) {

        if (module_type === 'insert') {
            //Insert  Flag
            if (this.new_module.INSERT_ALLOWED_FLAG === 'Y') {
                this.new_module.INSERT_ALLOWED_FLAG = 'N';
            } else {
                this.new_module.INSERT_ALLOWED_FLAG = 'Y';
                this.new_module.QUERY_ONLY = 'N';
            }
        }

        if (module_type === 'update') {
            //Update  Flag
            if (this.new_module.UPDATE_ALLOWED_FLAG === 'Y') {
                this.new_module.UPDATE_ALLOWED_FLAG = 'N';
            } else {
                this.new_module.UPDATE_ALLOWED_FLAG = 'Y';
                this.new_module.QUERY_ONLY = 'N';
            }
        }
        if (module_type === 'delete') {
            //Delete  Flag
            if (this.new_module.DELETE_ALLOWED_FLAG === 'Y') {
                this.new_module.DELETE_ALLOWED_FLAG = 'N';
            } else {
                this.new_module.DELETE_ALLOWED_FLAG = 'Y';
                this.new_module.QUERY_ONLY = 'N';
            }
        }

        if (module_type === 'query') {
            //Query  Flag
            if (this.new_module.QUERY_ONLY === 'Y') {
                this.new_module.QUERY_ONLY = 'N';
            } else {
                this.new_module.QUERY_ONLY = 'Y';
                this.new_module.DELETE_ALLOWED_FLAG = 'N';
                this.new_module.UPDATE_ALLOWED_FLAG = 'N';
                this.new_module.INSERT_ALLOWED_FLAG = 'N';
            }
        }
    }
}


@Component({
  selector: 'edit_role',
  providers: [RoleService],
  directives: [CORE_DIRECTIVES, ModuleEdit, NewModuleEdit],
  templateUrl: 'app/roles/components/edit_role.html'
})
export class RoleEdit implements OnInit{

    jwt: any;
    role: any;
    modules: any;
    new_modules: any;
    params: any;
    role_submit: Object = {};
    role_submit.ROLE_NAME: string;
    role_submit.DESCRIPTION: string;
    role_submit.ACTIVE_FLAG: string;


    active_module: RoleModule;
    active_module_name = '';
    active_new_module: RoleModule;
    active_new_module_name = '';



    constructor(private _roleService: RoleService, params:RouteParams, private router: Router){
        this.params = params.get('id');
        this.jwt = localStorage.getItem('jwt');
    };

    ngOnInit(){
        this.getEditRole(this.jwt, this.params);
    };

    submitRoleEditForm(){
        this._roleService.saveEditRole(this.jwt, this.params, this.role_submit, this.active_module_name, this.active_module, this.active_new_module_name, this.active_new_module).subscribe();
        this.router.navigate(['RolesList']);
    }

    getEditRole(jwt, id){
        this._roleService.getEditRole(jwt, id).subscribe(role_edit =>
            {this.role = role_edit.data[0],
             this.role_submit.ROLE_NAME = role_edit.data[0].ROLE_NAME,
             this.role_submit.DESCRIPTION = role_edit.data[0].DESCRIPTION,
             this.role_submit.ACTIVE_FLAG = role_edit.data[0].ACTIVE_FLAG,
             this.modules = role_edit.modules,
             this.new_modules = role_edit.new_modules},
            error => {
                console.log('error logged:');
                console.log(error);
            }
        );
    };

    //TODO Change this to be a store at some point(when you get it more figured out!)
    gettingActiveModule(item){
        for(var i=0; i < this.modules.length; i++){
            if(this.modules[i].MODULE_NAME === item){
                this.active_module = this.modules[i];
                this.active_module_name = this.modules[i].MODULE_NAME;
            }
        }
        console.log(this.active_module);
        console.log(this.active_module_name);
    }

    //TODO Figure out how to do this in a store
    gettingActiveNewModule(item){
        for(var i=0; i < this.new_modules.length; i++){
            if(this.new_modules[i].MODULE_NAME === item){
                this.active_new_module = this.new_modules[i];
                this.active_new_module_name = this.new_modules[i].MODULE_NAME;
            }
        }
        console.log(this.active_new_module);
        console.log(this.active_new_module_name);
    }

    toggleRoleActive(){
        if(this.role_submit.ACTIVE_FLAG === 'Y'){
            this.role_submit.ACTIVE_FLAG = 'N';
        }else {
            this.role_submit.ACTIVE_FLAG = 'Y';
        }
    }

    toggleModules(module_type){
        if(module_type === 'module'){
            //Insert  Flag
            if(this.active_module.INSERT_ALLOWED_FLAG === 'Y'){
                this.active_module.INSERT_ALLOWED_FLAG = 'N';
                console.log(this.active_module.INSERT_ALLOWED_FLAG);
            }else {
                this.active_module.INSERT_ALLOWED_FLAG = 'Y';
                console.log(this.active_module.INSERT_ALLOWED_FLAG);
            }
            //Update  Flag
            if(this.active_module.UPDATE_ALLOWED_FLAG === 'Y'){
                this.active_module.UPDATE_ALLOWED_FLAG = 'N';
            }else {
                this.active_module.UPDATE_ALLOWED_FLAG = 'Y';
            }
            //Delete  Flag
            if(this.active_module.DELETE_ALLOWED_FLAG === 'Y'){
                this.active_module.DELETE_ALLOWED_FLAG = 'N';
            }else {
                this.active_module.DELETE_ALLOWED_FLAG = 'Y';
            }
            //Query  Flag
            if(this.active_module.QUERY_ONLY === 'Y'){
                this.active_module.QUERY_ONLY = 'N';
            }else {
                this.active_module.QUERY_ONLY = 'Y';
            }
        }

        if(module_type === 'new_module'){
            //Insert  Flag
            if(this.active_new_module.INSERT_ALLOWED_FLAG === 'Y'){
                this.active_new_module.INSERT_ALLOWED_FLAG = 'N';
                console.log(this.active_new_module.INSERT_ALLOWED_FLAG);
            }else {
                this.active_new_module.INSERT_ALLOWED_FLAG = 'Y';
                console.log(this.active_new_module.INSERT_ALLOWED_FLAG);
            }
            //Update  Flag
            if(this.active_new_module.UPDATE_ALLOWED_FLAG === 'Y'){
                this.active_new_module.UPDATE_ALLOWED_FLAG = 'N';
            }else {
                this.active_new_module.UPDATE_ALLOWED_FLAG = 'Y';
            }
            //Delete  Flag
            if(this.active_new_module.DELETE_ALLOWED_FLAG === 'Y'){
                this.active_new_module.DELETE_ALLOWED_FLAG = 'N';
            }else {
                this.active_new_module.DELETE_ALLOWED_FLAG = 'Y';
            }
            //Query  Flag
            if(this.active_new_module.QUERY_ONLY === 'Y'){
                this.active_new_module.QUERY_ONLY = 'N';
            }else {
                this.active_new_module.QUERY_ONLY = 'Y';
            }
        }
    }

}
