System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1;
    var JwtHelper, LoggedInRouterOutlet;
    /**
     * Checks for presence of token and that token hasn't expired.
     * For use with the @CanActivate router decorator and NgIf
     */
    function tokenNotExpired(tokenName, jwt) {
        var authToken = tokenName || 'id_token';
        var token;
        if (jwt) {
            token = jwt;
        }
        else {
            token = localStorage.getItem(authToken);
        }
        var jwtHelper = new JwtHelper();
        if (!token || jwtHelper.isTokenExpired(token, null)) {
            return false;
        }
        else {
            return true;
        }
    }
    exports_1("tokenNotExpired", tokenNotExpired);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            JwtHelper = (function () {
                function JwtHelper() {
                }
                JwtHelper.prototype.urlBase64Decode = function (str) {
                    var output = str.replace(/-/g, '+').replace(/_/g, '/');
                    switch (output.length % 4) {
                        case 0: {
                            break;
                        }
                        case 2: {
                            output += '==';
                            break;
                        }
                        case 3: {
                            output += '=';
                            break;
                        }
                        default: {
                            throw 'Illegal base64url string!';
                        }
                    }
                    return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
                };
                JwtHelper.prototype.decodeToken = function (token) {
                    var parts = token.split('.');
                    if (parts.length !== 3) {
                        throw new Error('JWT must have 3 parts');
                    }
                    var decoded = this.urlBase64Decode(parts[1]);
                    if (!decoded) {
                        throw new Error('Cannot decode the token');
                    }
                    return JSON.parse(decoded);
                };
                JwtHelper.prototype.getTokenExpirationDate = function (token) {
                    var decoded;
                    decoded = this.decodeToken(token);
                    if (typeof decoded.exp === "undefined") {
                        return null;
                    }
                    var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
                    date.setUTCSeconds(decoded.exp);
                    return date;
                };
                JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
                    var date = this.getTokenExpirationDate(token);
                    offsetSeconds = offsetSeconds || 0;
                    if (date === null) {
                        return false;
                    }
                    // Token expired?
                    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
                };
                return JwtHelper;
            })();
            exports_1("JwtHelper", JwtHelper);
            LoggedInRouterOutlet = (function (_super) {
                __extends(LoggedInRouterOutlet, _super);
                function LoggedInRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
                    _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
                    this.parentRouter = _parentRouter;
                    this.publicRoutes = {};
                }
                LoggedInRouterOutlet.prototype.activate = function (instruction) {
                    //console.log(this.loginHelperService.check_jwt_expiration(localStorage.getItem('jwt')));
                    if (!localStorage.getItem('jwt') || !tokenNotExpired('jwt')) {
                        // todo: redirect to Login, may be there is a better way?
                        if (localStorage.getItem('jwt')) {
                            localStorage.removeItem('jwt');
                        }
                        this.parentRouter.navigate(['Login']);
                    }
                    return _super.prototype.activate.call(this, instruction);
                };
                LoggedInRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'router-outlet'
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String])
                ], LoggedInRouterOutlet);
                return LoggedInRouterOutlet;
            })(router_1.RouterOutlet);
            exports_1("LoggedInRouterOutlet", LoggedInRouterOutlet);
        }
    }
});
//# sourceMappingURL=LoggedInOutlets.js.map