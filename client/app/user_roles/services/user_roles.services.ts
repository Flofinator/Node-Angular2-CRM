import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';

var headers = new Headers();
headers.append('Content-Type', 'application/json');

@Injectable()
export class UserRoleService {


    constructor(public http: Http) {

    }

    saveNewUserRole(jwt, form_body){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.post('/api/user_roles/add', JSON.stringify(form_body), {headers : authHeader})
            .map((response => response.json()));
    }

    deleteUserRole(jwt, user_id, role_id){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/user_roles/delete/' + user_id+'/'+role_id, {headers : authHeader})
            .map((response => response.json()));
    }

    getUserRoles(jwt){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/user_roles/', {headers : authHeader})
            .map((response => response.json().data));
    }

    getUsersAndRoles(jwt){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/user_roles/add', {headers : authHeader})
            .map((response => response.json().data));
    }

    reactivateUserRole(jwt, user_id, role_id){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/user_roles/reactivate/' + user_id+'/'+role_id, {headers : authHeader})
            .map((response => response.json()));
    }


}

