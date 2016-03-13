import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';

var headers = new Headers({
    'Content-Type' : 'application/json'
});



@Injectable()
export class RoleService {


    constructor(public http: Http) {

    }

    saveNewRole(jwt, form_body){
        headers.append('Authorization', jwt);
        return this.http.post('/api/roles/add', JSON.stringify(form_body), {headers : headers})
            .map((response => response.json()));
    }

    deleteRole(jwt, id){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/roles/delete/' + id, {headers : authHeader})
            .map((response => response.json()));
    }

    getRoles(jwt){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/roles/', {headers : authHeader})
            .map((response => response.json().data));
    }

    getEditRole(jwt, id){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/roles/edit/' +id, {headers : authHeader})
            .map((response => response.json()))
    }

    saveEditRole(jwt, id, role_data, active_module_name, active_module, new_module_name, new_module){
        headers.append('Authorization', jwt);
        return this.http.post('/api/roles/edit/' + id, JSON.stringify({id, role_data, active_module_name, active_module, new_module_name, new_module}), {headers : headers})
            .map((response => response.json()));
    }

    getModules(jwt, module, id){
        headers.append('Authorization', jwt);
        return this.http.post('/api/roles/applied_role_modules/' +id, module, {headers : headers})
            .map((response => response.json()))
    }
}

