import {RouteParams, RouterLink, Router} from 'angular2/router';
import {Component, EventEmitter} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {LoginService} from './services/login.services';
import {LocalStorage} from "./../utility/localstorage/LocalStorage";


@Component({
    selector: 'login',
    outputs: ['loggedIn : loggedIn'],
    providers: [LoginService],
    styles: [`
            .center-vertically{
                  margin-top: 10%;
            }
        `],
    template: `
        <div class="row center-vertically">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-login">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-lg-12">
                                <a href="#" class="active" id="login-form-link"> Login</a>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <form #f="ngForm" (ngSubmit)="submitLogin(username.value, password.value)">
                                        <div class="form-group">
                                           <input type="text" #username id="username" tabindex="1" class="form-control" placeholder="Username">
                                        </div>
                                        <div class="form-group">
                                           <input type="password" #password id="password" tabindex="2" class="form-control" placeholder="Password">
                                        </div>
                                        <input type="submit" name="submit" value="Save">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})

export class Login{

    jwt: any;
    username: string;
    password: string;
    loggedIn: EventEmitter<boolean>;

    constructor(public _loginService: LoginService, public router: Router, private _localStorage: LocalStorage){
        this.loggedIn = new EventEmitter<boolean>();
    }

    submitLogin(username, password){
        let body = {username, password};
        this._loginService.authenticate(body).subscribe(
            response => {
                localStorage.setItem('jwt', response.json_token);
                this.router.navigate(['UserList']);
                this._localStorage.add(localStorage.getItem('jwt'));
                this._localStorage.logIn('true');
            }
        );

    }


}