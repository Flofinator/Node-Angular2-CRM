import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';

var headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');

@Injectable()
export class LoginService {

    constructor(public http: Http) {

    }

    authenticate(form_body){
        return this.http.post('/login', JSON.stringify(form_body), {headers: headers})
                .map((response => response.json()));
    }

}