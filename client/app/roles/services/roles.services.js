System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var headers, RoleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            headers = new http_1.Headers({
                'Content-Type': 'application/json'
            });
            RoleService = (function () {
                function RoleService(http) {
                    this.http = http;
                }
                RoleService.prototype.saveNewRole = function (jwt, form_body) {
                    headers.append('Authorization', jwt);
                    return this.http.post('/api/roles/add', JSON.stringify(form_body), { headers: headers })
                        .map((function (response) { return response.json(); }));
                };
                RoleService.prototype.deleteRole = function (jwt, id) {
                    var authHeader = new http_1.Headers();
                    authHeader.append('Authorization', jwt);
                    return this.http.get('/api/roles/delete/' + id, { headers: authHeader })
                        .map((function (response) { return response.json(); }));
                };
                RoleService.prototype.getRoles = function (jwt) {
                    var authHeader = new http_1.Headers();
                    authHeader.append('Authorization', jwt);
                    return this.http.get('/api/roles/', { headers: authHeader })
                        .map((function (response) { return response.json().data; }));
                };
                RoleService.prototype.getEditRole = function (jwt, id) {
                    var authHeader = new http_1.Headers();
                    authHeader.append('Authorization', jwt);
                    return this.http.get('/api/roles/edit/' + id, { headers: authHeader })
                        .map((function (response) { return response.json(); }));
                };
                RoleService.prototype.saveEditRole = function (jwt, id, role_data, active_module_name, active_module, new_module_name, new_module) {
                    headers.append('Authorization', jwt);
                    return this.http.post('/api/roles/edit/' + id, JSON.stringify({ id: id, role_data: role_data, active_module_name: active_module_name, active_module: active_module, new_module_name: new_module_name, new_module: new_module }), { headers: headers })
                        .map((function (response) { return response.json(); }));
                };
                RoleService.prototype.getModules = function (jwt, module, id) {
                    headers.append('Authorization', jwt);
                    return this.http.post('/api/roles/applied_role_modules/' + id, module, { headers: headers })
                        .map((function (response) { return response.json(); }));
                };
                RoleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RoleService);
                return RoleService;
            })();
            exports_1("RoleService", RoleService);
        }
    }
});
//# sourceMappingURL=roles.services.js.map