import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.components';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {provide} from 'angular2/core';
import {AuthHttp, AuthConfig} from './utility/authHttp';
import {LoginService} from "./login/services/login.services";
import {Login} from "./login/login.component";
import {LocalStorage} from "./utility/localstorage/LocalStorage";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    LocalStorage,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
])
.catch(err => console.error(err));