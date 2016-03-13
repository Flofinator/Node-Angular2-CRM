import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';


var headers = new Headers({
    'Content-Type' : 'application/json'
});


@Injectable()
export class UserService {


    constructor(public http: Http) {

    }

    saveNewUser(jwt, form_body){
        headers.append('Authorization', jwt);
        return this.http.post('/api/users/add', JSON.stringify(form_body), {headers : headers})
            .map((response => response.json()));
    }

    saveEditUser(jwt, id, form_body){
        headers.append('Authorization', jwt);
        return this.http.post('/api/users/edit/'+id, JSON.stringify(form_body), {headers : headers})
            .map((response => response.json()));
    }

    deleteUser(jwt, id){
        headers.append('Authorization', jwt);
        return this.http.get('/api/users/delete/' + id, {headers: headers})
            .map((response => response.json()));
    }

    getUsers(jwt){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/users/', {headers: authHeader})
            .map((response => response.json().data));
    }

    getEditUser(jwt, id){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/users/edit/' +id, {headers: authHeader})
            .map((response => response.json()))
    }


}

