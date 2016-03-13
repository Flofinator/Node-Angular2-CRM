System.register(['angular2/core', 'angular2/common', '../services/users.services', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, users_services_1, router_1;
    var UserEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (users_services_1_1) {
                users_services_1 = users_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserEdit = (function () {
                function UserEdit(_userService, router, params) {
                    this._userService = _userService;
                    this.router = router;
                    this.radioOptions = 'Y N'.split(' ');
                    this.data = {};
                    this.params = params.get('id');
                    this.jwt = localStorage.getItem('jwt');
                }
                ;
                UserEdit.prototype.ngOnInit = function () {
                    this.getEditUser(this.jwt, this.params);
                };
                ;
                UserEdit.prototype.getEditUser = function (jwt, id) {
                    var _this = this;
                    this._userService.getEditUser(jwt, id).subscribe(function (user_edit) {
                        _this.user = user_edit.data[0],
                            _this.active_flags = user_edit.data[0].ACTIVE_FLAG,
                            _this.data.USERNAME = user_edit.data[0].USERNAME,
                            _this.data.PASSWORD = user_edit.data[0].PASSWORD,
                            _this.data.ACTIVE_FLAG = user_edit.data[0].ACTIVE_FLAG;
                    }, function (error) {
                        console.log('error logged:');
                        console.log(error);
                    });
                };
                ;
                UserEdit.prototype.changeActiveValue = function (item) {
                    this.active_flags = item;
                    this.data.ACTIVE_FLAG = item;
                };
                UserEdit.prototype.onSubmit = function () {
                    this._userService.saveEditUser(this.jwt, this.params, this.data).subscribe();
                    this.router.navigate(['UserList']);
                };
                UserEdit = __decorate([
                    core_1.Component({
                        selector: 'edit_user',
                        providers: [users_services_1.UserService],
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n  <div class=\"page-data\">\n\t<form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n\t\t<table cellpadding=\"11\">\n            <tr>\n                <div class=\"label\"> User Name </div>\n                    <input type=\"text\" [value]=\"user?.USERNAME\" [(ngModel)]=\"data.USERNAME\">\n                <br>\n                <br>\n                <div class=\"label\"> Password</div>\n                    <input type=\"text\" [value]=\"user?.PASSWORD\" [(ngModel)]=\"data.PASSWORD\">\n\n                <br>\n                <br>\n                <div class=\"label\"> Active Flag</div>\n                <label *ngFor=\"#item of radioOptions\">\n                    <input type=\"radio\" name=\"ACTIVE_FLAG\" (click)=\"changeActiveValue(item)\"\n                     [checked]=\"item === active_flags\" [value]=\"active_flags\" [(ngModel)]=\"data.ACTIVE_FLAG\">\n                    {{item}}\n                </label>\n                <br>\n                <br>\n            </tr>\n        <p>\n            <button type=\"submit\">Submit</button>\n        </p>\n\t\t</table>\n\t</form>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [users_services_1.UserService, router_1.Router, router_1.RouteParams])
                ], UserEdit);
                return UserEdit;
            })();
            exports_1("UserEdit", UserEdit);
        }
    }
});
//# sourceMappingURL=edit_user.component.js.map