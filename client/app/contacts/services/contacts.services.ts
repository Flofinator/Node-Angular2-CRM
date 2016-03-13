import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';


var headers = new Headers({
    'Content-Type' : 'application/json'
});


@Injectable()
export class ContactService {


    constructor(public http: Http) {

    }

    saveNewUser(jwt, form_body){
        headers.append('Authorization', jwt);
        return this.http.post('/api/users/add', JSON.stringify(form_body), {headers : headers})
            .map((response => response.json()));
    }

    saveEditContact(jwt, id, form_body){
        headers.append('Authorization', jwt);
        return this.http.post('/api/users/edit/'+id, JSON.stringify(form_body), {headers : headers})
            .map((response => response.json()));
    }

    deleteUser(jwt, id){
        headers.append('Authorization', jwt);
        return this.http.get('/api/users/delete/' + id, {headers: headers})
            .map((response => response.json()));
    }

    getContacts(jwt){
        var authHeader = new Headers();
        authHeader.append('Authorization', jwt);
        return this.http.get('/api/contacts/', {headers: authHeader})
            .map((response => response.json().data));
    }

    getEditContact(jwt, id){
        headers.append('Authorization', jwt);
        return this.http.get('/api/contacts/edit/' +id, {headers: headers})
            .map((response => response.json()))
    }


}
