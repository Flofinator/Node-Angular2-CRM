System.register(['angular2/router', 'angular2/core', './services/login.services', "./../utility/localstorage/LocalStorage"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, login_services_1, LocalStorage_1;
    var Login;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_services_1_1) {
                login_services_1 = login_services_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(_loginService, router, _localStorage) {
                    this._loginService = _loginService;
                    this.router = router;
                    this._localStorage = _localStorage;
                    this.loggedIn = new core_1.EventEmitter();
                }
                Login.prototype.submitLogin = function (username, password) {
                    var _this = this;
                    var body = { username: username, password: password };
                    this._loginService.authenticate(body).subscribe(function (response) {
                        localStorage.setItem('jwt', response.json_token);
                        _this.router.navigate(['UserList']);
                        _this._localStorage.add(localStorage.getItem('jwt'));
                        _this._localStorage.logIn('true');
                    });
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        outputs: ['loggedIn : loggedIn'],
                        providers: [login_services_1.LoginService],
                        styles: ["\n            .center-vertically{\n                  margin-top: 10%;\n            }\n        "],
                        template: "\n        <div class=\"row center-vertically\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                <div class=\"panel panel-login\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <a href=\"#\" class=\"active\" id=\"login-form-link\"> Login</a>\n                            </div>\n                        </div>\n                        <div class=\"panel-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <form #f=\"ngForm\" (ngSubmit)=\"submitLogin(username.value, password.value)\">\n                                        <div class=\"form-group\">\n                                           <input type=\"text\" #username id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                           <input type=\"password\" #password id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n                                        </div>\n                                        <input type=\"submit\" name=\"submit\" value=\"Save\">\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [login_services_1.LoginService, router_1.Router, LocalStorage_1.LocalStorage])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.component.js.map